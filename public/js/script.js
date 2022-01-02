$(function () {
  /* ウィンドウ幅変更時のリロード */
  let timer = false;
  let preWidth = $(window).width();
  $(window).resize(function () {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      const nowWidth = $(window).width();
      if (preWidth !== nowWidth) {
        location.reload();
      }
      preWidth = nowWidth;
    }, 200);
  });

  /* スクロールで画面領域に入ったら表示 */
  window.sr = ScrollReveal({
    mobile: true,
  });
  sr.reveal(
    "#introduce",
    {
      delay: 0,
      duration: 1500,
      opacity: 0,
      scale: 1,
      distance: "0px",
      viewFactor: 0.25,
    },
    100
  );

  sr.reveal(
    ".shoplist",
    {
      delay: 0,
      duration: 1500,
      opacity: 0,
      scale: 1,
      distance: "0px",
      viewFactor: 0.15,
    },
    100
  );

  /* ヘッダー_ハンバーガーメニュー*/
  $("#hamburger").click(function () {
    $("body").toggleClass("nav-open");
  });

  $("#bg-hamburger").click(function () {
    $("body").removeClass("nav-open");
  });

  /* モーダル*/
  $("#modal, .bg-modal").hide();

  $(".link-sitenavi").click(function () {
    $("body").removeClass("nav-open");
    setTimeout(function () {
      $(".bg-modal, #modal").stop().fadeTo(700, 1);
    }, 100);

    return false;
  });

  $(".bg-modal, .cross").click(function () {
    $("#modal, .bg-modal").fadeOut(700);
  });

  /* TOPページ_ミルクティー*/
  $("#wave").wavify({
    height: 85,
    bones: 4,
    amplitude: 15,
    color: "rgb(238, 205, 134)",
    speed: 0.35,
  });

  /* TOPページ_タピオカ */
  const w = $(window).width();
  const TAPIOCA_NUM = 17;

  if (w <= 900) {
    $(".tapi-particle img").attr("src", "images/tapioca2.png");
    for (let i = 1; i <= TAPIOCA_NUM; i++) {
      $(".tapi" + i).morphing({
        numVert: 8,
        spring: 0.05,
        friction: 0.2,
        radius: Math.random() * 8 + 22,
        fps: 45,
      });
    }
  } else if (w <= 1500) {
    $(".tapi-particle img").attr("src", "images/tapioca.png");
    for (let i = 1; i <= TAPIOCA_NUM; i++) {
      $(".tapi" + i).morphing({
        numVert: 8,
        spring: 0.05,
        friction: 0.2,
        radius: Math.random() * 5 + 32,
        fps: 45,
      });
    }
  } else {
    $(".tapi-particle img").attr("src", "images/tapioca.png");
    for (let i = 1; i <= TAPIOCA_NUM; i++) {
      $(".tapi" + i).morphing({
        numVert: 8,
        spring: 0.05,
        friction: Math.random() * 0.05 + 0.25,
        radius: Math.random() * 5 + 37,
        fps: 45,
      });
      $(".tapi" + i).css("padding-bottom", Math.random() * 15 + "px");
    }
  }

  /* TOPページ_スムーススクロール*/
  $(".scroll").click(function () {
    let target = $("#introduce");
    let targetY = target.offset().top;

    $("html,body").animate({ scrollTop: targetY }, 1000, "swing");

    return false;
  });

  $(".scrolltop-mark").click(function () {
    let target = $("header");
    let targetY = target.offset().top;

    $("html, body").animate({ scrollTop: targetY }, 1000, "swing");

    return false;
  });

  /* TOPページ_ショップ一覧の遷移先 */
  $(".shop1").click(function () {
    location.href = "kawagoe.html";
  });

  $(".shop2").click(function () {
    location.href = "miyashiro.html";
  });

  $(".shop3").click(function () {
    location.href = "urawa.html";
  });

  /* ショップ詳細ページ_スライダー*/
  $(".slider").on("init", function () {
    $(this).addClass("zoom");
  });

  $(".slick").slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    cssEase: "ease-out",
    centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    appendDots: $(".dots"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          mobileFirst: true,
        },
      },
    ],
  });

  $(".slider").on("beforeChange", function () {
    $(this).removeClass("zoom");
  });
  $(".slider").on("afterChange", function () {
    $(this).addClass("zoom");
  });
});
