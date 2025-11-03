import { useTranslation } from 'react-i18next';

interface FeedbackProps {
  type: 'correct' | 'wrong' | null;
  explanation?: string;
}

// Displays feedback animation after answer submission
export const Feedback = ({ type, explanation }: FeedbackProps) => {
  const { t } = useTranslation();
  if (!type) return null;

  return (
    <div
      className={`p-4 rounded-2xl text-center font-bold text-lg mb-4 ${
        type === 'correct'
          ? 'bg-success text-success-foreground animate-correct-pulse'
          : 'bg-destructive text-destructive-foreground animate-wrong-shake'
      }`}
    >
      {type === 'correct' ? (
        <span>{t('correct')}</span>
      ) : (
        <div>
          <div>{t('wrong')}</div>
          {explanation && (
            <div className="text-sm mt-2 opacity-90">
              {t(explanation)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
