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

    this.hours2 = this.now.getMinutes() * 60;

    //? Sydney Time
    this.sydneyHours = (8 + this.hours) % 24;

    //? TimeZones Hours Based on Central European Summer time

    this.BSTHours = (this.hours - 1) % 24;

    this.CETHours = (this.hours - 1) % 24;

    this.WESTHours = (this.hours - 1) % 24;

    this.WATHours = (this.hours - 1) % 24;

    this.ISTHours = (this.hours - 1) % 24;

    this.CATHours = this.hours;

    this.SASTHours = this.hours;

    this.EETHours = this.hours;

    this.ASTHours = (1 + this.hours) % 24;

    this.EESTHours = (1 + this.hours) % 24;

    this.EATHours = (1 + this.hours) % 24;

    this.TRTHours = (1 + this.hours) % 24;

    this.MSKHours = (1 + this.hours) % 24;

    this.IDTHours = (1 + this.hours) % 24;

    this.GSTHours = (2 + this.hours) % 24;

    this.SCTHours = (2 + this.hours) % 24;

    this.RETHours = (2 + this.hours) % 24;

    this.MUTHours = (2 + this.hours) % 24;

    this.GETHours = (2 + this.hours) % 24;

    this.AZTHours = (2 + this.hours) % 24;

    this.AMTHours = (2 + this.hours) % 24;

    // Timezones with 30 + min condition in loop..
    // -------------------------------------------

    // this.thirtyPlusMinutes = (30 + this.now.getMinutes()) % 60;

    this.IRDTHours = (2 + this.hours) % 24;
    this.IRDTMins = (30 + this.now.getMinutes()) % 60;

    this.AFTHours = (2 + this.hours) % 24;
    this.AFTMins = (30 + this.now.getMinutes()) % 60;

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

    this.IRDT = ["Tehran"];

    this.GST = ["Abu Dhabi", "Muscat"];

    this.SCT = ["Victoria"];

    this.RET = ["Saint-Denis"];

    this.MUT = ["Port Louis"];

    this.GET = ["Tbilisi"];

    this.AZT = ["Baku"];

    this.AMT = ["Yerevan"];

    this.AFT = ["Kabul"];
  }

  printGMT() {
    return `${this.GMTHours}`;
  }

  // Timezones loops with conditions.
  // ===============================

  capitalCityTime(selectedCity) {
    //? BST

    for (let city of this.BST) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.BSTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.BSTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? CET

    for (let city of this.CET) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.CETHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.CETHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? CEST
    for (let city of this.CEST) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.hours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.hours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? WEST
    for (let city of this.WEST) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.WESTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.WESTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? WAT
    for (let city of this.WAT) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.WATHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.WATHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? IST
    for (let city of this.IST) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.ISTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.ISTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? CAT
    for (let city of this.CAT) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.CATHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.CATHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? SAST
    for (let city of this.SAST) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.SASTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.SASTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? EET
    for (let city of this.EET) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.EETHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.EETHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? AST
    for (let city of this.AST) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.ASTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.ASTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? EEST
    for (let city of this.EEST) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.EESTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.EESTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? EAT
    for (let city of this.EAT) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.EATHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.EATHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? TRT
    for (let city of this.TRT) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.TRTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.TRTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? MSK
    for (let city of this.MSK) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.MSKHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.MSKHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? IDT
    for (let city of this.IDT) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.IDTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.IDTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? MUT
    for (let city of this.MUT) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.MUTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.MUTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? GST
    for (let city of this.GST) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.GSTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.GSTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? SCT
    for (let city of this.SCT) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.SCTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.SCTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? RET
    for (let city of this.RET) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.RETHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.RETHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? GET
    for (let city of this.GET) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.GETHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.GETHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? AZT
    for (let city of this.AZT) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.AZTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.AZTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    //? AMT
    for (let city of this.AMT) {
      if (city === selectedCity) {
        if (this.now.getMinutes() < 10) {
          return `The current time in ${selectedCity} is ${
            this.AMTHours
          }:0${this.now.getMinutes()}`;
        } else {
          return `The current time in ${selectedCity} is ${
            this.AMTHours
          }:${this.now.getMinutes()}`;
        }
      }
    }

    // Timezones with 30 + min condition in loop..
    // -------------------------------------------

    //! AFT - Testing
    for (let city of this.AFT) {
      if (city === selectedCity) {
        if (this.AFTMins < 30 && this.AFTMins > 0 && this.AFTMins) {
          this.AFTHours = (3 + this.hours) % 24;
        }
        return `The current time in ${selectedCity} is ${this.AFTHours}:${this.AFTMins}`;
      }
      if (this.AFTMins >= 30 && this.AFTMins < 60) {
        this.AFTHours = (2 + this.hours) % 24;
      }
      return `The current time in ${selectedCity} is ${this.AFTHours}:${this.AFTMins}`;
    }

    //! IRDT - TESTING

    for (let city of this.IRDT) {
      if (city === selectedCity) {
        if (this.IRDTMins < 30 && this.IRDTMins > 0 && this.IRDTMins) {
          this.IRDTHours = (3 + this.hours) % 24;
        }
        return `The current time in ${selectedCity} is ${this.IRDTHours}:${this.IRDTMins}`;
      }
      if (this.IRDTMins >= 30 && this.IRDTMins < 60) {
        this.IRDTHours = (2 + this.hours) % 24;
      }
      return `The current time in ${selectedCity} is ${this.IRDTHours}:${this.IRDTMins}`;
    }
  }

  // new Date to print as string

  timeNowAsString() {
    return `${this.now}`;
  }

  // Sydney Time Method

  sydneyTime() {
    if (this.now.getMinutes() < 10) {
      return `The time in Sydney is ${
        this.sydneyHours
      }:0${this.now.getMinutes()}`;
    } else {
      return `The time in Sydney is ${
        this.sydneyHours
      }:${this.now.getMinutes()}`;
    }
  }
}

