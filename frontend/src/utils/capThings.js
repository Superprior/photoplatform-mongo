const capThings = (things) => {
  const words = things.split(' ');

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
};

export default capThings;