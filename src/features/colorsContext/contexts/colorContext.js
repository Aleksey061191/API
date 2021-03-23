import React, { createContext, useMemo, useState } from "react";

export const WordContext = createContext({
  words: [],
  addWord: () => {},
  removeWord: () => {},
  setSelectedWord: () => {},
});

export const WordContextProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const addWord = (word) => {
    setWords((prevWord) => [...prevWord, word]);
  };
  const removeWord = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };
  const value = useMemo(
    () => ({
      words,
      addWord,
      removeWord,
    }),
    [words, addWord, removeWord]
  );
  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};
