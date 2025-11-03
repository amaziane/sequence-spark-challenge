import { useTranslation } from 'react-i18next';
import { Question } from '../types/question';

interface QuestionDisplayProps {
  question: Question;
}

// Displays the arithmetic sequence with '?' for missing value
export const QuestionDisplay = ({ question }: QuestionDisplayProps) => {
  const { t } = useTranslation();
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-foreground">
        {t('findMissing')}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-3 text-4xl font-bold">
        {question.sequence.map((num, idx) => (
          <span key={idx} className="text-primary">
            {num}
          </span>
        ))}
        <span className="text-primary">,</span>
        <span className="text-6xl text-secondary animate-pulse">?</span>
      </div>
    </div>
  );
};
