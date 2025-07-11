import { useState, useEffect } from 'react';

const suggestions = [
  'What are the expertise of Softcolon',
  'Does Softcolon provide AI-powered solutions',
  'How can Softcolon help my business grow',
  'Tell me about AI chatbot development',
  'Can Softcolon integrate GPT into my app',
  'What industries does Softcolon serve',
];

export const useAnimatedSuggestions = () => {
  const [currentSuggestion, setCurrentSuggestion] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      const suggestion = suggestions[currentIndex];
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex < suggestion.length) {
          setCurrentSuggestion(suggestion.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeChar, 10 + Math.random() * 30); // Varied typing speed
        } else {
          setIsTyping(false);
          // Wait before starting to delete
          timeout = setTimeout(
            () => {
              setIsTyping(true);
              deleteText();
            },
            3000 + Math.random() * 1000,
          );
        }
      };

      typeChar();
    };

    const deleteText = () => {
      const suggestion = suggestions[currentIndex];
      let charIndex = suggestion.length;

      const deleteChar = () => {
        if (charIndex > 0) {
          setCurrentSuggestion(suggestion.slice(0, charIndex - 1));
          charIndex--;
          timeout = setTimeout(deleteChar, 5 + Math.random() * 20); // Faster deletion
        } else {
          // Move to next suggestion
          setCurrentIndex((prev) => (prev + 1) % suggestions.length);
          timeout = setTimeout(typeText, 800);
        }
      };

      deleteChar();
    };

    typeText();

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  return {
    currentSuggestion,
    isTyping,
  };
};
