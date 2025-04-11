# 🧠 Arka Jain Hackathon 2025 – Collaborative Skill-Based EdTech Network

## 🚀 Overview

A collaborative EdTech platform designed to bridge the gap between aspiring learners (mentees) and experienced professionals (mentors), enabling skill-sharing, project collaboration, and community-driven growth. The platform also supports moderators for future scaling and quality control.

---

## 👥 User Roles & Features

### 🔹 Mentee

- **Onboarding (Requires Approval)**
  - College Name
  - Address
  - Previous Skills
  - Previous Experience
  - Project Showcase (minimal details)
  - Tech Stack

- **Functionalities**
  - Search for peers
  - Participate in collaborations
  - Find and connect with mentors
  - Attend live sessions
  - Showcase personal projects

---

### 🔸 Mentor

- **Onboarding**
- **Create Sessions**
  - One-to-One (Category 1)
  - One-to-Many (Category 2)
    - Workshops
    - Tech Sessions
    - General Sessions
  - Custom (Category 3)

- **Create Collaborations**
- **Search Mentees**
  - Filter: Follower / Non-follower

---

### 🛡️ Moderator *(Optional, Future Enhancement)*

- Feature set not finalized yet.

---

## 🛠️ Tech Stack

### 📦 Monorepo Structure

#### Apps

- **Web** – Mentee & Mentor dashboard
- **Backend** – REST API / Serverless functions
- **Mobile App** – Future scope
- **Landing Page** – Marketing and awareness

#### Packages

- `ui` – Reusable design components
- `types` – Global TypeScript types
- `db` – Database schema and ORM

---

### 🧰 Technologies Used

#### 🌐 Web Frontend

- Next.js
- TypeScript
- react-hook-form
- Zod (Form validation)
- Zustand / Redux Toolkit (State management)
- shadcn/ui (UI components)

#### 🔙 Backend

- **VPS Deployment**
  - Node.js
  - TypeScript
  - Express (REST API)
  - Clerk (Authentication)

- **Alternative: Serverless**
  - Cloudflare Workers
  - Hono.js (API framework)
  - Clerk integration

#### 🗃️ Database

- Prisma ORM
- PostgreSQL
  - Development: Local or Docker
  - Production: Supabase / NeonDB

---

## 🔐 Authentication

- Powered by **Clerk** for user auth and custom onboarding flows.

---

## ⚠️ Deployment Note

> **Note:** Backend stack (VPS or Serverless) may vary based on the final deployment environment.

---

## 📌 Contributors & Licensing

To be added after team finalization. Contributions welcome!

---

## 📞 Contact

For any queries, reach out to the team or [your contact method here].


