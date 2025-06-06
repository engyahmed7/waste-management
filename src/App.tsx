import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgressSteps from './components/ProgressSteps';
import SkipSelector from './components/SkipSelector';
import { Skip } from './types/skip';

type AppState = 'hero' | 'booking';

function App() {
  const [appState, setAppState] = useState<AppState>('hero');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const handleGetStarted = () => {
    setAppState('booking');
    setCurrentStep(2);
  };

  const handleBackToHero = () => {
    setAppState('hero');
    setCurrentStep(1);
    setSelectedSkip(null);
  };

  const handleSkipSelected = (skip: Skip) => {
    setSelectedSkip(skip);
    setCurrentStep(3);
    console.log('Selected skip:', skip);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {appState === 'hero' ? (
        <Hero onGetStarted={handleGetStarted} />
      ) : (
        <>
          <ProgressSteps currentStep={currentStep} />
          {currentStep === 2 && (
            <SkipSelector
              onBack={handleBackToHero}
              onContinue={handleSkipSelected}
            />
          )}
          {currentStep === 3 && selectedSkip && (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
              <div className="text-center max-w-2xl mx-auto p-8">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-emerald-600 text-3xl">✓</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Great Choice!
                </h2>
                <p className="text-xl text-slate-600 mb-6">
                  You've selected the <strong>{selectedSkip.size} Yard Skip</strong> for <strong>£{selectedSkip.price_before_vat}</strong>
                </p>
                <p className="text-slate-500 mb-8">
                  The next steps would include delivery details, permits, and payment processing.
                </p>
                <button
                  onClick={handleBackToHero}
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;