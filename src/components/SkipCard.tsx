import React from "react";
import { Clock, CheckCircle, Package, AlertTriangle } from "lucide-react";
import { Skip } from "../types/skip";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skipId: string) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  console.log("Rendering SkipCard for:", skip.size);
  return (
    <div
      className={`
        relative bg-white rounded-3xl shadow-sm border-2 transition-all duration-500 cursor-pointer overflow-hidden
        hover:shadow-2xl hover:-translate-y-2 group
        ${
          isSelected
            ? "border-emerald-400 ring-4 ring-emerald-100 shadow-2xl scale-105"
            : "border-slate-200 hover:border-slate-300"
        }
      `}
      onClick={() => onSelect(skip.id)}
    >
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
          isSelected ? "opacity-5" : "group-hover:opacity-5"
        } bg-gradient-to-br from-emerald-400 to-blue-500`}
      />

      <div className="absolute -top-4 -right-4 z-10">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform rotate-12 transition-all duration-300 ${
            isSelected
              ? "bg-emerald-500 scale-110"
              : "bg-slate-600 group-hover:bg-emerald-500"
          }`}
        >
          {skip.size} Yard
        </div>
      </div>

      {skip.allowed_on_road === false && (
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-2 animate-pulse">
            <AlertTriangle className="w-4 h-4" />
            <span>Not Road Legal</span>
          </div>
        </div>
      )}

      <div className="relative h-52 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 flex items-center justify-center">
        <div className="relative">
          <div
            className={`w-36 h-24 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl shadow-xl transform transition-all duration-300 ${
              isSelected ? "scale-110" : "group-hover:scale-105"
            }`}
          >
            <div className="absolute inset-2 bg-amber-300 rounded-xl opacity-50" />
            <div className="absolute top-3 left-4 right-4 h-1 bg-amber-600 rounded-full" />
            <div className="absolute bottom-3 left-4 right-4 h-1 bg-amber-600 rounded-full" />

            <div className="absolute inset-0 flex items-center justify-center">
              <Package className="w-8 h-8 text-amber-700 opacity-60" />
            </div>
          </div>

          <div className="absolute -bottom-2 left-2 right-2 h-4 bg-slate-300 rounded-full opacity-20 blur-sm" />
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className={`text-2xl font-bold transition-colors duration-300 ${
                isSelected
                  ? "text-emerald-600"
                  : "text-slate-800 group-hover:text-emerald-600"
              }`}
            >
              {skip.size} Yard Skip
            </h3>
            <div className="flex items-center text-slate-500 text-sm mt-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>{skip.hire_period_days}-day hire period</span>
            </div>
          </div>
          {isSelected && (
            <CheckCircle className="w-8 h-8 text-emerald-500 animate-pulse" />
          )}
        </div>

        {skip.allowed_on_road === false && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center space-x-2 text-red-700">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Permit Required</span>
            </div>
            <p className="text-xs text-red-600 mt-1">
              This skip requires a permit for road placement
            </p>
          </div>
        )}

        <div className="flex items-baseline justify-between mb-6">
          <div className="text-4xl font-bold text-slate-900">
            £{skip.price_before_vat.toFixed(2)}
            <span className="text-lg text-slate-500 font-normal ml-2">
              inc VAT
            </span>
          </div>
        </div>

        <button
          className={`
            w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 text-base
            transform active:scale-95
            ${
              isSelected
                ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-200"
                : "bg-slate-100 text-slate-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-200"
            }
          `}
        >
          {isSelected ? "Selected ✓" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
