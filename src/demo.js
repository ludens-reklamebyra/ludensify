import { isNumber } from '../lib/index';
import { isEmpty } from '../lib/index';

function testIsNumberInDOM() {
  const typeToCheck = 100;
  if (isNumber(100)) {
    console.log('isNumber returned true');
  }
}

function testIsEmpty() {
  console.log(isEmpty('test'));
}

document.addEventListener('DOMContentLoaded', () => {
  testIsNumberInDOM();
  testIsEmpty();
});
