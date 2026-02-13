import React from 'react';
import { InstructionStep as StepType } from '../types';

interface InstructionStepProps {
  step: StepType;
  isLast: boolean;
}

export const InstructionStep: React.FC<InstructionStepProps> = ({ step, isLast }) => {
  return (
    <div className={`relative flex flex-col md:flex-row gap-8 py-12 ${!isLast ? 'border-b border-bread-200' : ''}`}>
      {/* Number Badge */}
      <div className="absolute -left-3 -top-3 md:left-0 md:top-8 bg-bread-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-xl font-display shadow-md z-10">
        {step.stepNumber}
      </div>

      {/* Image */}
      <div className="w-full md:w-5/12 shrink-0">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-bread-200">
          <img 
            src={`https://picsum.photos/seed/${step.imageSeed}/800/600`} 
            alt={step.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2 md:pt-4">
        <h3 className="text-2xl font-display font-bold text-bread-800 mb-4 pl-8 md:pl-0">
          {step.title}
        </h3>
        <p className="text-bread-700 leading-relaxed text-lg">
          {step.description}
        </p>
      </div>
    </div>
  );
};