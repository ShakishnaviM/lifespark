let valueDisplays = document.querySelectorAll(".inc_num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      const elements = document.querySelectorAll('.scroll-animation');
      const parts = document.querySelectorAll('.scroll-left-animation');
      const parts2 = document.querySelectorAll('.scroll-right-animation');

      parts.forEach(function(part) {
        if (isElementInViewport(part)) {
            part.classList.add('animate');
        }
    });

          parts2.forEach(function(part) {
        if (isElementInViewport(part)) {
            part.classList.add('animate');
        }
    });

      elements.forEach(function(element) {
          if (isElementInViewport(element)) {
              element.classList.add('animate');
          }
      });
  });
});

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
