import $ from 'jquery';
import { isFunction, isPlainObject, isString } from './index';

export default function ajaxify(opts = {}) {
  if (!isPlainObject(opts)) {
    throw new Error(`Expected a plain object, and not a '${typeof opts}'.`);
  }

  /**
  * Default settings
  */
  opts = ({
    method: null,
    url: null,
    data: null,
    dataType: null,
    outputTarget: null,
    isComplete: Function,
    loading: {
      selector: null,
      loadingText: null
    },
    errorMsg: null,
    jsonResult: Function
  }, opts);

  // Define the ajax setup object
  const setup = {
    ...setup,
    type: opts.method,
    url: opts.url,
    data: opts.data,
    dataType: opts.dataType,
    beforeSend: () => {
      if (opts.loading) {
        $(opts.loading.selector).text(opts.loading.loadingText);
      }
    },
    success: response => {
      if (!response) {
        throw new Error(`Couldn't find a response`);
      }

      let lowerCasedDataType = setup.dataType
        ? setup.dataType.toLowerCase()
        : null;

      if (lowerCasedDataType === 'json') {
        if (!isFunction(opts.jsonResult)) {
          throw new Error(`Expected '${opts.jsonResult}' to be a function`);
        }
        opts.jsonResult(response);
      } else {
        $(opts.outputTarget).append(response);
      }
      $(opts.loading.selector).remove();
    },
    complete: () => {
      if (opts.isComplete) {
        if (isFunction(opts.isComplete)) {
          opts.isComplete();
        } else {
          throw new Error(`Expected '${opts.cb}' to be a function`);
        }
      }
    },
    error: () => {
      if (!isString(opts.errorMsg)) {
        throw new Error(
          `Error message should not be a ${typeof opts.errorMsg}`
        );
      }

      $(opts.outputTarget).html(opts.errorMsg);
    }
  };

  $.ajax(setup);
  return opts;
}
