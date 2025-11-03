import { Question, PatternType } from '../types/question';

// Generates multiply-then-add pattern (×3 then +1 alternating)
const generateMultiplyPlus = (): Question => {
  const start = Math.floor(Math.random() * 5) + 1;
  const sequence = [start];
  
  for (let i = 0; i < 4; i++) {
    const last = sequence[sequence.length - 1];
    if (i % 2 === 0) {
      sequence.push(last * 3);
    } else {
      sequence.push(last + 1);
    }
  }
  
  const answer = sequence[sequence.length - 1] * 3;
  
  return {
    sequence: sequence.slice(0, 4),
    answer,
    explanation: 'Pattern: multiply by 3, then add 1, alternating',
    difficulty: 1,
  };
};

// Generates constant increment pattern (+5)
const generateLinearIncrement = (): Question => {
  const start = Math.floor(Math.random() * 10) + 1;
  const increment = 5;
  const sequence = Array.from({ length: 5 }, (_, i) => start + i * increment);
  
  return {
    sequence: sequence.slice(0, 4),
    answer: sequence[4],
    explanation: `Pattern: add ${increment} each time`,
    difficulty: 1,
  };
};

// Generates constant decrement pattern (-2)
const generateDecreasing = (): Question => {
  const start = Math.floor(Math.random() * 20) + 20;
  const decrement = -2;
  const sequence = Array.from({ length: 5 }, (_, i) => start + i * decrement);
  
  return {
    sequence: sequence.slice(0, 4),
    answer: sequence[4],
    explanation: 'Pattern: subtract 2 each time',
    difficulty: 1,
  };
};

// Generates alternating sign pattern (+2, -1 alternating)
const generateAlternatingSign = (): Question => {
  const start = Math.floor(Math.random() * 10) + 5;
  const sequence = [start];
  
  for (let i = 0; i < 4; i++) {
    const last = sequence[sequence.length - 1];
    if (i % 2 === 0) {
      sequence.push(last + 2);
    } else {
      sequence.push(last - 1);
    }
  }
  
  const answer = sequence[sequence.length - 1] + 2;
  
  return {
    sequence: sequence.slice(0, 4),
    answer,
    explanation: 'Pattern: add 2, then subtract 1, alternating',
    difficulty: 2,
  };
};

// Generates step growth pattern (increment increases: +1, +2, +3, +4)
const generateStepGrowth = (): Question => {
  const start = Math.floor(Math.random() * 5) + 1;
  const sequence = [start];
  
  for (let i = 1; i <= 4; i++) {
    sequence.push(sequence[sequence.length - 1] + i);
  }
  
  return {
    sequence: sequence.slice(0, 4),
    answer: sequence[4],
    explanation: 'Pattern: add 1, then add 2, then add 3, then add 4',
    difficulty: 3,
  };
};

// Determines difficulty level based on score
const getDifficultyLevel = (score: number): number => {
  if (score >= 150) return 3;
  if (score >= 50) return 2;
  return 1;
};

// Generates random question based on difficulty
export const generateQuestion = (score: number): Question => {
  const difficulty = getDifficultyLevel(score);
  const patterns: PatternType[] = ['multiplyPlus', 'linearIncrement', 'decreasing'];
  
  if (difficulty >= 2) {
    patterns.push('alternatingSign');
  }
  
  if (difficulty >= 3) {
    patterns.push('stepGrowth');
  }
  
  const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
  
  switch (randomPattern) {
    case 'multiplyPlus':
      return generateMultiplyPlus();
    case 'linearIncrement':
      return generateLinearIncrement();
    case 'decreasing':
      return generateDecreasing();
    case 'alternatingSign':
      return generateAlternatingSign();
    case 'stepGrowth':
      return generateStepGrowth();
    default:
      return generateLinearIncrement();
  }
};
