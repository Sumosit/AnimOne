
setTimeout(() => {
  const animItems = document.querySelectorAll(".change-theme-anim");
  if (animItems.length > 0) {
    changeThemeOn()
    window.addEventListener('scroll', changeThemeOn);
    console.log(123);

    function changeThemeOn() {
      // console.log(animItems)
      for (let i = 0; i < animItems.length; i++) {
        const animItemHeight = animItems[i].offsetHeight;
        const animItemOffset = offset(animItems[i]).top;

        const animStart = 4;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItems[i].classList.add('showChangeTheme')
        } else {
          animItems[i].classList.remove('showChangeTheme')
        }
      }
    }
  }


  const rateItems = document.querySelectorAll(".rates-anim");
  if (rateItems.length > 0) {
    ratesOn()
    window.addEventListener('scroll', ratesOn);
    console.log(123);

    function ratesOn() {
      console.log(rateItems)
      for (let i = 0; i < rateItems.length; i++) {
        const animItemHeight = rateItems[i].offsetHeight;
        const animItemOffset = offset(rateItems[i]).top;

        const animStart = 4;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          rateItems[i].classList.add('showRates')
        } else {
          rateItems[i].classList.remove('showRates')
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
}, 500)

setTimeout(() => {
  var isResizing = false;

  (function () {
    var container = document.getElementById("container"),
      left = document.getElementById("left_panel"),
      right = document.getElementById("right_panel"),
      handle = document.getElementById("drag");
      handle1 = document.getElementById("drag1");

    handle.onmousedown = function (e) {
      isResizing = true;
    };
    handle1.onmousedown = function (e) {
      isResizing = true;
    };

    document.onmousemove = function (e) {
      // we don't want to do anything if we aren't resizing.
      if (!isResizing) {
        return;
      }

      var offsetRight = container.clientWidth - (e.clientX - container.offsetLeft);

      left.style.right = offsetRight + "px";
      right.style.width = offsetRight + "px";
    }

    document.onmouseup = function (e) {
      // stop resizing
      isResizing = false;
    }
  })();
}, 500)
