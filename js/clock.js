const name = document.querySelector("#myName");
const saat = document.querySelector("#myClock");

function showCurrentTime() {
    var currentDate = new Date();
  
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    var currentDay = currentDate.getDay();

    currentHour = addLeadingZero(currentHour);
    currentMinute = addLeadingZero(currentMinute);
    currentSecond = addLeadingZero(currentSecond);
  
    var daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var currentDayName = daysOfWeek[currentDay];
  
    var currentTime = currentHour + ":" + currentMinute + ":" + currentSecond + " " + currentDayName;
    
    saat.innerHTML = currentTime;
  }
  
  function addLeadingZero(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }

  setInterval(showCurrentTime, 1000);

nameProm = prompt("Adınız Nedir? ");
name.innerHTML = nameProm;

