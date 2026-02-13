export interface Ingredient {
  name: string;
  amount: string;
  note?: string;
}

export interface IngredientSection {
  title: string;
  items: Ingredient[];
}

export interface InstructionStep {
  stepNumber: number;
  title: string;
  description: string;
  imageSeed: string; // Used for picsum seed
}

export interface Recipe {
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  yields: string;
  ingredients: IngredientSection[];
  instructions: InstructionStep[];
  tips: string[];
}
