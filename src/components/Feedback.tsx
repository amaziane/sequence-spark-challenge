interface FeedbackProps {
  type: 'correct' | 'wrong' | null;
  explanation?: string;
}

// Displays feedback animation after answer submission
export const Feedback = ({ type, explanation }: FeedbackProps) => {
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
        <span>🎉 Correct! Well done!</span>
      ) : (
        <div>
          <div>❌ Not quite right. Try again!</div>
          {explanation && (
            <div className="text-sm mt-2 opacity-90">{explanation}</div>
          )}
        </div>
      )}
    </div>
  );
};
