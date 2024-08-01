// utils.js
export function sortByFrequencyAndValue(input) {
    const frequencyMap = input.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
  
    const frequencyArray = Object.entries(frequencyMap).map(([num, freq]) => ({
      num: Number(num),
      freq: freq
    }));
  
    frequencyArray.sort((a, b) => {
      if (a.freq === b.freq) {
        return a.num - b.num;
      }
      return a.freq - b.freq;
    });
  
    const result = frequencyArray.flatMap(item => Array(item.freq).fill(item.num));
  
    return result;
  }
  