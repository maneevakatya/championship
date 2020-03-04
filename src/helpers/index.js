if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

function qs(query, root = document) {
  return root.querySelector(query);
}

function qsAll(query, root = document) {
  return root.querySelectorAll(query);
}

function getParent(el, findParent) {
  while (el && el.parentNode) {
    el = el.parentNode;
    if (el.classList && el.classList.contains(findParent)) return el;
  }
  return false;
}

function scrollTo(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

function visChecker(el) {
  const rect = el.getBoundingClientRect();
  const wHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    rect.top <= wHeight * 0.85
  );
}

function elemVisCheck() {
  window.addEventListener('scroll', () => {
    qsAll('.h-anim').forEach((elem) => {
      if (visChecker(elem)) elem.setAttribute('visible', true);
    });
  });
}

function eventsDispatcher() {
  let eventScroll;
  try {
    eventScroll = new Event('scroll');
  } catch (e) {
    eventScroll = document.createEvent('Event');
    eventScroll.initEvent('scroll', false, false);
  }
  window.dispatchEvent(eventScroll);

  let resizeScroll;
  try {
    resizeScroll = new Event('resize');
  } catch (e) {
    resizeScroll = document.createEvent('Event');
    resizeScroll.initEvent('scroll', false, false);
  }
  window.dispatchEvent(resizeScroll);
}

/* get info of elems */
const getStyle = elem => getComputedStyle(elem);
const rect = elem => elem.getBoundingClientRect();

/* work with class */
const addClass = (elem, classes) => {
  if (typeof(classes) === 'object') {
    classes.forEach(cl => cl.classList.add(cl));
  } else {
    elem.classList.add(classes);
  }
}
const removeClass = (elem, classes) => {
  if (typeof(classes) === 'object') {
    classes.forEach(cl => cl.classList.remove(cl));
  } else {
    elem.classList.remove(classes);
  }
}
const toggleClass = (elem, cl) => elem.classList.toggle(cl);
const containsClass = (elem, cl) => elem.classList.contains(cl);

/* event initialize */
const on = (elem, event, func) => elem.addEventListener(event, func);

export {
  scrollTo,
  visChecker,
  elemVisCheck,
  qs,
  qsAll,
  eventsDispatcher,
  getStyle,
  rect,
  addClass,
  removeClass,
  toggleClass,
  containsClass,
  on,
  getParent,
};