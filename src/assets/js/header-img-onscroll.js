setTimeout(() => {
  window.addEventListener('scroll', headerImgOnScroll);
  // setInterval(() => {
  //   headerImgOnScroll()
  // })
  function headerImgOnScroll() {
    // console.log('headerImgOnScroll')
    let hbRightImg = document.getElementById('hb_right-img');
    let formula = 0;
    let scr = scrollY;
    let maxScroll = 400;
    // maxScroll 100%
    // scrollY ?

    // 15 100%
    // ?  prev ? %
    if (scrollY < maxScroll) {
      formula = ((((scrollY * 100) / maxScroll) * 15) / 100) * (-1);
    }
    // console.log(formula)
    if (formula !== 0) {
      hbRightImg.style.marginTop = formula+'%';
    }
  }
}, 500)
