
//timeline

document.addEventListener("DOMContentLoaded", function () {
    var timelineItems = document.querySelectorAll('.timeline-item');
  
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function handleScroll() {
      timelineItems.forEach(function (item) {
        if (isInViewport(item)) {
          showContent(item);
        }
      });
    }
  
    function showContent(item) {
      item.querySelector('.timeline-content').classList.add('show');
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially on page load
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
        // Hier kun je de logica toevoegen om het formulier te verwerken
        // Bijvoorbeeld: het verzenden van gegevens naar een server via Ajax

        // Voor dit voorbeeld tonen we gewoon een succesbericht
        responseDiv.textContent = 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.';
        contactForm.reset();
    }
});
  
