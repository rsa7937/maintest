$(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: '#visual .wide-inner',
    // markers: true,
    id: 'header-blur',
    start: 'top 20%',
    end: 'bottom 70%',
    onEnter: () => $('#header').addClass('scroll'),
    onLeave: () => $('#header').addClass('scroll'),
    onEnterBack: () => $('#header').removeClass('scroll'),
  });

  const arrowTL = gsap.timeline({ repeat: -1, yoyo: true });
  arrowTL.to('.direction b', { y: 2, duration: 1, ease: 'elastic.inOut(1,0.7)' });
  arrowTL.to('.direction b', { y: -2, duration: 1, ease: 'elastic.inOut(1,0.7)' });

  const visualEl = gsap.utils.toArray('.key-visual .wrap > div');
  console.log(visualEl);

  visualEl.forEach((item, index) => {
    const $svgPath = $(visualEl[index]).find('.line svg:nth-of-type(1) path');
    // const $svgPath = `$('.key-visual > div .line svg:nth-of-type(1) path')`;
    const pathLength = $svgPath[0].getTotalLength();

    $svgPath.css({
      'stroke-dasharray': pathLength,
      'stroke-dashoffset': pathLength,
      transition: 'stroke-dashoffset 0.4s 0.3s ease-in-out',
    });

    $(visualEl[index])
      .find('.line .tag')
      .on('mouseenter', function () {
        $svgPath.css('stroke-dashoffset', 0);
        console.log('in');
      });
    $(visualEl[index])
      .find('.line .tag')
      .on('mouseleave', function () {
        $svgPath.css('stroke-dashoffset', pathLength);
        console.log('out');
      });
  });

  // lvBarEl.forEach((item, index) => {
  //   const lvWidthArr = ['26rem', '24rem', '20rem', '20rem', '21rem', '22rem', '16rem', '24rem', '20rem'];
  //   // lvBarEl[index].css('width', lvWidthArr[index]);
  //   console.log(lvBarEl[index]);
  //   $(lvBarEl[index]).css('width', `${lvWidthArr[index]}`);

  //   gsap.from(lvBarEl[index], {
  //     width: 0,
  //     duration: 0.2,
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: '.profile',
  //       // markers: true,
  //       start: 'top 100%',
  //       end: 'bottom 60%',
  //       toggleActions: 'play none restart none',
  //       scrub: 1,
  //     },
  //   });
  // });

  // init Masonry

  const grid = document.querySelector('.grid');

  // Wait for images to load
  imagesLoaded(grid, function () {
    // Initialize Masonry
    new Masonry('.grid', {
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      gutter: 12, // 간격을 12에서 8로 줄임
      percentPosition: true,
    });
  });
});
