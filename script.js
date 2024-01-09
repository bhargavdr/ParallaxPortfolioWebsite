document.addEventListener('DOMContentLoaded', () => {
  let text = document.getElementById('text');
  let hero = document.getElementById('hero');
  let leaf = document.getElementById('leaf');
  let hill1 = document.getElementById('hill1');
  let hill2 = document.getElementById('hill2');
  let hill3 = document.getElementById('hill3');
  let hill4 = document.getElementById('hill4');
  let hill5 = document.getElementById('hill5');

  let endOfContent = document.getElementById('contact');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let endPosition = endOfContent.offsetTop - window.innerHeight;

    if (value < endPosition) {
      text.style.marginTop = value * 2.5 + 'px';
      hero.style.marginLeft = value * 2.5 + 'px';
      leaf.style.top = value * -1.5 + 'px';
      leaf.style.left = value * 1.5 + 'px';
      hill2.style.left = value * -1 + 'px';
      hill2.style.top = value * 0.75 + 'px';
      hill3.style.left = value * 1 + 'px';
      hill3.style.top = value * 0.75 + 'px';
      hill4.style.left = value * -1.5 + 'px';
      hill5.style.left = value * 1.5 + 'px';
      hill1.style.top = value * 0.5 + 'px';
    } 
  });
});
