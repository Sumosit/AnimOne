setTimeout(() => {
  withYou();
  window.addEventListener('resize', withYou);

  function withYou() {
    // 154 410 500 1080
    let windowHeight = window.innerHeight;
    let withYou_top = (130 * windowHeight) / 1080;
    let leftAnim_top = (210 * windowHeight) / 1080;
    let rightAnim_top = (300 * windowHeight) / 1080;

    console.log(withYou_top);
    console.log(leftAnim_top);
    console.log(rightAnim_top);

    let withYou = document.getElementById('with-you');
    let leftAnim = document.getElementById('anim-field');
    let rightAnim = document.getElementById('r-info');
    let animation = document.getElementById('animation');

    withYou.style.top = withYou_top + 'px';
    leftAnim.style.top = leftAnim_top + 'px';
    rightAnim.style.top = rightAnim_top + 'px';
    animation.style.marginTop = (leftAnim_top - 200) + 'px';
  }
}, 500);
