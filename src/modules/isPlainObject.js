export default function isPlainObject(input) {
  return typeof input === 'object' && !Array.isArray(input);
}
