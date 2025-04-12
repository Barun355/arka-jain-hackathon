import { clerkClient } from "@clerk/express";
import { prismaClient } from "../services/prismaClient.js";

/**
 * @desc Onboard a user as either mentor or mentee
 * @route POST /api/onboarding
 * @access Private
 */
export const onboardUser = async (req, res) => {
  try {
    const {
      userId, // Assuming user ID is passed or extracted from auth token
      name,
      email,
      phone,
      role, // 'mentor' or 'mentee'
      // Mentor specific fields
      expertise,
      experience,
      availability,
      // Mentee specific fields
      interests,
      goals,
      preferredSchedule,
    } = req.body;

    console.log(req.body)
    if (!userId || !name || !email || !role) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (role !== "mentor" && role !== "mentee") {
      return res.status(400).json({ error: "Invalid role specified" });
    }

    const user = await prismaClient.user.findFirst({
      where: {
        id: userId
      }
    })
    console.log(user)
    if (user?.id) {
      return res.json({ message: "User already exists", datat: user, error: null}).status(200)
    }


    const data = await prismaClient.user.create({
      data: {
        id: userId,
        email,
        name,
        role,
        isOnboarded: true,
        phone,
      },
    });

    console.log(data)

    if (data.id) {
      if (role === "mentor") {
        const mentor = await prismaClient.mentorProfile.create({
          data: {
            availability,
            experience,
            expertise,
            userId,
          },
        });

        console.log(mentor)

        if (!mentor.id) {
          return res.json({
            message: "Mentor not created",
            error: "Mentor not created",
            data: null,
          });
        }
      } else if (role === "mentee") {
        const mentee = await prismaClient.menteeProfile.create({
          data: {
            goals,
            interests,
            preferredSchedule,
            userId
          },
        });
        console.log(mentee)
        if (!mentee.id) {
          return res.json({
            message: "Mentee not created",
            error: "Mentee not created",
            data: null,
          });
        }
      }

      await clerkClient.users.updateUser(userId, {
        publicMetadata: {
          role,
          onboardingComplete: true
        }
      })
    }

    return res.status(200).json({
      message: `User successfully onboarded as ${role}`,
      data,
      error: null
    });

  } catch (error) {
    console.error("Onboarding error:", error);

    if (
      error.message === "Missing required mentor fields" ||
      error.message === "Missing required mentee fields"
    ) {
      return res.status(400).json({ error: error.message });
    }

    // Handle specific prisa errors
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Email already in use" });
    }

    if (error.code === "P2025") {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(500).json({ error: "Failed to onboard user" });
  }
};
