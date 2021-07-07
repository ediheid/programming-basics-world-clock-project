"use strict ";

//* Class for World Clock

class WorldClock {
  constructor() {
    //? Local Date Object (Berlin)

    this.now = new Date();

    // this.minutes =
    //   this.now.getMinutes() < 10
    //     ? `0${this.now.getMinutes()}`
    //     : `${this.now.getMinutes()}`;

    //? Local hour to calculate (GMT+2)

    this.hours = this.now.getHours();

    this.minutes = this.now.getMinutes();

    this.hours2 = this.now.getMinutes() * 60;

    //? Sydney Time
    this.sydneyHours = (8 + this.hours) % 24;

    //? TimeZones Hours Based on Central European Summer time

    // British Summer Time
    this.BSTHours = (this.hours - 1) % 24;

    // Central European Time
    this.CETHours = (this.hours - 1) % 24;

    // Western European Summer Time
    this.WESTHours = (this.hours - 1) % 24;

    // West Africa Time
    this.WATHours = (this.hours - 1) % 24;

    // Irish Standard Time
    this.ISTHours = (this.hours - 1) % 24;

    // Central Africa Time
    this.CATHours = this.hours;

    // South African Standard Time
    this.SASTHours = this.hours;

    // Eastern European Time
    this.EETHours = this.hours;

    // Arabia Standard Time
    this.ASTHours = (1 + this.hours) % 24;

    // Eastern European Summer Time
    this.EESTHours = (1 + this.hours) % 24;

    // East Africa Time
    this.EATHours = (1 + this.hours) % 24;

    // Turkey Time
    this.TRTHours = (1 + this.hours) % 24;

    // Moscow Standard Time
    this.MSKHours = (1 + this.hours) % 24;

    // Israeli Daylight Time
    this.IDTHours = (1 + this.hours) % 24;

    // Gulf Standard Time
    this.GSTHours = (2 + this.hours) % 24;

    // Seychelles Time
    this.SCTHours = (2 + this.hours) % 24;

    // Reunion Time
    this.RETHours = (2 + this.hours) % 24;

    // Mauritius Time
    this.MUTHours = (2 + this.hours) % 24;

    // Georgia Standard Time
    this.GETHours = (2 + this.hours) % 24;

    // Azerbaijan Time
    this.AZTHours = (2 + this.hours) % 24;

    // Armenia Time
    this.AMTHours = (2 + this.hours) % 24;

    // Central European Summer Time
    this.CESTHours = this.hours;

    // -------------------------------------------

    //!  Timezones with 30+ on minutes...

    this.thirtyPlusMinutes = (30 + this.minutes) % 60;

    // Iran Daylight Time
    this.IRDTHours = (2 + this.hours) % 24;
    this.IRDTHoursForward = (3 + this.hours) % 24;

    // Afghanistan Time
    this.AFTHours = (2 + this.hours) % 24;
    this.AFTHoursForward = (3 + this.hours) % 24;

    // Timezone Lists
    // =======================================

    this.BST = ["Douglas", "London"];

    this.CET = ["Tunis", "Algiers"];

    this.CEST = [
      "Berlin",
      "Vatican City",
      "Bern",
      "Stockholm",
      "Madrid",
      "Ljubljana",
      "Bratislava",
      "Belgrade",
      "San Marino",
      "Warsaw",
      "Oslo",
      "Skopje",
      "Amsterdam",
      "Podgorica",
      "Monaco",
      "Valletta",
      "Luxembourg",
      "Vaduz",
      "Pristina",
      "Rome",
      "Budapest",
      "Gibraltar",
      "Paris",
      "Copenhagen",
      "Prague",
      "Zagreb",
      "Sarajevo",
      "Brussels",
      "Vienna",
      "Andorra La Vella",
      "Tirana",
    ];

    this.WEST = ["Lisbon", "Rabat"];

    this.WAT = [
      "Abuja",
      "Niamey",
      "Libreville",
      "Malabo",
      "Kinshasa",
      "Brazzaville",
      "N'Djamena",
      "Bangui",
      "Yaounde",
      "Porto Novo",
      "Luanda",
    ];

    this.IST = ["Dublin"];

    this.CAT = [
      "Harare",
      "Lusaka",
      "Khartoum",
      "Juba",
      "Kigali",
      "Windhoek",
      "Maputo",
      "Lilongwe",
      "Gitega",
      "Gaborone",
    ];

    this.SAST = ["Pretoria", "Maseru", "Mbabane"];

    this.EET = ["Tripoli", "Cairo"];

    this.AST = ["Sana", "Riyadh", "Doha", "Kuwait", "Baghdad", "Manama"];

    this.EEST = [
      "Kyiv",
      "Damascus",
      "Bucharest",
      "Chisinau",
      "Vilnius",
      "Beirut",
      "Riga",
      "Ammam",
      "Athens",
      "Helsinki",
      "Tallinn",
      "North Nicosia",
      "Nicosia",
      "Sofia",
    ];

    this.EAT = [
      "Kampala",
      "Dodoma",
      "Mogadishu",
      "Antananarivo",
      "Nairobi",
      "Addis Ababa",
      "Asmara",
      "Djibouti",
      "Moroni",
    ];

    this.TRT = ["Ankara"];

    this.MSK = ["Moscow", "Minsk"];

    this.IDT = ["Jerusalem"];

    this.GST = ["Abu Dhabi", "Muscat"];

    this.SCT = ["Victoria"];

    this.RET = ["Saint-Denis"];

    this.MUT = ["Port Louis"];

    this.GET = ["Tbilisi"];

    this.AZT = ["Baku"];

    this.AMT = ["Yerevan"];

    //! Timezones with 30+ on minutes...

    this.AFT = ["Kabul"];

    this.IRDT = ["Tehran"];
  }

