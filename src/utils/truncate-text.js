export const truncateText = (text, maxLength) => {
  if (typeof text !== 'string') return '';
  if (!Number.isFinite(maxLength) || maxLength <= 0) return '...';

  // Unicode-safe slice
  const chars = Array.from(text);
  if (chars.length <= maxLength) return text;

  const sliced = chars.slice(0, maxLength).join('');
  // Remove the trailing partial word (cut back to last whitespace)
  const wordSafe = sliced.replace(/\s+\S*$/, '');
  const base = (wordSafe || sliced).trimEnd();

  return base + '...';
};
