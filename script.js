/**
* @name: Assigment1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Maria Paula Mora
*/
//profile
//image timer
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      document.getElementById('name').style.display = 'block';
  }, 10000);
});

//current date
document.getElementById("currentDate").textContent = new Date().toISOString().split('T')[0];

//weather
//fahrenheit to celcius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  // Celsius to Kelvin
  var celsiusToKelvin = function(celsius) {
    return celsius + 273.15;
  };

  // jQuery click event handling
  $(document).ready(function() {
    $("#convert").click(function() {
      var fahrenheitInput = $("#fahrenheitInput").val();

      // Check if its a number
      if (!isNaN(fahrenheitInput)) {
        var celsiusResult = fahrenheitToCelsius(parseFloat(fahrenheitInput));
        var kelvinResult = celsiusToKelvin(celsiusResult);

        // Display results
        $("#result").html("<p>Celsius: " + celsiusResult.toFixed(2) + "°C </p><p>Kelvin: " + kelvinResult.toFixed(2) + "K</p>");
      } else {
        $("#result").text("Please enter a valid temperature in Fahrenheit.");
      }
    });
  });

//mark to grade
//function for converting mark to grade
function gradeCalculator() {
  try {
    var grade = document.getElementById("gradeInput").value;
    const mark = parseInt(grade);

    if (isNaN(mark) || mark < 0 || mark > 100) {
      throw new Error("Invalid mark. Please enter a number between 0 and 100.");
    }

    if (mark >= 90 && mark <= 100) {
      document.getElementById("gradeResult").textContent = "Your Grade is A";
    } else if (mark >= 80 && mark < 90) {
      document.getElementById("gradeResult").textContent = "Your Grade is B";
    } else if (mark >= 70 && mark < 80) {
      document.getElementById("gradeResult").textContent = "Your Grade is C";
    } else if (mark >= 50 && mark < 70) {
      document.getElementById("gradeResult").textContent = "Your Grade is D";
    } else {
      document.getElementById("gradeResult").textContent = "Your Grade is F";
    }
  } catch (error) {
    document.getElementById("gradeResult").textContent = error.message;
  }
}
