import { useTranslation } from 'react-i18next';

interface ScoreDisplayProps {
  score: number;
}

// Displays current score
export const ScoreDisplay = ({ score }: ScoreDisplayProps) => {
  const { t } = useTranslation();
  return (
    <div className="absolute top-4 right-4 bg-card px-6 py-3 rounded-2xl shadow-lg border-2 border-primary">
      <div className="text-sm font-semibold text-muted-foreground">{t('score')}</div>
      <div className="text-3xl font-bold text-primary">{score}</div>
    </div>
  );
};
