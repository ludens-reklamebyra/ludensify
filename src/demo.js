import { isNumber } from '../lib/index';
import { isEmpty } from './isEmpty';

function testIsNumberInDOM() {
  const typeToCheck = 100;
  if (isNumber(100)) {
    console.log('isNumber returned true');
  }
}

function testIsEmpty() {
  if (isEmpty('test')) {
    console.log('test false');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  testIsNumberInDOM();
  testIsEmpty();
});
