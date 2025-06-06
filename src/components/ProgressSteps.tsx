import React from 'react';
import { MapPin, Trash2, Package, Shield, Calendar, CreditCard } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  icon: React.ReactNode;
  completed: boolean;
  current: boolean;
}

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  const steps: Step[] = [
    {
      id: 'start',
      title: 'Start',
      icon: <MapPin className="w-5 h-5" />,
      completed: currentStep > 1,
      current: currentStep === 1
    },
    {
      id: 'select-skip',
      title: 'Select Skip',
      icon: <Package className="w-5 h-5" />,
      completed: currentStep > 2,
      current: currentStep === 2
    },
    {
      id: 'details',
      title: 'Details',
      icon: <Shield className="w-5 h-5" />,
      completed: currentStep > 3,
      current: currentStep === 3
    },
    {
      id: 'delivery',
      title: 'Delivery',
      icon: <Calendar className="w-5 h-5" />,
      completed: currentStep > 4,
      current: currentStep === 4
    },
    {
      id: 'payment',
      title: 'Payment',
      icon: <CreditCard className="w-5 h-5" />,
      completed: currentStep > 5,
      current: currentStep === 5
    }
  ];

  return (
    <div className="w-full bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex items-center">
                <div
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-2xl border-2 transition-all duration-500 shadow-sm
                    ${step.completed
                      ? 'bg-emerald-500 border-emerald-500 text-white shadow-emerald-200'
                      : step.current
                      ? 'bg-blue-500 border-blue-500 text-white shadow-blue-200 scale-110'
                      : 'bg-slate-100 border-slate-300 text-slate-500'
                    }
                  `}
                >
                  {step.icon}
                </div>
                <div className="ml-4 hidden sm:block">
                  <p
                    className={`
                      text-sm font-semibold transition-colors duration-300
                      ${step.completed ? 'text-emerald-600' : step.current ? 'text-blue-600' : 'text-slate-500'}
                    `}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 mx-6">
                  <div
                    className={`
                      h-1 rounded-full transition-all duration-500
                      ${step.completed ? 'bg-emerald-400' : 'bg-slate-200'}
                    `}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;