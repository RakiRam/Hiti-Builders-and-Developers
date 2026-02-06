
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function (el) {
        el.addEventListener('click', function () {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
 document.querySelectorAll('.slides-1').forEach((slider) => {
  const slideCount = slider.querySelectorAll('.swiper-slide').length;

  new Swiper(slider, {
    speed: 600,

    loop: slideCount > 1,          // 🔑 only loop if multiple slides
    autoplay: slideCount > 1 ? {
      delay: 5000,
      disableOnInteraction: false
    } : false,

    slidesPerView: 1,

    pagination: slideCount > 1 ? {
      el: slider.querySelector('.swiper-pagination'),
      type: 'bullets',
      clickable: true
    } : false,

    navigation: slideCount > 1 ? {
      nextEl: slider.querySelector('.swiper-button-next'),
      prevEl: slider.querySelector('.swiper-button-prev'),
    } : false
  });
});


  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper('.slides-2', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

// -----Quote Functions-----

function whatsappMesseging2() {
  var name = document.getElementById("uname").value;
  var subject = document.getElementById("usubject").value;
  var email = document.getElementById("uemail").value;
  var message = document.getElementById("umessage").value;

  var url = "https://wa.me/919032077714?text=" + "Name : " + name + "%0a" + "Email : " + email + "%0a" + "Subject : " + subject + "%0a" + "Message : " + message;
  window.open(url, '_blank').focus();
  window.location.reload();
}
function whatsappMesseging() {
  var name = document.getElementById("pname").value;
  var message = document.getElementById("pmessage").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var url = "https://wa.me/919032077714?text=" + "Name : " + name + "%0a" + "Email : " + email + "%0a" + "Phone : " + phone + "%0a" + "Message : " + message;

  window.open(url, '_blank').focus();
  window.location.reload();
}


$(document).ready(function () {

  const layout = $(".Layout");
  const bubble = $(".chat_on");

  layout.hide();
  bubble.show();

  // open chat
  bubble.click(function () {
    layout.show().addClass("active");
    bubble.hide();
  });

  // close chat
  $(".chat_close_icon").click(function () {
    layout.removeClass("active").hide();
    bubble.show();
  });

});


// var messages = ['dummy text about "About" hiti', 'hai', 'bye'];
var bmsg = document.getElementById("botmsg");
var umsg = document.getElementById("usermsg");
messagebox = document.getElementsByClassName("Messages_list")[0];
// messages.forEach(msg => {
//   var newbmsg = bmsg.cloneNode(true);
//   newbmsg.innerHTML = msg;
//   messagebox.appendChild(newbmsg);
//   messagebox.scrollTop = messagebox.scrollHeight;
// });

function invokebot() {
  var query = document.getElementById("chatmsg");
  var newumsg = umsg.cloneNode(true);
  newumsg.class = "usermsg msg"
  newumsg.innerHTML = query.value;
  messagebox.appendChild(newumsg);
  processMessage(query.value);
  query.value = null;
  messagebox.scrollTop = messagebox.scrollHeight;
}
function processMessage(query) {

  query = query.trim().toLowerCase(); // normalize text

  const botBrain = {
    hello: "Hi 👋 Welcome to Hiti Builders and Developers. How may we help you?",
    hi: "Hi 👋 Welcome to Hiti Builders and Developers. How may we help you?",
    bye: "Thank you! Visit again. Call us at +919032077714.",
    exit: "Thank you! Visit again. Call us at +919032077714."
  };

  // typing indicator
  var typing = bmsg.cloneNode(true);
  typing.innerHTML = '<span class="typing"><span>.</span><span>.</span><span>.</span></span>';
  messagebox.appendChild(typing);
  messagebox.scrollTop = messagebox.scrollHeight;

  setTimeout(() => {

    typing.remove();

    var reply = "";

    // direct match
    if (botBrain[query]) {
      reply = botBrain[query];
    }
    // keyword routing
    else if (query.includes("service")) {
      window.location.href = "services.html";
      return;
    }
    else if (query.includes("project")) {
      window.location.href = "projects.html";
      return;
    }
    else if (query.includes("contact") || query.includes("help")) {
      window.location.href = "contact.html";
      return;
    }
    // default reply (IMPORTANT)
    else {
      reply = "Thanks for reaching out! 😊 Please call us or visit Contact page for more details.";
    }

    var newbmsg = bmsg.cloneNode(true);
    newbmsg.innerHTML = reply;
    messagebox.appendChild(newbmsg);

    messagebox.scrollTop = messagebox.scrollHeight;

  }, 600);
}

function submitByEnter() {
  if (event.key === 'Enter') {
    var query = document.getElementById("chatmsg");
    var newumsg = umsg.cloneNode(true);
    newumsg.class = "usermsg msg"
    newumsg.innerHTML = query.value;
    messagebox.appendChild(newumsg);
    processMessage(query.value);
    query.value = null;
    messagebox.scrollTop = messagebox.scrollHeight;
  }
}


function showdiv() {
  setTimeout(function () {
      document.getElementsByClassName("botmsg msg").style.visibility = "visible";
  }, 5000);
}
// -----VALIDATION-----


// document.querySelector("button").addEventListener("click", function(){
//   var name = document.getElementById("pname").value;
//   var message = document.getElementById("pmessage").value;
//   var email = document.getElementById("email").value;
//   var phone = document.getElementById("phone").value;

//   var uname = document.getElementById("uname").value;
//   var subject = document.getElementById("usubject").value;
//   var uemail = document.getElementById("uemail").value;
//   var umessage = document.getElementById("umessage").value;

//   if(name=='' || phone=='' || message=='' || email==''){
//     // document.getElementById("eresult").innerHTML = "All fields required"
//     return false;
//   }
//   else if(!email.includes("@")){
//     return false;
//   }
//   else if(isNaN(phone)){
//     return false;
//   }
//   else{
//     whatsappMesseging();
//     return true;
//   }
// })

// ----------email-----------
function sendEmail() {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "6390b231a8c58e",
    Password: "dcf0c93ffb5e60",
    To: 'manthenaramakrishna143@gmail.com',
    From: "ramakrishnamlrit2019@gmail.com",
    Subject: "Quote",
    Body: "Hiti Builders",
  })
    .then(function (message) {
      alert("mail sent successfully")
    });
}

function openWhatsApp() {
  const page = document.title;

  const msg =
    "Hi. Greetings from Hiti Builders %0A" +
    "Please share details.";

  window.open(
    "https://wa.me/919032077714?text=" + msg,
    "_blank"
  );
}

// bounce after 5s if user didn't open chat
setTimeout(() => {
  if (!$(".Layout").hasClass("active")) {
    $(".chat_on").addClass("bounce");
  }
}, 5000);

// stop bounce when clicked
$(".chat_on").click(function () {
  $(this).removeClass("bounce");
});

function openLeadForm() {
  document.getElementById("leadFormBox").style.display = "flex";
}

function submitLead() {

  const name = document.getElementById("leadName").value;
  const phone = document.getElementById("leadPhone").value;
  const msg = document.getElementById("leadMsg").value;

  if (!name || !phone) {
    alert("Please enter name & phone");
    return;
  }

  const text =
    "New Lead from Website 👋%0A%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Message: " + msg;

  window.open(
    "https://wa.me/919032077714?text=" + text,
    "_blank"
  );

  // success message
  const box = document.getElementById("leadFormBox");
  box.innerHTML = "✅ Thanks! We'll contact you shortly.";
}



