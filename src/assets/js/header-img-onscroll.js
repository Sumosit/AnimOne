
setTimeout(() => {
  let hbRightImg = document.getElementById('hb_right-img');
  let hbLeft = document.getElementById('hb-left');
  let header3 = document.getElementById('header3');
  let hbRight = document.getElementById('hb-right');
  window.addEventListener('scroll', headerImgOnScroll);
  window.addEventListener('resize', headerImgOnScroll);
  // setInterval(() => {
  //   headerImgOnScroll()
  // })
  function headerImgOnScroll() {
    var w = window.innerWidth;
    if (w > 768) {
      let formula = 0;
      let scr = scrollY;
      let maxScroll = 400;
      // maxScroll 100%
      // scrollY ?

      // 15 100%
      // ?  prev ? %
      // console.log(hbRight.getBoundingClientRect().width)
      hbRightImg.style.position = 'absolute';
      hbRightImg.style.left = hbRight.getBoundingClientRect().x + 'px';
      hbRightImg.style.width = hbRight.getBoundingClientRect().width + 'px';
      // console.log(hbRightImg.style.left)
      // console.log(hbRightImg.style.width)
      if (scrollY < maxScroll) {
        formula = ((((scrollY * 100) / maxScroll) * 15) / 100) * (-1) - 4;
      }
      // console.log(formula)
      if (formula !== 0) {
        hbRightImg.style.top = formula + '%';
      }
    }
    else {
      hbRightImg.style.position = 'initial'
    }
  }

  headerImgOnScroll()
}, 500)

qwe = setInterval(() => {
  let hbRightImg = document.getElementById('hb_right-img');
  let hbLeft = document.getElementById('hb-left');
  let header3 = document.getElementById('header3');
  let hbRight = document.getElementById('hb-right');
  let t = 0;
  if (t < 10) {
    var w = window.innerWidth;
    // console.log(w)
    if (w > 768) {
      let formula = 0;
      let scr = scrollY;
      let maxScroll = 400;
      // maxScroll 100%
      // scrollY ?

      // 15 100%
      // ?  prev ? %
      console.log(w)
      // console.log(hbRight.getBoundingClientRect().width)
      hbRightImg.style.position = 'absolute';
      hbRightImg.style.left = hbRight.getBoundingClientRect().x + 'px';
      hbRightImg.style.width = hbRight.getBoundingClientRect().width + 'px';
      // console.log(hbRightImg.style.left)
      // console.log(hbRightImg.style.width)
      if (scrollY < maxScroll) {
        formula = ((((scrollY * 100) / maxScroll) * 15) / 100) * (-1) - 4;
      }
      // console.log(formula)
      if (formula !== 0) {
        hbRightImg.style.top = formula + '%';
      }
    }
    else {
      hbRightImg.style.position = 'initial'
    }
  }
  else {
    clearInterval(qwe)
  }
}, 0)
