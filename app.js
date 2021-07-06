"use strict ";

//* Class for World Clock

class WorldClock {
  constructor() {
    //? Local Date Object (Berlin)

    this.now = new Date();

    //? Local hour to calculate (GMT+2)

    this.hours = this.now.getHours();

    //? Sydney Time
    this.sydneyHours = (8 + this.hours) % 24;

    //? TimeZones Hours Based on Central European Summer time

    this.BSTHours = (1 - this.hours) % 24;

    this.CETHours = (1 - this.hours) % 24;

    this.WESTHours = (1 - this.hours) % 24;

    this.WATHours = (1 - this.hours) % 24;

    this.ISTHours = (1 - this.hours) % 24;

    this.CATHours = this.hours;

    this.SASTHours = this.hours;

    this.EETHours = this.hours;

    //? Timezone Lists

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
  }

  //! CHECK HOW TO GET RID OF "-" and if I can start at GMT (UTC)
  printGMT() {
    return `${this.GMTHours}`;
  }

  //! Test for timezone
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
  }

  // new Date to print as string

  timeNowAsString() {
    return `${this.now}`;
  }

  // Local Berlin Time Method

  getLocalTime() {
    if (this.now.getMinutes() < 10) {
      return `The current time in Berlin is ${this.now.getHours()}:0${this.now.getMinutes()}`;
    } else {
      return `The current time in Berlin is ${this.now.getHours()}:${this.now.getMinutes()}`;
    }
  }

  // Sydney Time Method

  sydneyTime() {
    if (this.now.getMinutes() < 10) {
      return `The current time in Sydney is ${
        this.sydneyHours
      }:0${this.now.getMinutes()}`;
    } else {
      return `The current time in Sydney is ${
        this.sydneyHours
      }:${this.now.getMinutes()}`;
    }

    // if (this.sydneyHours < 24) {
    //   return `The time in Sydney is ${
    //     this.sydneyHours
    //   }:${this.now.getMinutes()}`;
    // }
  }

  // Where are you now Method

  whereAreYouNow(city) {
    if (city === "Berlin" && this.now.getMinutes() < 10) {
      return `You are in Berlin and the local time is ${this.now.getHours()}:0${this.now.getMinutes()}`;
    }
    if (city === "Berlin" && this.now.getMinutes() >= 10) {
      return `You are in Berlin and the local time is ${this.now.getHours()}:${this.now.getMinutes()}`;
    }

    if (city === "Sydney" && this.now.getMinutes() < 10) {
      return `The current time in Sydney is ${
        this.sydneyHours
      }:0${this.now.getMinutes()}`;
    }
    if (city === "Sydney" && this.now.getMinutes() >= 10) {
      return `The current time in Sydney is ${
        this.sydneyHours
      }:${this.now.getMinutes()}`;
    } else {
      return `~ ~ ~ Your city is coming soon! ~ ~ ~`;
    }
  }
}

//* Printing

let clockToCall = new WorldClock();

console.log(clockToCall);
console.log(clockToCall.timeNowAsString());

console.log("==================================");

// console.log(clockToCall.now.getMonth());
// console.log(clockToCall.now.getFullYear());
// console.log(clockToCall.now.getTimezoneOffset());

console.log(clockToCall.getLocalTime());

console.log(clockToCall.sydneyTime());

console.log("==================================");

console.log(clockToCall.whereAreYouNow("Berlin"));
console.log(clockToCall.whereAreYouNow("Sydney"));
console.log(clockToCall.whereAreYouNow("Tokyo"));

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

//? Calling time zine with console.table..

// console.table(clockToCall.CEST);
// console.table(clockToCall.)
