var App = function () {

//  var chartColors, validationRules = getValidationRules ();

  // Black & Orange
  //chartColors = ["#FF9900", "#333", "#777", "#BBB", "#555", "#999", "#CCC"];

  // Ocean Breeze
  chartColors = ['#94BA65', '#2B4E72', '#2790B0', '#777','#555','#999','#bbb','#ccc','#eee'];

  // Fire Starter
  //chartColors = ['#750000', '#F90', '#777', '#555','#002646','#999','#bbb','#ccc','#eee'];

  // Mean Green
  //chartColors = ['#5F9B43', '#DB7D1F', '#BA4139', '#777','#555','#999','#bbb','#ccc','#eee'];

  // return { init: init, chartColors: chartColors, validationRules: validationRules };
  return { init: init };



  function toTop () {

    $('body').append('<button id="toTop" title="Go to top">Top</button>');

    // When the user scrolls down 20px from the top of the document, show the button
    $(window).on('scroll', function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
      } else {
        document.getElementById("toTop").style.display = "none";
      }
    });

    // When the user clicks on the button, scroll to the top of the document
    $('#toTop').on('click', function(e) {
      e.preventDefault();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

    });

  }


  function headerContent() {


  }


  function init () {



    window.onload = function() {
      // var img = document.getElementById('img');
      // var tracker = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
      // tracker.setStepSize(1.7);
      // tracking.track('#img', tracker);
      // tracker.on('track', function(event) {
      //   event.data.forEach(function(rect) {
      //     window.plot(rect.x, rect.y, rect.width, rect.height);
      //   });
      // });
      window.plot = function(x, y, w, h) {
        var rect = document.createElement('div');
        document.querySelector('.demo-container').appendChild(rect);
        rect.classList.add('rect');
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (img.offsetLeft + x) + 'px';
        rect.style.top = (img.offsetTop + y) + 'px';
      };
    };

    $('header .nav li a').on('click', function(e) {
      e.preventDefault();

      var arr = [];
      var elAttr = $( this ).attr('href');

      if(elAttr === 'clear') {
        window.location.href = '/';
      } else {
        arr.push(elAttr);
      }

      var img = document.getElementById('img');
      var tracker = new tracking.ObjectTracker(arr);
      tracker.setStepSize(1.7);
      tracking.track('#img', tracker);
      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          window.plot(rect.x, rect.y, rect.width, rect.height);
        });
      });

    });


    // $('[data-toggle="tooltip"]').tooltip();



// alert(132);

    // $('body').append ('<div id="toTop">^ Top</div>');
    // $('pre').addClass ('prettyprint linenums');
    // prettyPrint ();

    // getToc ();

    // routeContent ();



    // $('#wrapper').append ('<div class="push"></div>');
  }







  function slugify(text) {
    text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
    text = text.replace(/-/gi, "_");
    text = text.replace(/\s/gi, "-");
    text = text.toLowerCase ();
    return text;
  }

}();
