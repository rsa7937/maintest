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
      transition: 'stroke-dashoffset 0.4s 0.2s ease-in-out',
    });

    $(visualEl[0])
      .find('.line .tag')
      .on('mouseenter', function () {
        $(visualEl[0]).find('.line svg:nth-of-type(1) path').css('stroke-dashoffset', 0);
        console.log('in');
        $(visualEl[0]).find('.line .tag svg:nth-of-type(1)').css({
          'clip-path': 'inset(0% 0% 0% 0%)',
        });

        $(visualEl[0]).find('.line > svg:nth-of-type(1) path ').css({ stroke: '#0086FF' });
        $(visualEl[0]).find('.line .tag svg:nth-of-type(1) rect').css({ fill: '#0086FF' });
        $(visualEl[0]).find('.line .tag svg:nth-of-type(1) path + path').css({ fill: '#0086FF' });
        $(visualEl[0]).find('.line .tag1 svg:nth-of-type(1) rect').css({ fill: '#0086FF' });
        $(visualEl[0]).find('.line .tag1 svg:nth-of-type(1) path + path').css({ fill: '#0086FF' });
      });

    const SIpathLength = $(visualEl[0]).find('.line svg:nth-of-type(1) > path')[0].getTotalLength();
    $(visualEl[0])
      .find('.line .tag')
      .on('mouseleave', function () {
        $(visualEl[0]).find('.line svg:nth-of-type(1) > path').css('stroke-dashoffset', SIpathLength);
        console.log('out');
        $(visualEl[0]).find('.line .tag svg:nth-of-type(1)').css('clip-path', 'inset(100% 0% 0% 0%)');
      });

    $(visualEl[0])
      .find('.line .tag1')
      .on('mouseenter', function () {
        $(visualEl[0]).find('.line svg:nth-of-type(1) path').css('stroke-dashoffset', 0);
        console.log('in');
        $(visualEl[0]).find('.line .tag svg:nth-of-type(1)').css('clip-path', 'inset(0% 0% 0% 0%)');

        $(visualEl[0]).find('.line > svg:nth-of-type(1) path ').css({ stroke: '#FC3F05' });
        $(visualEl[0]).find('.line .tag svg:nth-of-type(1) rect').css({ fill: '#FC3F05' });
        $(visualEl[0]).find('.line .tag svg:nth-of-type(1) path + path').css({ fill: '#FC3F05' });
        $(visualEl[0]).find('.line .tag1 svg:nth-of-type(1) rect').css({ fill: '#FC3F05' });
        $(visualEl[0]).find('.line .tag1 svg:nth-of-type(1) path + path').css({ fill: '#FC3F05' });
      });

    $(visualEl[0])
      .find('.line .tag1')
      .on('mouseleave', function () {
        $(visualEl[0]).find('.line svg:nth-of-type(1) > path').css('stroke-dashoffset', SIpathLength);
        console.log('out');
        $(visualEl[0]).find('.line .tag svg:nth-of-type(1)').css('clip-path', 'inset(0% 0% 100% 0%)');
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
