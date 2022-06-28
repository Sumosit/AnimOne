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
    var w = window.innerWidth * window.devicePixelRatio / 2;
    if (w > 1440) {
      let formula = 0;
      let scr = scrollY;
      let maxScroll = 400;
      // maxScroll 100%
      // scrollY ?

      // 15 100%
      // ?  prev ? %
      console.log(hbRightImg.style.top)
      console.log(hbRight.getBoundingClientRect().width)
      hbRightImg.style.left = hbRight.getBoundingClientRect().x + 'px';
      hbRightImg.style.width = hbRight.getBoundingClientRect().width + 'px';
      console.log(hbRightImg.style.left)
      console.log(hbRightImg.style.width)
      if (scrollY < maxScroll) {
        formula = ((((scrollY * 100) / maxScroll) * 15) / 100) * (-1) - 5;
      }
      // console.log(formula)
      if (formula !== 0) {
        hbRightImg.style.top = formula + '%';
      }
    } else {
      hbRightImg.style.position = 'initial'
    }
  }

  headerImgOnScroll()
}, 500)
setInterval(() => {
  let t = 0;
  if (t === 0) {
    let hbRightImg = document.getElementById('hb_right-img');
    let hbLeft = document.getElementById('hb-left');
    let header3 = document.getElementById('header3');
    let hbRight = document.getElementById('hb-right');
    let formula = 0;
    let scr = scrollY;
    let maxScroll = 400;
    // maxScroll 100%
    // scrollY ?

    // 15 100%
    // ?  prev ? %
    console.log(hbRightImg.style.top)
    console.log(hbRight.getBoundingClientRect().width)
    hbRightImg.style.left = hbRight.getBoundingClientRect().x + 'px';
    hbRightImg.style.width = hbRight.getBoundingClientRect().width + 'px';
    console.log(hbRightImg.style.left)
    console.log(hbRightImg.style.width)
    if (scrollY < maxScroll) {
      formula = ((((scrollY * 100) / maxScroll) * 15) / 100) * (-1) - 5;
    }
    // console.log(formula)
    if (formula !== 0) {
      hbRightImg.style.top = formula + '%';
    }
    t++;
  }
}, 0)
