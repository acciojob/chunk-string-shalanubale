function chunkString(str, chunkLength) {
  // Handle null input
  if (str === null) return [];

  const result = [];

  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }

  return result;
}