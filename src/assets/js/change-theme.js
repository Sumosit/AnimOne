// setInterval(() => {
//   const animCompBg = document.getElementById('animCompBg');
//   const withYou = document.getElementById('with-you');
//   setAnimCompBg()
//
//   function setAnimCompBg() {
//     var w = window.innerWidth;
//     if (w > 1440) {
//
//       if (scrollY > 800 && window.screen.width > 1440) {
//         withYou.style.position = 'sticky'
//         withYou.style.top = animCompBg.getBoundingClientRect().top - withYou.getBoundingClientRect().height + 15 + 'px';
//       }
//     }
//   }
// }, 0)

setTimeout(() => {
  const animCompBg = document.getElementById('animCompBg');
  const animField = document.getElementById('anim-field');
  const withYou = document.getElementById('with-you');
  const changeTheme = document.getElementById('changeTheme');
  const changeTheme1 = document.getElementById('changeTheme1');
  const changeThemeText = document.getElementById('changeThemeText');
  const changeThemeText1 = document.getElementById('changeThemeText1');
  const container = document.getElementById('container');



  let qwe = 0;
  setAnimCompBg()
  window.addEventListener('resize', scrollToStart);

  function scrollToStart() {
    var w = window.innerWidth;
    if (w > 1440) {
      window.scrollTo({top: 0, behavior: 'auto'});
    }
  }

  animCompBg.style.display = 'initial';
  animCompBg.style.height = 570 + 'px';
  animCompBg.style.top = (animField.getBoundingClientRect().top + (animField.getBoundingClientRect().height / 2)) - animCompBg.getBoundingClientRect().height / 2 + 'px';
  // console.log(animCompBg.style.top)

  // changeTheme1.style.position = 'fixed'
  // changeTheme1.style.top = animCompBg.getBoundingClientRect().bottom+'px';
  window.addEventListener('scroll', setAnimCompBg);
  window.addEventListener('resize', setAnimCompBg);

  function setAnimCompBg() {
    var w = window.innerWidth;
    if (w > 1440) {

      if (scrollY > 800 && window.screen.width > 1440) {
        withYou.style.position = 'sticky'
        withYou.style.top = animCompBg.getBoundingClientRect().top - withYou.getBoundingClientRect().height + 15 + 'px';
      }

      if (scrollY > 3300 || scrollY < 1000) {
        // changeThemeText.style.display = 'initial';
      }
      if (scrollY > 0 && scrollY <= 3650) {
        // if (qwe === 0) {
        // changeThemeText.style.display = 'none';
        changeThemeText.style.display = 'flex'
        changeThemeText1.style.opacity = '0';
        // changeTheme.style.padding = '215px 0 143px'
        changeTheme.style.padding = '50px 0 143px'
        changeThemeText.style.transition = 'all 0s'
        changeThemeText.style.position = 'fixed'
        changeThemeText.style.top = animCompBg.getBoundingClientRect().bottom + 90 + 'px';
        // qwe = 1;
        // }
      } else if (scrollY > 3650) {
        // if (qwe === 1 ) {
        // changeTheme1.style.display = 'none';
        changeThemeText.style.top = changeThemeText1.getBoundingClientRect().top + 'px';
        changeThemeText.style.display = 'none'
        changeThemeText1.style.opacity = '1';
        // changeThemeText.style.transition = 'all 0s'
        //   changeThemeText.style.position = 'initial'
        changeTheme.style.padding = '50px 0 143px'
        //   qwe = 0;
        // }
      }

      if (scrollY < 4200 && scrollY > -100) {
        animCompBg.style.display = 'initial';
        animCompBg.style.height = 570 + 'px';
        animCompBg.style.top = (animField.getBoundingClientRect().top + (animField.getBoundingClientRect().height / 2)) - animCompBg.getBoundingClientRect().height / 2 + 'px';
        // console.log(animCompBg.style.top)
      } else {
        animCompBg.style.display = 'none';
        withYou.style.position = 'initial'
        withYou.classList.remove('with-you-go_up')
      }

    } else {
      changeThemeText.style.display = 'flex';
      changeThemeText.style.position = 'relative';
      changeThemeText.style.top = '0';
      changeTheme.style.padding = '50px 16px 65px'
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
      var w = window.innerWidth;
      // console.log(w)
      if (w > 768) {
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

