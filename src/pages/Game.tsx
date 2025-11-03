import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuestionDisplay } from '../components/QuestionDisplay';
import { AnswerInput } from '../components/AnswerInput';
import { Feedback } from '../components/Feedback';
import { ScoreDisplay } from '../components/ScoreDisplay';
import { Button } from '../components/ui/button';
import { Question } from '../types/question';
import { generateQuestion } from '../services/generator.service';
import { getRandomCustom } from '../services/custom.service';

const Game = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Loads next question (custom OR generated)
  const loadNextQuestion = () => {
    setFeedback(null);
    setShowExplanation(false);
    
    // 30% chance to show custom question if available
    const customQuestion = Math.random() < 0.3 ? getRandomCustom() : null;
    
    if (customQuestion) {
      setCurrentQuestion(customQuestion);
    } else {
      setCurrentQuestion(generateQuestion(score));
    }
  };

  useEffect(() => {
    loadNextQuestion();
  }, []);

  // Evaluates user input and updates score
  const handleAnswer = (userAnswer: number) => {
    if (!currentQuestion) return;

    const isCorrect = userAnswer === currentQuestion.answer;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => Math.max(0, prev - 5));
      setShowExplanation(true);
    }

    setTimeout(() => {
      loadNextQuestion();
    }, 2000);
  };

  if (!currentQuestion) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 relative">
      <ScoreDisplay score={score} />
      
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Arithmetic Sequences
          </h1>
          <p className="text-muted-foreground">Complete the pattern!</p>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-xl border-2 border-border">
          <QuestionDisplay question={currentQuestion} />
          
          <AnswerInput onSubmit={handleAnswer} disabled={feedback !== null} />
          
          <Feedback 
            type={feedback} 
            explanation={showExplanation ? currentQuestion.explanation : undefined}
          />
          
          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={loadNextQuestion}
              className="flex-1 hover:scale-105 transition-transform"
            >
              Skip Question
            </Button>
            <Link to="/admin" className="flex-1">
              <Button 
                variant="secondary" 
                className="w-full hover:scale-105 transition-transform"
              >
                Admin Mode
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <div className="mb-2">
            {score < 50 && '⭐ Basic patterns'}
            {score >= 50 && score < 150 && '⭐⭐ Alternating patterns unlocked!'}
            {score >= 150 && '⭐⭐⭐ Expert mode - Step growth unlocked!'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
