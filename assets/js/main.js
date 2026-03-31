// burakterzi.de

document.addEventListener('DOMContentLoaded', () => {

  const track  = document.getElementById('sliderTrack');
  if (!track) return;

  const slider = track.parentElement;
  const GAP    = 12;
  let pos      = 0;
  let slideW, totalW;

  const originals = [...track.children];
  originals.forEach(s => track.appendChild(s.cloneNode(true)));

  function setSize() {
    slideW = slider.clientWidth;
    const slideH = slider.clientHeight;
    track.querySelectorAll('.slide').forEach(s => {
      s.style.width  = slideW + 'px';
      s.style.height = slideH + 'px';
    });
    totalW = (slideW + GAP) * originals.length;
  }

  function tick() {
    pos += 1.4;
    if (pos >= totalW) pos = 0;
    track.style.transform = `translateX(-${pos}px)`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setSize();
      tick();
    });
  });

  window.addEventListener('resize', setSize, { passive: true });

});
