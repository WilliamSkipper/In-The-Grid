var color = getComputedStyle(document.documentElement)
  .getPropertyValue("--color")
  .trim();
var backgroundColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--backgroundColor")
  .trim();

colorDark = color;
colorLight = backgroundColor;
let url = "https://discord.com";

displayQr(url, colorLight, colorDark);

function livelyPropertyListener(name, val) {
  switch (name) {
    case "hudColor":
      document.documentElement.style.setProperty("--color", val);
      colorLight = val;
      break;
    case "navColor":
      document.documentElement.style.setProperty("--navColor", val);
      break;
    case "backgroundColor":
      document.documentElement.style.setProperty("--backgroundColor", val);
      colorDark = val;
      break;
    case "qrCode":
      url = val;
      break;
  }
  document.getElementById("qrcode").innerHTML = "";
  displayQr(url, colorLight, colorDark);
}

function displayDateTime() {
  // Get the current date and time
  var now = new Date();

  // Format the date and time
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  var dateStr = now.toLocaleDateString(undefined, options);
  var timeStr = now.toLocaleTimeString();

  // Display the date and time in the specified element
  document.getElementById("currentDate").innerHTML = dateStr;
  document.getElementById("currentTime").innerHTML = timeStr;

  // Display only the day of the week
  var dayOptions = {
    weekday: "long",
  };
  var day = now.toLocaleDateString(undefined, dayOptions);
  document.getElementById("currentDay").innerHTML = day;
}

function displayQr(url, colorLight, colorDark) {
  var qr = new QRCode(document.getElementById("qrcode"), {
    text: url, // Provide the text or URL you want to encode
    width: 128,
    height: 128,
    colorDark: colorLight,
    colorLight: colorDark,
    correctLevel: QRCode.CorrectLevel.H, // Error correction level: L, M, Q, H
  });
}

const texts = [
  "She was beautiful, but not like those girls in magazines. She was beautiful, for the way she thought. She was beautiful, for the sparkle in her eyes when she talked about something she loved. She was beautiful, for her ability to make other people smile, even it she was sad. No, she wasn't beautiful for something as temporary as her looks. She was beautiful, deep down to her soul. She is beautiful.",
  "if I were to kiss you then go to hell, I would So then I can brag with the devil I saw heaven without ever entering it <br> <br> ~ William Shakespeare",
  "Does the one who always waits suffer more than the one who has never waited for anyone? <br> <br> ~ Pablo Neruda",
];

function generateRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  const randomText = texts[randomIndex];
  document.getElementById("quote").innerHTML = randomText;
}

// Function to update the time since opened
function updateSinceOpened() {
  var sinceOpenedElement = document.getElementById("sinceOpened");
  var seconds = parseInt(sinceOpenedElement.textContent);
  seconds++;
  if (seconds == 10) {
    var seconds = 0;
  }
  sinceOpenedElement.textContent = seconds;
}

// Call the function initially to display the date, time, and day of the week
displayDateTime();
generateRandomText();

// Update the date and time every second
setInterval(displayDateTime, 1000);
setInterval(generateRandomText, 10000);
setInterval(updateSinceOpened, Math.random() * (5000, 9000));
