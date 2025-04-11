import { SignUp as ClerkSignUp } from "@clerk/clerk-react";
import { UserPlus, ArrowRight } from "lucide-react";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-4">
      {/* Logo and Branding */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="rounded-full bg-indigo-600 p-3 shadow-lg">
            <UserPlus className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Create Your Account</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Join us to get started with your journey</p>
      </div>
      
      {/* Card Container */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        {/* Top accent bar */}
        <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        
        {/* Clerk SignUp Component */}
        <div className="p-6">
          <ClerkSignUp appearance={{
            elements: {
              formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
              card: 'shadow-none',
              footerAction: 'text-indigo-600 hover:text-indigo-700',
              headerTitle: 'hidden', // Hide the original title
              headerSubtitle: 'hidden', // Hide the original subtitle
            }
          }} />
        </div>
      </div>
      
      {/* Additional Info */}
      <div className="mt-8 w-full max-w-md">
        <div className="bg-indigo-50 dark:bg-gray-700 rounded-lg p-4 border border-indigo-100 dark:border-gray-600">
          <h3 className="font-medium text-indigo-800 dark:text-indigo-300 flex items-center">
            <ArrowRight className="h-4 w-4 mr-2" />
            Why sign up with us?
          </h3>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-6 list-disc">
            <li>Access to exclusive content and features</li>
            <li>Personalized experience tailored to your needs</li>
            <li>Secure and reliable service</li>
          </ul>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Terms of Service</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;