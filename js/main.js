(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-dark shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-dark shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);


// scroll progress

const scrollProgress = document.getElementById('scroll-progress');
const height =
document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
const scrollTop =
document.body.scrollTop || document.documentElement.scrollTop;
scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});


// cursor

// // typing eff
// const t_Options = [["QT Global Software LTD ,", "Is a Tech Company ", "Committed to enhancing the competence and competitiveness ", "O  f its clients by enabling them to succeed through the power of information technology security "],
// ["We have six years of experience in building ",
// "We build web and mobile applications",
// " We serve government institutions and private businesses",
// "Requiring robust applications",
// "For use by thousands of users"

// ]]; // first sub-array contains the first part of the sentence; and the second sub-array contains second part

// const textElement1 = document.getElementById("t1");
// const textElement2 = document.getElementById("t2");
// let i = 0;
// let j = 0;
// let k = 0;
// let l = 0;
// let m = 0;

// function updateText(t_mode, text) { // writes/erases one character
//   if (t_mode == 0) { // first part of sentence
//     textElement1.textContent = `${text}`;
//   }
//   else if (t_mode == 1) { // second part of sentence
//     textElement2.textContent = `${text}`;
//   }
//   }

// function eraseEffect(t_mode, string) {
//   let index = string.length
//   const delay = 40; // delay between each character in milliseconds

//   function erase() {
//     if (index > 0) {
//       updateText(t_mode, string.substring(0, index - 1));
//       index--;
//       setTimeout(erase, delay);
//     } else {
//       typeWriterEffect();
//       return;
//     }
//   }
//   erase();
// }

// function typeEffect(t_mode, string) {
//   let index = 0;
//   const delay = 90; // delay between each character in milliseconds

//   function type() {
//     if (index < string.length) {
//       updateText(t_mode, string.substring(0, index + 1));
//       index++;
//       setTimeout(type, delay);
//     } else {
//       typeWriterEffect();
//       return;
//     }
//   }
//   type();
// }

// function typeWriterEffect() {
//   const short_delay = 750;
//   const long_delay = 1250;
//   if (i == 0 && j == 0) { // start of arrays
//     typeEffect(0, t_Options[i][j]);
//     i++;
//   } else if (i == 1 && j == 9) { // end of arrays
//     if (m == 0) {
//       m++;
//       typeEffect(1, t_Options[i][j]);
//     } else if (m == 1) {
//       m++;
//       setTimeout(() => eraseEffect(1, t_Options[i][j]), long_delay);
//     } else if (m == 2) {
//       i = 0;
//       j = 0;
//       k = 0;
//       l = 0;
//       m = 0;
//       setTimeout(() => eraseEffect(0, t_Options[0][3]), long_delay);
//     }
//   } else if (i == 0) { // during [0][x]
//     if (m == 0) {
//       m++;
//       eraseEffect(0, t_Options[i][k-1]);
//     } else if (m == 1) {
//       m = 0;
//       j = l + 1;
//       i++;
//       setTimeout(() => typeEffect(0, t_Options[0][k]), short_delay);
//     }
//   } else if ( //before switch to [0][x]
//     (i == 1 && j == 2) ||
//     (i == 1 && j == 4) ||
//     (i == 1 && j == 6)
//   ) {
//     if (m == 0) {
//       m++;
//       setTimeout(() => typeEffect(1, t_Options[i][j]), short_delay);
//     } else if (m == 1) {
//       m = 0;
//       i = 0;
//       l = j;  // 3-10
//       k++;  // 0-4
//       j = k;
//       setTimeout(() => eraseEffect(1, t_Options[1][l]), long_delay);
//     }
//   } else { //  during [1][x]
//     if (m == 0) {
//       m++;
//       if (j == 0 || j == 3 || j == 5 || j == 7) { // if [0][x] was just written
//         typeEffect(1, t_Options[i][j]);
//       } else {
//         setTimeout(() => typeEffect(1, t_Options[i][j]), short_delay);
//       }
//     } else if (m == 1) {
//       m = 0;
//       j++;
//       setTimeout(() => eraseEffect(1, t_Options[i][j - 1]), long_delay);
//     }
//   }
// }

// /*
// Animation structure:
//   [0][0], [1][0], [1][1], [1][2], (erase)
//   [0][1], [1][3], [1][4], (erase)
//   [0][2], [1][5], [1][6], (erase)
//   [0][3], (short break) [1][7], [1][8], [1][9] (erase)

//   [0][0], [1][0], [1][1], [1][2], [1][3], (erase)
//   [0][1], [1][4], [1][5], (erase)
//   [0][2], (short break) [1][6], [1][7], [1][8], (erase)
//   [0][3], [1][9], [1][10], (erase)
//   [0][4] (erase)
// */

// typeWriterEffect();


// typing eff 2

const animateTextTyping = (node) => {
  const text = node.textContent;
  const chars = text.split("");
  node.innerHTML = "";
  node.classList.add("typing");
  i = 0;
  const addNextChar = (i) => {
    let nextChar = chars[i] === "\n" ? "<br>" : chars[i];
    node.innerHTML += "<span>" + nextChar + "</span>";
    if (i < chars.length - 1) {
      setTimeout(function () {
        addNextChar(i + 1);
      }, 50 + Math.random() * 100); // add random delay to make it more human ;)
    } else {
      setTimeout(function () {
        node.classList.remove("typing");
      }, 50 + Math.random() * 150);
    }
  };
  addNextChar(i);
};
let text = document.getElementById("text");
animateTextTyping(text);
