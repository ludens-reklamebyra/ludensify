export default function isEmail(input) {
  const reg = /(@.)/gi;
  return input.match(reg) ? true : false;
}
