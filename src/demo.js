import { isNumber } from '../lib/index';

function testIsNumberInDOM() {
  const typeToCheck = 100;
  if (isNumber(100)) {
    console.log('isNumber returned true');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  testIsNumberInDOM();
});