//* Printing

let clockToCall = new WorldClock();

console.log(clockToCall);
console.log(clockToCall.timeNowAsString());

console.log(clockToCall.sydneyTime());

//? Testing capital cities according to time zone...

console.log(clockToCall.capitalCityTime("London"));
console.log(clockToCall.capitalCityTime("Berlin"));

console.log(clockToCall.capitalCityTime("Tunis"));
console.log(clockToCall.capitalCityTime("Lisbon"));

console.log(clockToCall.capitalCityTime("Abuja"));
console.log(clockToCall.capitalCityTime("Dublin"));

console.log(clockToCall.capitalCityTime("Harare"));
console.log(clockToCall.capitalCityTime("Pretoria"));

console.log(clockToCall.capitalCityTime("Tripoli"));
console.log(clockToCall.capitalCityTime("Maseru"));

console.log(clockToCall.capitalCityTime("Sana"));
console.log(clockToCall.capitalCityTime("Kyiv"));

console.log(clockToCall.capitalCityTime("Kampala"));
console.log(clockToCall.capitalCityTime("Ankara"));

console.log(clockToCall.capitalCityTime("Moscow"));
console.log(clockToCall.capitalCityTime("Chisinau"));

console.log(clockToCall.capitalCityTime("Abu Dhabi"));
console.log(clockToCall.capitalCityTime("Victoria"));

console.log(clockToCall.capitalCityTime("Saint-Denis"));
console.log(clockToCall.capitalCityTime("Port Louis"));

console.log(clockToCall.capitalCityTime("Tbilisi"));
console.log(clockToCall.capitalCityTime("Baku"));

console.log(clockToCall.capitalCityTime("Yerevan"));

console.log("==================================");
console.log("Keep an eye on logic =================");

//! Come back to check on this logic...

// console.log(`${clockToCall.IRDTHours}:${clockToCall.IRDTMins}`);

console.log(clockToCall.capitalCityTime("Tehran"));
console.log(clockToCall.capitalCityTime("Kabul"));

// console.log(clockToCall.hours);
// console.log(clockToCall.IRDTHours);
// console.log(clockToCall.IRDTMins);

// console.log(clockToCall.thirtyPlusMins());

console.log("==================================");

//? Calling time zine with console.table..

// console.table(clockToCall.CEST);
// console.table(clockToCall.)
