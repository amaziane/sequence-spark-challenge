import { Question } from '../types/question';

let customQuestions: Question[] = [];

// Adds custom question to in-memory store
export const addCustomQuestion = (question: Question): void => {
  customQuestions.push(question);
};

// Returns random custom question or null if none available
export const getRandomCustom = (): Question | null => {
  if (customQuestions.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * customQuestions.length);
  return customQuestions[randomIndex];
};

// Returns all custom questions
export const getAllCustomQuestions = (): Question[] => {
  return [...customQuestions];
};
