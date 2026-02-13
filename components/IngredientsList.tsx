import React from 'react';
import { Recipe } from '../types';

interface IngredientsListProps {
  ingredients: Recipe['ingredients'];
}

export const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <section className="py-12 bg-bread-50" id="ingredients">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-display font-bold text-center text-bread-800 mb-10">
          材料
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {ingredients.map((section, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-bread-200">
              <h3 className="text-xl font-display font-bold text-bread-600 mb-4 border-b-2 border-bread-100 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex justify-between items-baseline group">
                    <span className="text-bread-800 font-medium group-hover:text-bread-600 transition-colors">
                      {item.name}
                    </span>
                    <div className="text-right">
                      <span className="text-bread-900 font-bold block">{item.amount}</span>
                      {item.note && (
                        <span className="text-xs text-bread-400 block">{item.note}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};