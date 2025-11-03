import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface AnswerInputProps {
  onSubmit: (answer: number) => void;
  disabled?: boolean;
}

// Handles user input and answer submission
export const AnswerInput = ({ onSubmit, disabled }: AnswerInputProps) => {
  const [input, setInput] = useState('');

  // Evaluates user input and submits answer
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(input);
    if (!isNaN(num)) {
      onSubmit(num);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <Input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your answer"
        className="text-2xl h-14 text-center font-bold border-2"
        disabled={disabled}
        autoFocus
      />
      <Button 
        type="submit" 
        size="lg"
        className="px-8 text-lg font-bold h-14 hover:scale-105 transition-transform"
        disabled={disabled || input === ''}
      >
        Validate
      </Button>
    </form>
  );
};
