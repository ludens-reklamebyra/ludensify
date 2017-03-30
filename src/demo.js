/**
* Use this file to test DOM-stuff.
* you can do imports like this:
* import { isNumber } from '../lib/index';
**/
import $ from 'jquery';
import { toggle, ajaxify } from '../lib/index';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Demo is running');

  ajaxify({
    method: 'get',
    url: '../demo/dummyData.json',
    errorMsg: 'Noe gikk alvorlig galt!',
    loading: {
      selector: $('body'),
      loadingText: 'laster....'
    },
    isComplete: () => {
      console.log('completed');
    },
    jsonResult: response => {
      console.log(response);
    }
  });

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
});
