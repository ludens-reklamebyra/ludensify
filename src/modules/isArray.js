export default function isArray(input) {
  return typeof input === 'object' && Array.isArray(input);
}
