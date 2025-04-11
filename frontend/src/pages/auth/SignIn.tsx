import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import { User2Icon } from "lucide-react";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-4">
      {/* Logo and Branding */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="rounded-full bg-blue-600 p-3 shadow-lg">
            <User2Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome Back</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Sign in to access your account</p>
      </div>
      
      {/* Card Container */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        {/* Top accent bar */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        {/* Clerk SignIn Component */}
        <div className="p-6">
          <ClerkSignIn appearance={{
            elements: {
              formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
              card: 'shadow-none',
              footerAction: 'text-blue-600 hover:text-blue-700',
              headerTitle: 'hidden', // Hide the original title
              headerSubtitle: 'hidden', // Hide the original subtitle
            }
          }} />
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;