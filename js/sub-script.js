$(function () {
  gsap.registerPlugin(ScrollTrigger);

  $('.btn-top').on('click', () => {
    $('html')
      .stop()
      .animate({ scrollTop: 0 }, function () {
        gsap.to('btn-top', {
          autoAlpha: 0,
          duration: 0.5,
        });
      });
  });

  gsap.from($('.index'), {
    autoAlpha: 0,
    duration: 0.5,
    y: 30,
    scrollTrigger: {
      trigger: 'section:nth-of-type(2)',
      start: 'top 20%',
      // markers: true,
      id: 'index',
      toggleActions: 'play none reverse reverse',
    },
  });

  const $index = $('.index li');
  const sectionEl = gsap.utils.toArray('section');
  const liEl = gsap.utils.toArray('.index li');

  $index.on('mouseenter', function () {
    $(this).addClass('hover');
  });

  $index.on('mouseleave', function () {
    $(this).removeClass('hover');
  });

  // index의 메뉴 클릭시 스타일 활성화
  console.log(sectionEl);
  sectionEl.forEach((sec, index) => {
    ScrollTrigger.create({
      trigger: sec,
      // markers: true,
      start: 'top 60%',
      end: 'bottom 60%',
      toggleClass: { targets: liEl[index - 1], className: 'on' },
    });
  });

  // const $stepEl = gsap.utils.toArray('#prototype .step-wrap .step');

  // // 각 step의 애니메이션 설정
  // $stepEl.forEach((step, index) => {
  //   // 타임라인 생성
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: step,
  //       start: '30% top', // 스크롤 트리거 시작 지점
  //       end: 'bottom 30%', // 스크롤 트리거 끝 지점
  //       scrub: true, // 스크롤에 따라 애니메이션 제어
  //       markers: true, // 디버깅용 마커 표시
  //     },
  //   });

  //   // 현재 step: autoAlpha 1 → 0
  //   tl.fromTo(step, { autoAlpha: 1, duration: 2 }, { autoAlpha: 0, duration: 10 });

  //   // 다음 step: autoAlpha 0 → 1 (다음 요소가 존재할 때만)
  //   if ($stepEl[index + 1]) {
  //     tl.fromTo($stepEl[index + 1], { autoAlpha: 0, duration: 2 }, { autoAlpha: 1, duration: 6 });
  //   }
  // });
});
