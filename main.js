var _btnExit = document.getElementById("btn-exit"),
  _loadedImages = 0,
  tt,
  _imageArray = [
    "imgMain.png",
    "copy1.png",
    "copy2.png",
    "copy3.png",
    "name.png",
    "disclaimer.png",
    "logo.png",
    "cta1.png",
    "qs_active_q1.png",
    "qs_active_q2.png",
    "qs_active_q3.png",
    "qs_active_q4.png",
    "qs_inactive.png"
  ],
  width = document.querySelector("#loader").offsetWidth,
  height = document.querySelector("#loader").offsetHeight
function loadImages() {
  for (var i = 0; i < _imageArray.length; i++) {
    var _tempImage = new Image();
    _tempImage.addEventListener("load", function () {
      _loadedImages++;
      if (_loadedImages == _imageArray.length) init();
    });
    _tempImage.src = "img/" + _imageArray[i];
  }
}
function init() {
  initAnimations();
  document.querySelector("#btn-exit").addEventListener("click", exits);
}
function initAnimations() {
  tt = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.out",
    },
  });
  tt.set('.banner', { display: 'block' })
    .set('#graphic', { x: '-=300' })
    .set('svg', { display: "block" })
    .set('#cta', { y: "+=5", alpha: 0 })
    .set(['.qss', '#q5'], { opacity: 0 })
    .set(['.qss', '#q5'], { opacity: 0 })
    .set(['.st2', '#numberContainer'], { alpha: 0 })
    .set('#off', { transformOrigin: '150px 125px' })
    .set(['#line1', '#line2', '.st2', '#line3'], { drawSVG: '0%' })
    .set(['#numberContainer', '#disclaimer'], { alpha: 0, 'webkitFilter': 'blur(5px)' })
    .set(['#imgMain', '#imgContainer'], { scale: 1.48, x: '+=250', y: '+=19', transformOrigin: '0px 179px', rotation: 0.01, z: 0.01 })
    .set(['.copy', '#name', '#disclaimer'], { y: '+=10', alpha: 0, 'webkitFilter': 'blur(5px)' })


    .addLabel('f1', 0)
    .add(qsAnimation, "f1")
    .to('#line1', { duration: 1, drawSVG: '100%', ease: 'sine.inOut' }, 'f1')
    .to('#line2', { duration: 2, drawSVG: '100%', ease: 'sine.inOut' }, 'f1')
    .to('#line3', { duration: 1, drawSVG: '100%', ease: 'sine.inOut' }, 'f1+=1')

    .addLabel('f2', 2.5)
    .to(['.qss', '#q5', '#inactive'], { duration: 0.5, alpha: 0, scale: 1.1, ease: 'power3.inOut', 'webkitFilter': 'blur(5px)' }, 'f2')
    .to('#graphic', { duration: 1.5, x: '+=300', ease: "expoScale(0.5,7,power1.inOut)" }, 'f2+=0.1')
    .to(['#imgMain', '#imgContainer'], { duration: 2, scale: 1, x: '-=250', y: '-=19', ease: "expoScale(0.5,7,power1.inOut)" }, 'f2')
    .to('#name', { duration: 1.3, y: '-=10', alpha: 1, ease: 'power3.inOut', 'webkitFilter': 'blur(0px)' }, 'f2+=0.3')
    .to('#copy1', { duration: 1.3, y: '-=10', alpha: 1, ease: 'power3.inOut', 'webkitFilter': 'blur(0px)' }, 'f2+=0.3')
    .to('#imgContainer', { duration: 1.3, alpha: 0, ease: 'power3.inOut' }, 'f2+=0.2')

    .addLabel('f3', 6)
    .to(['#copy1', '#name'], { duration: 1, alpha: 0, scale: 1.1, ease: 'power3.inOut', 'webkitFilter': 'blur(5px)' }, 'f3')
    .to('#logo', { alpha: 0 }, '<')
    .to('#numberContainer', { duration: 1, opacity: 1, 'webkitFilter': 'blur(0px)', ease: 'power1.inOut', snap: { textContent: 1 } }, 'f3+=0.4')
    .to('#number', { textContent: 95, duration: 1, ease: 'power1.inOut', snap: { textContent: 1 } }, 'f3+=0.4')
    .to(['#copy2', '#disclaimer'], { duration: 1.3, y: '-=10', alpha: 1, ease: 'power3.inOut', 'webkitFilter': 'blur(0px)', stagger: 0.4 }, 'f3+=0.7')

    .addLabel('f4', 11.8)
    .to(['#copy2', '#disclaimer', '#off'], { duration: 1, alpha: 0, scale: 1.1, ease: 'power3.inOut', 'webkitFilter': 'blur(5px)' }, 'f4')
    .to('#logo', { alpha: 1 }, '>')
    .to('#copy3', { duration: 1.3, y: '-=10', alpha: 1, ease: 'power3.inOut', 'webkitFilter': 'blur(0px)' }, 'f4+=0.4')
    .to('#cta', { alpha: 1, y: '-=5', ease: 'power3.out' }, '>')
    .to('#cta1', { duration: 0.25, x: 2, y: 2, ease: 'power3.out', repeat: 1, yoyo: true }, '>')

  console.log(tt.duration());
}

function qsAnimation() {
  tt2 = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power3.out",
    },
  });
  tt2
    .addLabel('time')
    .to('.qss', { alpha: 1, stagger: .3 }, 'time')
    .to('.qss', { alpha: 0, stagger: .3 }, 'time+=.3')
    .to('#q5', { alpha: 1 }, ">-=.4")
    .to('#shine1', { duration: 1, x: "+=120", ease: 'sine.inOut' }, "<-=.2")
}

function exits() {
  window.open(window.clickTag);
}