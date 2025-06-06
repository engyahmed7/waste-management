import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Skip } from "../types/skip";
import { fetchSkipsByLocation } from "../services/skipService";
import SkipCard from "./SkipCard";

interface SkipSelectorProps {
  onBack: () => void;
  onContinue: (selectedSkip: Skip) => void;
}

const SkipSelector: React.FC<SkipSelectorProps> = ({ onBack, onContinue }) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkipId, setSelectedSkipId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        const data = await fetchSkipsByLocation("NR32", "Lowestoft");
        console.log("Fetched skips selector:", data.skips);
        setSkips(data.skips);
      } catch (err) {
        setError("Failed to load skip options. Please try again.");
        console.error("Error loading skips:", err);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  const handleSkipSelect = (skipId: string) => {
    setSelectedSkipId(skipId);
  };

  const handleContinue = () => {
    const selectedSkip = skips.find((skip) => skip.id === selectedSkipId);
    if (selectedSkip) {
      onContinue(selectedSkip);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mx-auto mb-4" />
          <p className="text-slate-600 text-lg">Loading skip options...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl">⚠️</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-slate-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Choose Your Perfect Skip
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select the skip size that best suits your project needs. All prices
            include VAT and delivery to Lowestoft, NR32.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkipId === skip.id}
              onSelect={handleSkipSelect}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          <button
            onClick={handleContinue}
            disabled={!selectedSkipId}
            className={`
              flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300
              ${
                selectedSkipId
                  ? "bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-105"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }
            `}
          >
            <span>Continue to Booking</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkipSelector;
