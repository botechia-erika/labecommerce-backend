import { countries } from "./countries.js";

console.log([countries.length])

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const paisRandom = getRndInteger(0, 250)

  console.log(countries[paisRandom])
