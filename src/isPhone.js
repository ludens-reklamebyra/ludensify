export default function isPhone(input) {
  const str = input.toString();
  const reg = /[0-9]{8,}/ig;
  return str.match(reg) ? true : false;
}
