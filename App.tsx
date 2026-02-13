import React from 'react';
import { RecipeHeader } from './components/RecipeHeader';
import { IngredientsList } from './components/IngredientsList';
import { InstructionStep } from './components/InstructionStep';
import { BakerChat } from './components/BakerChat';
import { shioPanRecipe } from './data/recipe';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <RecipeHeader recipe={shioPanRecipe} />
      
      <main>
        <IngredientsList ingredients={shioPanRecipe.ingredients} />
        
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-display font-bold text-center text-bread-800 mb-12">
              作り方
            </h2>
            <div className="space-y-4">
              {shioPanRecipe.instructions.map((step, idx) => (
                <InstructionStep 
                  key={step.stepNumber} 
                  step={step} 
                  isLast={idx === shioPanRecipe.instructions.length - 1} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-bread-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-2 border-bread-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bread-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <h2 className="text-2xl font-display font-bold text-bread-800 mb-6 relative z-10 flex items-center gap-3">
                <span className="text-3xl">💡</span> 美味しく焼くためのポイント
              </h2>
              
              <ul className="space-y-4 relative z-10">
                {shioPanRecipe.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-bread-700">
                    <span className="w-6 h-6 rounded-full bg-bread-200 text-bread-600 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-medium leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bread-900 text-bread-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display font-bold text-xl mb-4">Shio Pan Master</p>
          <p className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} Delicious Bakery. All rights reserved.
          </p>
        </div>
      </footer>

      <BakerChat />
    </div>
  );
};

export default App;