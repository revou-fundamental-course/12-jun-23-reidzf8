document.getElementById("konversi").onclick = Konversi;
document.getElementById("reverse").onclick = Reverse;
document.getElementById("reset").onclick = Reset;

var hasil1 = document.getElementById("hasil1")
var hasil2 = document.getElementById("hasil2")

hasil1.style.display = "none"
hasil2.style.display = "none"

function Konversi() {
  var celcius = document.getElementById("celcius").value;
  var fahrenheit = document.getElementById("fahrenheit").value;

  if (fahrenheit != "") {
    celcius = (parseFloat(fahrenheit) - 32) / 1.8;

    
    alert(" valid number for Celsius temperature!");
    return
  } else {
    fahrenheit = parseFloat(celcius) * 1.8 + 32;
    hasil1.style.display = "inline";
  }

  document.getElementById("fahrenheit").value =
    parseFloat(fahrenheit).toFixed(1);
  document.getElementById("celcius").value = parseFloat(celcius).toFixed(1);

  //   memasukan cara kedalam kalkulasi
  document.getElementById("fahrenheit").value = `${fahrenheit}`;

  document.getElementById("kalkulasi").value = `${celcius}°C * ( 9 / 5 ) + 32 = ${fahrenheit}°F`;

}

function Reverse() {
  var celcius = document.getElementById("celcius").value;
  var fahrenheit = document.getElementById("fahrenheit").value;

  if (celcius != "") {
    fahrenheit = parseFloat(celcius) * 1.8 + 32;

    alert("valid number for Celsius temperature!");
    return
  } else {
    celcius = (parseFloat(fahrenheit) - 32) / 1.8;
    hasil2.style.display = "inline";
  }

  document.getElementById("celcius").value =
    parseFloat(celcius).toFixed(1);
  document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);

  //   memasukan cara kedalam kalkulasi
  document.getElementById("celcius").value = `${celcius}`;

  document.getElementById("kalkulasi").value = `${fahrenheit}°F - 32 ) * 5 / 9 = ${celcius}°C`;

}

function Reset() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celcius").value = "";
  document.getElementById("kalkulasi").value = "";

  hasil1.style.display = "none"
  hasil2.style.display = "none"

}

