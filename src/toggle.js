import $ from 'jquery';
import isFunction from './isFunction';

export default function toggle({ trigger, element, event, speed, complete }) {
  if (!trigger) {
    throw new Error(`Expected a 'trigger' for the slide event.`);
  } else if (!element) {
    throw new Error(`Expected an 'element' to slide`);
  }

  const defaultEvent = event || 'click';
  const defaultSpeed = speed || 300;

  trigger.on(defaultEvent, e => {
    const $this = $(e.currentTarget);

    element.stop().slideToggle(defaultSpeed, () => {
      if (complete) {
        if (isFunction(complete)) {
          complete($this, element, speed);
        } else {
          throw new Error(
            `
            Expected 'complete' to be a function.
          `
          );
        }
      }
    });
  });

  return {
    trigger,
    element,
    event,
    speed,
    complete
  };
}