  setTime(city) {
    let property = Object.entries(this);
    let currentTimeZone;
    let currentTime;

    let hourForward;

    //!  Timezones with 30+ on minutes...
    let currentTimeZonePlusThirty;
    let currentTimePlusThirty;

    for (let key of property) {
      if (typeof key[1] == "object" && key[1][0] && key[1].includes(city)) {
        currentTimeZone = key[0];
      }
      //!  Timezones with 30+ on minutes...
      if (typeof key[1] == "object" && key[1][0] && key[1].includes(city)) {
        currentTimeZonePlusThirty = key[0];
      }
    }

    switch (currentTimeZone) {
      case "BST":
        currentTime = this.BSTHours;

        break;
      case "MSK":
        currentTime = this.MSKHours;

        break;
      case "CET":
        currentTime = this.CETHours;

        break;
      case "WEST":
        currentTime = this.WESTHours;

        break;
      case "WAT":
        currentTime = this.WATHours;

        break;
      case "IST":
        currentTime = this.ISTHours;

        break;
      case "CAT":
        currentTime = this.CATHours;

        break;
      case "SAST":
        currentTime = this.SASTHours;

        break;
      case "EET":
        currentTime = this.EETHours;

        break;
      case "AST":
        currentTime = this.ASTHours;

        break;
      case "EEST":
        currentTime = this.EESTHours;

        break;
      case "EAT":
        currentTime = this.EATHours;

        break;
      case "TRT":
        currentTime = this.TRTHours;

        break;
      case "IDT":
        currentTime = this.IDTHours;

        break;
      case "GST":
        currentTime = this.GSTHours;

        break;
      case "SCT":
        currentTime = this.SCTHours;

        break;
      case "RET":
        currentTime = this.RETHours;

        break;
      case "MUT":
        currentTime = this.MUTHours;

        break;
      case "GET":
        currentTime = this.GETHours;

        break;
      case "AZT":
        currentTime = this.AZTHours;

        break;
      case "AMT":
        currentTime = this.AMTHours;

        break;
      case "CEST":
        currentTime = this.CESTHours;
    }

    //!  Timezones with 30+ on minutes...

    switch (currentTimeZonePlusThirty) {
      case "IRDT":
        currentTimePlusThirty = this.IRDTHours;
        hourForward = this.IRDTHoursForward;
        break;

      case "AFT":
        currentTimePlusThirty = this.AFTHours;
        hourForward = this.AFTHoursForward;
        break;
    }

    // Final if statements depending on minutes under ten and minute group....

    if (currentTime && this.minutes < 10) {
      return `The current time in ${city} is ${currentTime}:0${this.minutes}`;
    }
    if (currentTime && this.minutes >= 10) {
      return `The current time in ${city} is ${currentTime}:${this.minutes}`;
    }

    //!  Timezones with 30+ on minutes...

    if (
      currentTimePlusThirty &&
      this.thirtyPlusMinutes < 30 &&
      this.thirtyPlusMinutes >= 0
    ) {
      return `The current time in ${city} is ${hourForward}:${this.thirtyPlusMinutes}`;
    }
    if (
      currentTimePlusThirty &&
      this.thirtyPlusMinutes >= 30 &&
      this.thirtyPlusMinutes < 60
    ) {
      return `The current time in ${city} is ${currentTimePlusThirty}:${this.thirtyPlusMinutes}`;
    }
  }
}

//* Printing

let test = new WorldClock();

//? Testing capital cities according to time zone...

console.log(test.setTime("London"));
console.log(test.setTime("Moscow"));

console.log(test.setTime("Tunis"));
console.log(test.setTime("Lisbon"));

console.log(test.setTime("Abuja"));
console.log(test.setTime("Dublin"));

console.log(test.setTime("Harare"));
console.log(test.setTime("Pretoria"));

console.log(test.setTime("Tripoli"));
console.log(test.setTime("Doha"));

console.log(test.setTime("Kyiv"));
console.log(test.setTime("Nairobi"));

console.log(test.setTime("Ankara"));
console.log(test.setTime("Jerusalem"));

console.log(test.setTime("Muscat"));
console.log(test.setTime("Victoria"));

console.log(test.setTime("Saint-Denis"));
console.log(test.setTime("Port Louis"));

console.log(test.setTime("Tbilisi"));
console.log(test.setTime("Baku"));

console.log(test.setTime("Berlin"));

console.log(test.setTime("Yerevan"));
console.log(test.setTime("Tehran"));

console.log(test.setTime("Kabul"));
