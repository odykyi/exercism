export default class WordCount {
  count(words: string) {
    const arrayOfWords: string[] = words.split(/\s+/).filter(Boolean);
    const map = new Map();
    arrayOfWords.forEach(word => {
      const clearedWord = word.trim().toLowerCase();
      map.set(clearedWord, (map.get(clearedWord) || 0) + 1);
    });
    return map;
  }
}