import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { addCustomQuestion, getAllCustomQuestions } from '../services/custom.service';
import { useToast } from '../hooks/use-toast';

const Admin = () => {
  const { t } = useTranslation();
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
        title: t('invalidSequence'),
        description: t('invalidSequenceDesc'),
        variant: 'destructive',
      });
      return;
    }
    
    if (isNaN(answer)) {
      toast({
        title: t('invalidAnswer'),
        description: t('invalidAnswerDesc'),
        variant: 'destructive',
      });
      return;
    }
    
    addCustomQuestion({
      sequence,
      answer,
      explanation: explanationInput || 'patternCustom',
      difficulty: 1,
    });
    
    toast({
      title: t('success'),
      description: t('customAdded'),
    });
    
    setSequenceInput('');
    setAnswerInput('');
    setExplanationInput('');
  };

  const customQuestions = getAllCustomQuestions();

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <LanguageSwitcher />
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-primary">{t('adminTitle')}</h1>
          <Link to="/">
            <Button variant="outline">{t('backToGame')}</Button>
          </Link>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-xl border-2 border-border mb-6">
          <h2 className="text-2xl font-bold mb-6">{t('addCustomChallenge')}</h2>
          
          <form onSubmit={handleAddCustom} className="space-y-6">
            <div>
              <Label htmlFor="sequence" className="text-lg">
                {t('sequence')}
              </Label>
              <Input
                id="sequence"
                value={sequenceInput}
                onChange={(e) => setSequenceInput(e.target.value)}
                placeholder={t('sequencePlaceholder')}
                className="mt-2 text-lg"
              />
              <p className="text-sm text-muted-foreground mt-1">
                {t('sequenceHelper')}
              </p>
            </div>

            <div>
              <Label htmlFor="answer" className="text-lg">
                {t('correctAnswer')}
              </Label>
              <Input
                id="answer"
                type="number"
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
                placeholder={t('answerPlaceholder')}
                className="mt-2 text-lg"
              />
            </div>

            <div>
              <Label htmlFor="explanation" className="text-lg">
                {t('explanation')}
              </Label>
              <Textarea
                id="explanation"
                value={explanationInput}
                onChange={(e) => setExplanationInput(e.target.value)}
                placeholder={t('explanationPlaceholder')}
                className="mt-2 text-lg"
                rows={3}
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg hover:scale-105 transition-transform"
            >
              {t('addChallenge')}
            </Button>
          </form>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-xl border-2 border-border">
          <h2 className="text-2xl font-bold mb-4">{t('customQuestions')}</h2>
          {customQuestions.length === 0 ? (
            <p className="text-muted-foreground">{t('noCustomQuestions')}</p>
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
                    {t(q.explanation)}
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
