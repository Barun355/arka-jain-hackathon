import React, { useState } from 'react';
import { Calendar, Clock, X, Plus, Minus } from 'lucide-react';

export type SessionType = 
  | 'one-to-one' 
  | 'one-to-many' 
  | 'workshop' 
  | 'tech' 
  | 'general' 
  | 'custom';

export type SessionCategory = 'category-1' | 'category-2' | 'category-3';

export interface SessionFormData {
  title: string;
  description: string;
  type: SessionType;
  category: SessionCategory;
  date: string;
  startTime: string;
  duration: number;
  maxParticipants?: number;
  mentees: string[];
  recurring: boolean;
  recurringDays?: string[];
  customTypeDescription?: string;
}

interface CreateSessionProps {
  availableMentees: {
    id: string;
    name: string;
    skills: string[];
  }[];
  onCreate: (sessionData: SessionFormData) => void;
  onCancel: () => void;
}

const CreateSession: React.FC<CreateSessionProps> = ({ 
  availableMentees, 
  onCreate, 
  onCancel 
}) => {
  const [sessionData, setSessionData] = useState<SessionFormData>({
    title: '',
    description: '',
    type: 'one-to-one',
    category: 'category-1',
    date: '',
    startTime: '',
    duration: 30,
    maxParticipants: 1,
    mentees: [],
    recurring: false,
    recurringDays: [],
    customTypeDescription: ''
  });

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [showMenteeSelector, setShowMenteeSelector] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSessionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTypeChange = (type: SessionType) => {
    let category: SessionCategory = 'category-1';
    let maxParticipants = 1;

    if (type === 'one-to-one') {
      category = 'category-1';
      maxParticipants = 1;
    } else if (type === 'one-to-many') {
      category = 'category-2';
      maxParticipants = 5;
    } else if (type === 'workshop') {
      category = 'category-2';
      maxParticipants = 10;
    } else if (type === 'tech') {
      category = 'category-2';
      maxParticipants = 8;
    } else if (type === 'general') {
      category = 'category-2';
      maxParticipants = 15;
    } else if (type === 'custom') {
      category = 'category-3';
      maxParticipants = 20;
    }

    setSessionData(prev => ({
      ...prev,
      type,
      category,
      maxParticipants,
      mentees: prev.mentees.slice(0, maxParticipants) // Truncate if needed
    }));
  };

  const handleDurationChange = (increment: boolean) => {
    setSessionData(prev => {
      const newDuration = increment 
        ? Math.min(240, prev.duration + 15) // Max 4 hours
        : Math.max(15, prev.duration - 15); // Min 15 minutes
      return {
        ...prev,
        duration: newDuration
      };
    });
  };

  const toggleMentee = (menteeId: string) => {
    setSessionData(prev => {
      const isSelected = prev.mentees.includes(menteeId);
      let newMentees;
      
      if (isSelected) {
        newMentees = prev.mentees.filter(id => id !== menteeId);
      } else {
        // For one-to-one, only allow one mentee
        if (prev.type === 'one-to-one' && prev.mentees.length >= 1) {
          return prev;
        }
        // Don't exceed max participants
        if (prev.mentees.length >= (prev.maxParticipants || 1)) {
          return prev;
        }
        newMentees = [...prev.mentees, menteeId];
      }
      
      return {
        ...prev,
        mentees: newMentees
      };
    });
  };

  const toggleRecurringDay = (day: string) => {
    setSessionData(prev => {
      const newDays = prev.recurringDays?.includes(day)
        ? prev.recurringDays.filter(d => d !== day)
        : [...(prev.recurringDays || []), day];
      
      return {
        ...prev,
        recurringDays: newDays
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sessionToCreate = {
      ...sessionData,
      customTypeDescription: sessionData.type === 'custom' ? sessionData.customTypeDescription : undefined
    };
    onCreate(sessionToCreate);
  };

  const renderSessionTypeOptions = () => {
    const types: { value: SessionType; label: string; description: string }[] = [
      { value: 'one-to-one', label: 'One to One', description: 'Personalized session with a single mentee' },
      { value: 'one-to-many', label: 'One to Many', description: 'Session with multiple mentees (up to 5)' },
      { value: 'workshop', label: 'Workshop', description: 'Interactive hands-on workshop' },
      { value: 'tech', label: 'Tech Session', description: 'Technical deep dive on a specific topic' },
      { value: 'general', label: 'General', description: 'Open session for general mentoring' },
      { value: 'custom', label: 'Custom', description: 'Create your own session type' },
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {types.map(type => (
          <div
            key={type.value}
            onClick={() => handleTypeChange(type.value)}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              sessionData.type === type.value
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <h3 className="font-medium">{type.label}</h3>
            <p className="text-sm text-gray-600 mt-1">{type.description}</p>
            <div className="mt-2 text-xs text-blue-600">
              {type.value === 'one-to-one' ? 'Category 1' : 
               type.value === 'custom' ? 'Category 3' : 'Category 2'}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderMenteeSelector = () => (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">
          Select Mentees ({sessionData.mentees.length}/{sessionData.maxParticipants})
        </label>
        <button
          type="button"
          onClick={() => setShowMenteeSelector(!showMenteeSelector)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {showMenteeSelector ? 'Hide' : 'Show'} mentees
        </button>
      </div>
      
      {sessionData.mentees.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {sessionData.mentees.map(menteeId => {
            const mentee = availableMentees.find(m => m.id === menteeId);
            return (
              <span 
                key={menteeId}
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
              >
                {mentee?.name}
                <button
                  type="button"
                  onClick={() => toggleMentee(menteeId)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <X size={14} />
                </button>
              </span>
            );
          })}
        </div>
      )}

      {showMenteeSelector && (
        <div className="mt-2 border rounded-lg p-4 max-h-60 overflow-y-auto">
          {availableMentees.map(mentee => (
            <div
              key={mentee.id}
              onClick={() => toggleMentee(mentee.id)}
              className={`p-2 mb-2 rounded cursor-pointer ${
                sessionData.mentees.includes(mentee.id)
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{mentee.name}</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {mentee.skills.map(skill => (
                      <span key={skill} className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {sessionData.mentees.includes(mentee.id) && (
                  <span className="text-green-600">✓</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderRecurringOptions = () => (
    <div className="mt-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={sessionData.recurring}
          onChange={() => setSessionData(prev => ({
            ...prev,
            recurring: !prev.recurring,
            recurringDays: !prev.recurring ? [] : prev.recurringDays
          }))}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <span className="ml-2 text-sm font-medium text-gray-700">Recurring session</span>
      </label>

      {sessionData.recurring && (
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Repeat on:
          </label>
          <div className="flex flex-wrap gap-2">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <button
                key={day}
                type="button"
                onClick={() => toggleRecurringDay(day)}
                className={`px-3 py-1 rounded-full text-sm ${
                  sessionData.recurringDays?.includes(day)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {day.substring(0, 3)}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Note: Recurring sessions are limited to 8 weeks maximum
          </p>
        </div>
      )}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Session Details</h2>
        <p className="text-gray-600 mt-1">Select the type of session you want to create</p>
      </div>

      {renderSessionTypeOptions()}

      {sessionData.type === 'custom' && (
        <div className="mt-4">
          <label htmlFor="customTypeDescription" className="block text-sm font-medium text-gray-700">
            Custom Type Description
          </label>
          <input
            type="text"
            id="customTypeDescription"
            name="customTypeDescription"
            value={sessionData.customTypeDescription}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="Describe your custom session type"
          />
        </div>
      )}

      <div className="mt-6">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Session Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={sessionData.title}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          placeholder="e.g. React Hooks Workshop"
          required
        />
      </div>

      <div className="mt-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          value={sessionData.description}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          placeholder="What will this session cover?"
          required
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => setStep(2)}
          disabled={!sessionData.title || !sessionData.description}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
        >
          Next: Schedule
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Schedule Session</h2>
        <p className="text-gray-600 mt-1">Set the date, time, and duration for your session</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="date"
              name="date"
              value={sessionData.date}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
            Start Time
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={sessionData.startTime}
              onChange={handleInputChange}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Duration (minutes)
        </label>
        <div className="mt-1 flex items-center">
          <button
            type="button"
            onClick={() => handleDurationChange(false)}
            className="p-2 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
          >
            <Minus className="h-4 w-4" />
          </button>
          <div className="px-4 py-2 border-t border-b border-gray-300 bg-white text-center w-20">
            {sessionData.duration}
          </div>
          <button
            type="button"
            onClick={() => handleDurationChange(true)}
            className="p-2 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {renderRecurringOptions()}

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => setStep(3)}
          disabled={!sessionData.date || !sessionData.startTime}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
        >
          Next: Participants
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Participants</h2>
        <p className="text-gray-600 mt-1">
          {sessionData.type === 'one-to-one' 
            ? 'Select one mentee for this session' 
            : 'Select mentees for this session'}
        </p>
      </div>

      {renderMenteeSelector()}

      {sessionData.type !== 'one-to-one' && (
        <div className="mt-4">
          <label htmlFor="maxParticipants" className="block text-sm font-medium text-gray-700">
            Maximum Participants
          </label>
          <input
            type="number"
            id="maxParticipants"
            name="maxParticipants"
            min="1"
            max={sessionData.type === 'custom' ? '50' : sessionData.type === 'general' ? '20' : '15'}
            value={sessionData.maxParticipants}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={sessionData.mentees.length === 0 || 
                    (sessionData.type === 'one-to-one' && sessionData.mentees.length !== 1)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-green-400"
        >
          Create Session
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Session</h1>
      
      <div className="mb-6">
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            1
          </div>
          <div className={`ml-2 text-sm ${
            step >= 1 ? 'font-medium text-blue-600' : 'text-gray-500'
          }`}>
            Session Details
          </div>
        </div>
        
        <div className="flex items-center mt-2">
          <div className="h-6 w-0.5 bg-gray-300 ml-4"></div>
        </div>
        
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            2
          </div>
          <div className={`ml-2 text-sm ${
            step >= 2 ? 'font-medium text-blue-600' : 'text-gray-500'
          }`}>
            Schedule
          </div>
        </div>
        
        <div className="flex items-center mt-2">
          <div className="h-6 w-0.5 bg-gray-300 ml-4"></div>
        </div>
        
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            step === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            3
          </div>
          <div className={`ml-2 text-sm ${
            step === 3 ? 'font-medium text-blue-600' : 'text-gray-500'
          }`}>
            Participants
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </form>
    </div>
  );
};

export default CreateSession;