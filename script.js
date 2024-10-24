function multiply(a, b) {
  return a * b;
}
console.log(multiply(20, 42));

function checkAge(age) {
  if (age >= 10) {
    return "შენ ხარ სრულწლოვანი";
  } else {
    return "შენ ხარ არასრულწლოვანი";
  }
}
console.log(checkAge(20));

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "რიცხვი ლუწია";
  } else {
    return "რიცხვი კენტია";
  }
}
console.log(isEvenOrOdd(29));

function getDayName(dayNumber) {
  switch (true) {
    case dayNumber === 1:
      return "ორშაბათი";
    case dayNumber === 2:
      return "სამშაბათი";
    case dayNumber === 3:
      return "ოთხშაბათი";
    case dayNumber === 4:
      return "ხუთშაბათი";
    case dayNumber === 5:
      return "პარასკევი";
    case dayNumber === 6:
      return "შაბათი";
    case dayNumber === 7:
      return "კვირა";
    default:
      return "არასწორი დღე";
  }
}
console.log(getDayName(2));

function compareNumbers(a, b) {
  if (a > b) {
    return "პირველი რიცხვი მეტია";
  } else if (a < b) {
    return "მეორე რიცხვი მეტია";
  } else {
    return "რიცხვები ტოლია";
  }
}
console.log(compareNumbers(20, 20));

function calculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  }
  if (operator === "-") {
    return a - b;
  }
  if (operator === "*") {
    return a * b;
  }
  if (operator === "/") {
    return a / b;
  }
}
console.log(calculator(20, 17, "*"));

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(20));

function findMax(a, b, c) {
  switch (true) {
    case a >= b && a >= c:
      return a;
    case b >= a && b >= c:
      return b;
    case c >= b && c >= a:
      return c;
    default:
      break;
  }
}
console.log(findMax(212, 25, 21));

function checkSign(num) {
  if (num > 0) {
    return "დადებითია";
  } else if (num < 0) {
    return "უარყოფითია";
  } else {
    return "უდრის 0_ს";
  }
}
console.log(checkSign(21));

function getMonthName(monthNumber) {
  switch (true) {
    case monthNumber === 1:
      return "იანვარი";
    case monthNumber === 2:
      return "თებერვალი";
    case monthNumber === 3:
      return "მარტი";
    case monthNumber === 4:
      return "აპრილი";
    case monthNumber === 5:
      return "მაისი";
    case monthNumber === 6:
      return "ივნისი";
    case monthNumber === 7:
      return "ივლისი";
    case monthNumber === 8:
      return "აგვისტო";
    case monthNumber === 9:
      return "სექტემბერი";
    case monthNumber === 10:
      return "ოქტომბერი";
    case monthNumber === 11:
      return "ნოემბერი";
    case monthNumber === 12:
      return "დეკემბერი";
    default:
      return "არასწორი თვე";
  }
}
console.log(getMonthName(10));

function multiplyIfGreaterThanFive(num) {
  if (num >= 5) {
    return num * 10;
  } else {
    return "რიცხვი მცირეა";
  }
}
console.log(multiplyIfGreaterThanFive(2));

function getSeason(seasonNumber) {
  switch (true) {
    case seasonNumber === 1:
      return "გაზაფხული";
    case seasonNumber === 2:
      return "ზაფხული";
    case seasonNumber === 3:
      return "შემოდგომა";
    case seasonNumber === 4:
      return "ზამთარი";
    default:
      return "არასწორი სეზონი";
  }
}
console.log(getSeason(3));

function checkPrice(price) {
  if (price > 100) {
    return "ფასი მაღალია";
  } else {
    return "ფასი ნორმალურია";
  }
}
console.log(checkPrice(125));

function switchCalculator(a, b, operator) {
  switch (true) {
    case operator === "+":
      return a + b;
    case operator === "-":
      return a - b;
    case operator === "*":
      return a * b;
    case operator === "/":
      return a / b;
    default:
      return "არასწორი ოპერატორი";
  }
}
console.log(switchCalculator(20, 20, "/"));

function positiveSum(a, b) {
  if (a > 0 && b > 0) {
    return a + b;
  } else {
    return "მინიმუმ ერთი რიცხვი უარყოფითია";
  }
}
console.log(positiveSum(12, 12));
