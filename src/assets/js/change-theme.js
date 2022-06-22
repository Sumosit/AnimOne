
setTimeout(() => {
  const animCompBg = document.getElementById('animCompBg');
  const animField = document.getElementById('anim-field');
  const withYou = document.getElementById('with-you');
  const changeTheme1 = document.getElementById('changeTheme1');
  const changeThemeText = document.getElementById('changeThemeText');

  let qwe = 0;
  setAnimCompBg()
  animCompBg.style.display = 'initial';
  animCompBg.style.height = 550 + 'px';
  animCompBg.style.top = (animField.getBoundingClientRect().top + (animField.getBoundingClientRect().height/2))-animCompBg.getBoundingClientRect().height/2 + 'px';
  console.log(animCompBg.style.top)

  changeTheme1.style.position = 'fixed'
  changeTheme1.style.top = animCompBg.getBoundingClientRect().bottom+'px';
  window.addEventListener('scroll', setAnimCompBg);

  function setAnimCompBg() {
    console.log(scrollY)

    if (scrollY > 800) {
      withYou.style.position = 'sticky'
      withYou.style.top = animCompBg.getBoundingClientRect().top - withYou.getBoundingClientRect().height - 80 + 'px';
    }

    if (scrollY > 3300 || scrollY < 1000) {
      changeThemeText.style.display = 'initial';
      // changeTheme1.style.position = 'relative'
    }
    if (scrollY <= 3500 && scrollY > 0) {
      if (qwe === 0) {
        changeThemeText.style.display = 'none';
        changeTheme1.style.display = 'flex';
        changeTheme1.style.position = 'fixed'
        changeTheme1.style.top = animCompBg.getBoundingClientRect().bottom+'px';
        qwe = 1;
      }
    } else if (scrollY > 3500) {
      if (qwe === 1 ) {
        changeTheme1.style.display = 'none';
        qwe = 0;
      }
    }

    if (scrollY < 3800 && scrollY > -100) {
      animCompBg.style.display = 'initial';
      animCompBg.style.height = 550 + 'px';
      animCompBg.style.top = (animField.getBoundingClientRect().top + (animField.getBoundingClientRect().height/2))-animCompBg.getBoundingClientRect().height/2 + 'px';
      console.log(animCompBg.style.top)
    }
    else {
      animCompBg.style.display = 'none';
    }
  }

  const animItems = document.querySelectorAll(".change-theme-anim");
  if (animItems.length > 0) {
    changeThemeOn()
    window.addEventListener('scroll', changeThemeOn);

    function changeThemeOn() {
      // console.log(animItems)
      for (let i = 0; i < animItems.length; i++) {
        const animItemHeight = animItems[i].offsetHeight;
        const animItemOffset = offset(animItems[i]).top;

        const animStart = 10;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItems[i].classList.add('showChangeTheme')
        } else {
          // animItems[i].classList.remove('showChangeTheme')
        }
      }
    }
  }


  const rateItems = document.querySelectorAll(".rates-anim");
  if (rateItems.length > 0) {
    ratesOn()
    window.addEventListener('scroll', ratesOn);

    function ratesOn() {
      // console.log(rateItems)
      for (let i = 0; i < rateItems.length; i++) {
        const animItemHeight = rateItems[i].offsetHeight;
        const animItemOffset = offset(rateItems[i]).top;

        const animStart = 4;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          rateItems[i].classList.add('showRates')
        } else {
          // rateItems[i].classList.remove('showRates')
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
