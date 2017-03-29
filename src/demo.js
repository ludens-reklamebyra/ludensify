import { isNumber } from '../lib/index';

function testIsNumberInDOM() {
  const typeToCheck = 100;
  if (isNumber(100)) {
    console.log('isNumber returned true');
  }
}

function testIsPlainObjectInDOM() {
  const typeToCheck = {};
  if (isPlainObject(typeToCheckI)) {
    console.log('isPlainObject returned true');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  testIsNumberInDOM();
  testIsPlainObjectInDOM();
});
