export const generateUniqueId = (name) => {
  const date = Date.now();
  const a = Math.floor(Math.random() * 1000 + 1000);
  const b = Math.floor(Math.random() * 3000 + 1000);
  const c = Math.floor(Math.random() * 6000 + 1000);
  const result = `${name}-${date}-${a}-${b}-${c}`;
  return result;
};
