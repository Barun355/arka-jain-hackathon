import { UserButton } from "@clerk/clerk-react";
import {
  Home, 
  Users, 
  Calendar, 
  Settings,
  Award,
  PenTool,
  UserPlus,
  Search,
  BookMarked
} from "lucide-react";

const CustomUserButton = ({userRole}: { userRole: any}) => {


  // Common menu items for both roles
  const commonMenuItems = [
    { label: "Dashboard", icon: <Home className="h-4 w-4" />, href: `/dashboard/${userRole}` },
    { label: "Settings", icon: <Settings className="h-4 w-4" />, href: "/settings" },
  ];

  // Role-specific menu items
  const mentorMenuItems = [
    { label: "Create Sessions", icon: <Calendar className="h-4 w-4" />, href: "/sessions/create" },
    { label: "Create Collab", icon: <PenTool className="h-4 w-4" />, href: "/collab/create" },
    { label: "Find Mentees", icon: <UserPlus className="h-4 w-4" />, href: "/find-mentees" },
  ];

  const menteeMenuItems = [
    { label: "Search Peers", icon: <Search className="h-4 w-4" />, href: "/search-peers" },
    { label: "Project Showcase", icon: <Award className="h-4 w-4" />, href: "/showcase" },
    { label: "Collaborations", icon: <BookMarked className="h-4 w-4" />, href: "/collaborations" },
    { label: "Find Mentors", icon: <Users className="h-4 w-4" />, href: "/find-mentors" },
    { label: "Sessions", icon: <Calendar className="h-4 w-4" />, href: "/sessions" },
  ];

  // Determine which menu items to display based on role
  const roleSpecificItems = userRole === "mentor" ? mentorMenuItems : menteeMenuItems;
  const allMenuItems = [...commonMenuItems, ...roleSpecificItems];

  return (
    <UserButton>
      <UserButton.MenuItems>
        {allMenuItems.map((item, index) => (
          <UserButton.Link
            key={index}
            label={item.label}
            labelIcon={item.icon}
            href={item.href}
          />
        ))}
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default CustomUserButton;