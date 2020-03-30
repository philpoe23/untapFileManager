const textRefactor = (text, size) => {
  return (
    text
      .split(' ')
      .slice(0, size)
      .join(' ') + '...'
  );
};

export { textRefactor };
