export interface Question {
  sequence: number[];
  answer: number;
  explanation: string;
  difficulty: number;
}

export type PatternType = 'multiplyPlus' | 'linearIncrement' | 'decreasing' | 'alternatingSign' | 'stepGrowth';
