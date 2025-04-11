import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
    error: false
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simulating form submission
    if (formState.name && formState.email && formState.message) {
      setFormState({...formState, submitted: true, error: false});
    } else {
      setFormState({...formState, error: true});
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 dark:bg-blue-600 dark:opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-200 opacity-20 dark:bg-purple-600 dark:opacity-10"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-teal-200 opacity-20 dark:bg-teal-600 dark:opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            Have a question or want to work together? Drop me a message and I'll get back to you soon.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 border border-gray-100 dark:border-gray-700">
          {formState.submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle size={64} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setFormState({name: '', email: '', message: '', submitted: false, error: false})}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {formState.error && (
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-6 flex items-center">
                  <AlertCircle className="text-red-500 mr-3" size={20} />
                  <p className="text-red-600 dark:text-red-400 text-sm">Please fill out all fields before submitting.</p>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition duration-300 font-medium flex items-center justify-center group"
              >
                <span>Send Message</span>
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}