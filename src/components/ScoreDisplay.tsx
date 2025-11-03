interface ScoreDisplayProps {
  score: number;
}

// Displays current score
export const ScoreDisplay = ({ score }: ScoreDisplayProps) => {
  return (
    <div className="absolute top-4 right-4 bg-card px-6 py-3 rounded-2xl shadow-lg border-2 border-primary">
      <div className="text-sm font-semibold text-muted-foreground">Score</div>
      <div className="text-3xl font-bold text-primary">{score}</div>
    </div>
  );
};
