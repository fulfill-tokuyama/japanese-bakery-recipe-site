import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeHeaderProps {
  recipe: Recipe;
}

export const RecipeHeader: React.FC<RecipeHeaderProps> = ({ recipe }) => {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <div className="h-[50vh] md:h-[60vh] w-full overflow-hidden relative">
        <img 
          src="https://picsum.photos/seed/saltbreadhero/1600/900" 
          alt="Shio Pan" 
          className="w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-20">
            <span className="bg-bread-500 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-wider">
              JAPANESE BAKERY
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-md">
              {recipe.title}
            </h1>
            <p className="text-bread-100 text-base md:text-lg max-w-2xl drop-shadow">
              {recipe.description}
            </p>
          </div>
        </div>
      </div>

      {/* Meta Data Bar */}
      <div className="bg-white shadow-lg -mt-8 mx-4 md:mx-auto max-w-4xl relative z-10 rounded-xl p-6 flex flex-wrap justify-around items-center gap-6 border border-bread-100">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-bread-100 rounded-full text-bread-600">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs text-bread-400 font-bold uppercase tracking-wide">準備時間</p>
            <p className="font-display font-bold text-bread-800">{recipe.prepTime}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-bread-100 rounded-full text-bread-600">
            <ChefHat size={24} />
          </div>
          <div>
            <p className="text-xs text-bread-400 font-bold uppercase tracking-wide">焼成時間</p>
            <p className="font-display font-bold text-bread-800">{recipe.cookTime}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-bread-100 rounded-full text-bread-600">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs text-bread-400 font-bold uppercase tracking-wide">分量</p>
            <p className="font-display font-bold text-bread-800">{recipe.yields}</p>
          </div>
        </div>
      </div>
    </div>
  );
};