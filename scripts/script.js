
//timeline

document.addEventListener("DOMContentLoaded", function () {
  var timelineItems = document.querySelectorAll('.timeline-item');

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function handleScroll() {
    timelineItems.forEach(function (item) {
      if (isInViewport(item)) {
        setTimeout(function () {
          showContent(item);
        }, 400); //milisecondes
      } else {
        setTimeout(function () {
          removeContent(item);
        }, 400); //dit zijn milisecondes
      }
    });
  }

  function showContent(item) {
    item.querySelector('.timeline-content').classList.add('show');
  }

  function removeContent(item) {
    item.querySelector('.timeline-content').classList.remove('show');
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});



//preview
document.addEventListener("DOMContentLoaded", function () {
    var steps = document.querySelectorAll('.step');
  
    steps.forEach(function (step, index) {
      step.addEventListener('click', function () {
        // Voeg de klasse 'active' toe aan de huidige stap en de voorgaande stappen
        this.classList.add("active");
        steps.forEach(function (prevStep, i) {
          if (i < index) {
            prevStep.classList.add("active");
          } else if (i > index) {
            prevStep.classList.remove("active");
          }
        });
  
        // Werk de breedte van de voortgangsbalk bij
        var progressBarWidth = (index) * 25 + "%";
        document.getElementById("line-progress").style.width = progressBarWidth;
  
        // Toon de bijbehorende inhoudssectie
        var contentSections = document.querySelectorAll('.section-content');
        contentSections.forEach(function (section, i) {
          section.classList.remove("active");
          if (i === index) {
            section.classList.add("active");
          }
        });
      });
    });
  });

    //faq
  
    document.addEventListener("DOMContentLoaded", function() {
        var faqItems = document.querySelectorAll('.faq-item');
    
        faqItems.forEach(function(item) {
            item.addEventListener('click', function() {
                toggleAnswer(this);
            });
        });
    
        function toggleAnswer(item) {
            var answer = item.querySelector('.answer');
            answer.classList.toggle('show');
        }
    });
//contact

document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById('contact-form');
    var responseDiv = document.getElementById('response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm();
    });

    function submitForm() {
        responseDiv.textContent = 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.';
        contactForm.reset();
    }
});
  
