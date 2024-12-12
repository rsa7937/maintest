$(function () {
  gsap.registerPlugin(ScrollTrigger);
  dayjs().format();

  // $('.btn-top').on('click', () => {
  //   $('html')
  //     .stop()
  //     .animate({ scrollTop: 0 }, function () {
  //       gsap.to('btn-top', {
  //         autoAlpha: 0,
  //         duration: 0.5,
  //       });
  //     });
  // });

  // Header mouseEnter Leave시 애니메이션
  // works SVG
  const $worksSvgPath = $('#header .gnb li:nth-child(1) a svg path');
  const worksPathLength = $worksSvgPath[0].getTotalLength();

  // about SVG
  const $aboutSvgPath = $('#header .gnb li:nth-child(2) a svg path');
  const aboutPathLength = $aboutSvgPath[0].getTotalLength();

  // 초기 설정: stroke-dasharray와 stroke-dashoffset 초기화
  $worksSvgPath.css({
    'stroke-dasharray': worksPathLength,
    'stroke-dashoffset': worksPathLength,
    transition: 'stroke-dashoffset 0.5s ease',
  });

  $aboutSvgPath.css({
    'stroke-dasharray': aboutPathLength,
    'stroke-dashoffset': aboutPathLength,
    transition: 'stroke-dashoffset 0.5s ease',
  });

  // works 애니메이션
  $('#header .gnb li:nth-child(1) a').on('mouseenter', function () {
    $worksSvgPath.css('stroke-dashoffset', 0);
    // console.log('menuin');
  });

  $('#header .gnb li:nth-child(1) a').on('mouseleave', function () {
    $worksSvgPath.css('stroke-dashoffset', worksPathLength);
  });

  // about 애니메이션
  $('#header .gnb li:nth-child(2) a').on('mouseenter', function () {
    $aboutSvgPath.css('stroke-dashoffset', 0);
    // console.log('menuother');
  });

  $('#header .gnb li:nth-child(2) a').on('mouseleave', function () {
    $aboutSvgPath.css('stroke-dashoffset', aboutPathLength);
  });

  // Footer 시간 표시
  // Day.js 플러그인 초기화
  dayjs.extend(dayjs_plugin_utc);
  dayjs.extend(dayjs_plugin_timezone);

  function updateTimes() {
    const localTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    // 한국 표준시(KST)
    const kstTime = dayjs().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');

    // jQuery로 HTML에 삽입
    // $('#local-time').text(`로컬 시간: ${localTime}`);
    $('#kst-time').text(` ${kstTime} (KST)`);
  }
  setInterval(updateTimes, 1000);

  // Btn-top
  // gsap.from($('.btn-top'), {
  //   autoAlpha: 0,
  //   duration: 0.5,
  //   y: 30,
  //   scrollTrigger: {
  //     trigger: 'section:nth-of-type(3)',
  //     start: 'top 20%',
  //     // markers: true,
  //     id: 'btn-top',
  //     toggleActions: 'play none reverse reverse',
  //   },
  // });
});
