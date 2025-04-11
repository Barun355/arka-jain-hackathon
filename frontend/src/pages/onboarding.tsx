import { useState } from "react";
import {
  CheckCircle,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  BookOpen,
} from "lucide-react";

const UserRegistrationForm = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>("mentor");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // Mentor specific fields
    expertise: "",
    experience: "",
    availability: "",
    // Mentee specific fields
    interests: "",
    goals: "",
    preferredSchedule: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRoleSelect = (role: any) => {
    setSelectedRole(role);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your API submission logic here
      const dataToSubmit = {
        role: selectedRole,
        ...formData,
      };

      console.log("Submitting data:", dataToSubmit);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success handling
      alert(`Successfully registered as a ${selectedRole}!`);
      setFormData({
        name: "",
        email: "",
        phone: "",
        expertise: "",
        experience: "",
        availability: "",
        interests: "",
        goals: "",
        preferredSchedule: "",
      });
      setSelectedRole(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8">
          Join Our Mentorship Program
        </h1>

        {/* Role Selection Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={() => handleRoleSelect("mentor")}
            className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 ${
              selectedRole === "mentor"
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-gray-300 hover:border-blue-300 hover:bg-blue-50"
            } transition-colors duration-200`}
          >
            <Briefcase size={20} />
            <span className="font-medium">I want to be a Mentor</span>
            {selectedRole === "mentor" && (
              <CheckCircle size={20} className="text-blue-600" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleRoleSelect("mentee")}
            className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 ${
              selectedRole === "mentee"
                ? "border-green-600 bg-green-50 text-green-600"
                : "border-gray-300 hover:border-green-300 hover:bg-green-50"
            } transition-colors duration-200`}
          >
            <GraduationCap size={20} />
            <span className="font-medium">I want to be a Mentee</span>
            {selectedRole === "mentee" && (
              <CheckCircle size={20} className="text-green-600" />
            )}
          </button>
        </div>

        {selectedRole && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Common Fields */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">
                Basic Information
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mentor-specific Fields */}
            {selectedRole === "mentor" && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-2 text-blue-700">
                  Mentor Information
                </h2>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="expertise"
                  >
                    Areas of Expertise
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="expertise"
                      name="expertise"
                      required
                      value={formData.expertise}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Web Development, Machine Learning, Marketing"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="experience"
                  >
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="1-3">1-3 years</option>
                    <option value="4-6">4-6 years</option>
                    <option value="7-10">7-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="availability"
                  >
                    Availability
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select availability</option>
                    <option value="1-2 hours/week">1-2 hours/week</option>
                    <option value="3-5 hours/week">3-5 hours/week</option>
                    <option value="5+ hours/week">5+ hours/week</option>
                  </select>
                </div>
              </div>
            )}

            {/* Mentee-specific Fields */}
            {selectedRole === "mentee" && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-2 text-green-700">
                  Mentee Information
                </h2>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="interests"
                  >
                    Areas of Interest
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookOpen size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="interests"
                      name="interests"
                      required
                      value={formData.interests}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Web Development, Machine Learning, Marketing"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="goals"
                  >
                    Learning Goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    value={formData.goals}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What do you hope to achieve through mentorship?"
                  ></textarea>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="preferredSchedule"
                  >
                    Preferred Schedule
                  </label>
                  <select
                    id="preferredSchedule"
                    name="preferredSchedule"
                    required
                    value={formData.preferredSchedule}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select schedule preference</option>
                    <option value="Weekday evenings">Weekday evenings</option>
                    <option value="Weekday mornings">Weekday mornings</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>
            )}

            <div className="pt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium ${
                  selectedRole === "mentor"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-green-600 hover:bg-green-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedRole === "mentor"
                    ? "focus:ring-blue-500"
                    : "focus:ring-green-500"
                } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting
                  ? "Submitting..."
                  : `Register as a ${
                      selectedRole === "mentor" ? "Mentor" : "Mentee"
                    }`}
              </button>
            </div>
          </form>
        )}

        {!selectedRole && (
          <div className="text-center py-10 text-gray-500">
            Please select your role to continue
          </div>
        )}
      </div>
    </div>
  );
};

export default UserRegistrationForm;
