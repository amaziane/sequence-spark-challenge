import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { addCustomQuestion, getAllCustomQuestions } from '../services/custom.service';
import { useToast } from '../hooks/use-toast';

const Admin = () => {
  const [sequenceInput, setSequenceInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [explanationInput, setExplanationInput] = useState('');
  const { toast } = useToast();

  // Adds custom question to the pool
  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse sequence
    const sequence = sequenceInput
      .split(',')
      .map(s => parseInt(s.trim()))
      .filter(n => !isNaN(n));
    
    const answer = parseInt(answerInput);
    
    if (sequence.length < 4) {
      toast({
        title: 'Invalid Sequence',
        description: 'Please enter at least 4 numbers separated by commas',
        variant: 'destructive',
      });
      return;
    }
    
    if (isNaN(answer)) {
      toast({
        title: 'Invalid Answer',
        description: 'Please enter a valid number for the answer',
        variant: 'destructive',
      });
      return;
    }
    
    addCustomQuestion({
      sequence,
      answer,
      explanation: explanationInput || 'Custom pattern',
      difficulty: 1,
    });
    
    toast({
      title: 'Success!',
      description: 'Custom challenge added successfully',
    });
    
    setSequenceInput('');
    setAnswerInput('');
    setExplanationInput('');
  };

  const customQuestions = getAllCustomQuestions();

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-primary">Admin Mode</h1>
          <Link to="/">
            <Button variant="outline">Back to Game</Button>
          </Link>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-xl border-2 border-border mb-6">
          <h2 className="text-2xl font-bold mb-6">Add Custom Challenge</h2>
          
          <form onSubmit={handleAddCustom} className="space-y-6">
            <div>
              <Label htmlFor="sequence" className="text-lg">
                Sequence (comma separated)
              </Label>
              <Input
                id="sequence"
                value={sequenceInput}
                onChange={(e) => setSequenceInput(e.target.value)}
                placeholder="e.g., 2, 4, 6, 8"
                className="mt-2 text-lg"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Enter at least 4 numbers
              </p>
            </div>

            <div>
              <Label htmlFor="answer" className="text-lg">
                Correct Answer
              </Label>
              <Input
                id="answer"
                type="number"
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
                placeholder="e.g., 10"
                className="mt-2 text-lg"
              />
            </div>

            <div>
              <Label htmlFor="explanation" className="text-lg">
                Explanation (optional)
              </Label>
              <Textarea
                id="explanation"
                value={explanationInput}
                onChange={(e) => setExplanationInput(e.target.value)}
                placeholder="e.g., Pattern: add 2 each time"
                className="mt-2 text-lg"
                rows={3}
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg hover:scale-105 transition-transform"
            >
              Add Custom Challenge
            </Button>
          </form>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-xl border-2 border-border">
          <h2 className="text-2xl font-bold mb-4">Custom Questions</h2>
          {customQuestions.length === 0 ? (
            <p className="text-muted-foreground">No custom questions yet</p>
          ) : (
            <div className="space-y-3">
              {customQuestions.map((q, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-muted rounded-xl border border-border"
                >
                  <div className="font-mono text-lg">
                    {q.sequence.join(', ')}, <strong className="text-success">?</strong> → {q.answer}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {q.explanation}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
