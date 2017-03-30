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
    url: 'http://www.ludensreklame.no/wp-json/wp/v2/posts',
    errorMsg: 'Noe gikk alvorlig galt!',
    loading: {
      selector: $('#loader'),
      loadingText: 'laster....'
    },
    dataType: 'json',
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
