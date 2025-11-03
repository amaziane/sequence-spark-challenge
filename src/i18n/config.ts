import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Game page
      title: 'Arithmetic Sequences',
      subtitle: 'Complete the pattern!',
      findMissing: 'Find the Missing Number!',
      enterAnswer: 'Enter your answer',
      validate: 'Validate',
      correct: '🎉 Correct! Well done!',
      wrong: '❌ Not quite right. Try again!',
      score: 'Score',
      skipQuestion: 'Skip Question',
      adminMode: 'Admin Mode',
      
      // Difficulty levels
      basicPatterns: '⭐ Basic patterns',
      alternatingUnlocked: '⭐⭐ Alternating patterns unlocked!',
      expertMode: '⭐⭐⭐ Expert mode - Step growth unlocked!',
      
      // Admin page
      adminTitle: 'Admin Mode',
      backToGame: 'Back to Game',
      addCustomChallenge: 'Add Custom Challenge',
      sequence: 'Sequence (comma separated)',
      sequenceHelper: 'Enter at least 4 numbers',
      sequencePlaceholder: 'e.g., 2, 4, 6, 8',
      correctAnswer: 'Correct Answer',
      answerPlaceholder: 'e.g., 10',
      explanation: 'Explanation (optional)',
      explanationPlaceholder: 'e.g., Pattern: add 2 each time',
      addChallenge: 'Add Custom Challenge',
      customQuestions: 'Custom Questions',
      noCustomQuestions: 'No custom questions yet',
      
      // Toast messages
      invalidSequence: 'Invalid Sequence',
      invalidSequenceDesc: 'Please enter at least 4 numbers separated by commas',
      invalidAnswer: 'Invalid Answer',
      invalidAnswerDesc: 'Please enter a valid number for the answer',
      success: 'Success!',
      customAdded: 'Custom challenge added successfully',
      
      // Pattern explanations
      patternMultiplyPlus: 'Pattern: multiply by 3, then add 1, alternating',
      patternLinearIncrement: 'Pattern: add {{increment}} each time',
      patternDecreasing: 'Pattern: subtract 2 each time',
      patternAlternatingSign: 'Pattern: add 2, then subtract 1, alternating',
      patternStepGrowth: 'Pattern: add 1, then add 2, then add 3, then add 4',
      patternCustom: 'Custom pattern',
    },
  },
  fr: {
    translation: {
      // Game page
      title: 'Suites Arithmétiques',
      subtitle: 'Complète la séquence !',
      findMissing: 'Trouve le Nombre Manquant !',
      enterAnswer: 'Entre ta réponse',
      validate: 'Valider',
      correct: '🎉 Correct ! Bien joué !',
      wrong: '❌ Pas tout à fait. Réessaie !',
      score: 'Score',
      skipQuestion: 'Passer la Question',
      adminMode: 'Mode Admin',
      
      // Difficulty levels
      basicPatterns: '⭐ Motifs de base',
      alternatingUnlocked: '⭐⭐ Motifs alternés débloqués !',
      expertMode: '⭐⭐⭐ Mode expert - Croissance par étapes débloquée !',
      
      // Admin page
      adminTitle: 'Mode Administrateur',
      backToGame: 'Retour au Jeu',
      addCustomChallenge: 'Ajouter un Défi Personnalisé',
      sequence: 'Séquence (séparée par des virgules)',
      sequenceHelper: 'Entre au moins 4 nombres',
      sequencePlaceholder: 'ex : 2, 4, 6, 8',
      correctAnswer: 'Réponse Correcte',
      answerPlaceholder: 'ex : 10',
      explanation: 'Explication (optionnelle)',
      explanationPlaceholder: 'ex : Motif : ajoute 2 à chaque fois',
      addChallenge: 'Ajouter le Défi',
      customQuestions: 'Questions Personnalisées',
      noCustomQuestions: 'Aucune question personnalisée pour le moment',
      
      // Toast messages
      invalidSequence: 'Séquence Invalide',
      invalidSequenceDesc: 'Veuillez entrer au moins 4 nombres séparés par des virgules',
      invalidAnswer: 'Réponse Invalide',
      invalidAnswerDesc: 'Veuillez entrer un nombre valide pour la réponse',
      success: 'Succès !',
      customAdded: 'Défi personnalisé ajouté avec succès',
      
      // Pattern explanations
      patternMultiplyPlus: 'Motif : multiplie par 3, puis ajoute 1, en alternance',
      patternLinearIncrement: 'Motif : ajoute {{increment}} à chaque fois',
      patternDecreasing: 'Motif : soustrait 2 à chaque fois',
      patternAlternatingSign: 'Motif : ajoute 2, puis soustrait 1, en alternance',
      patternStepGrowth: 'Motif : ajoute 1, puis ajoute 2, puis ajoute 3, puis ajoute 4',
      patternCustom: 'Motif personnalisé',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
