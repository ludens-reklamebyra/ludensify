/**
* Use this file to test DOM-stuff.
* you can do imports like this:
* import { isNumber } from '../lib/index';
**/
import $ from 'jquery';
import { toggle, isEmptyString, checkNumberLength } from '../lib/index';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Demo is running');

  toggle({
    trigger: $('#toggle-trigger'),
    element: $('#toggle-element'),
    speed: 1000,
    complete: ($this, element, speed) => {
      console.log({
        $this,
        element,
        speed
      });
    }
  });

  console.log('isEmptyString is ' + isEmptyString(''));
  console.log('checkNumberLength is ' + checkNumberLength('12345678', 8));

});
