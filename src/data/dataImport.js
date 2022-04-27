import cityDataGermany from "./cityDataGermany.json";
import countryDataEurope from "./countryDataEurope.json";
import animalDataWorldwide from "./animalDataWorldwide.json";

export default function dataImport(dataRequest) {
  let returnValue = "";

  switch (dataRequest) {
    case "cityDataGermany":
      returnValue = cityDataGermany;
      break;
    case "countryDataEurope":
      returnValue = countryDataEurope;
      break;
    case "animalDataWorldwide":
      returnValue = animalDataWorldwide;
      break;
    default:
      break;
  }
  return returnValue;
}

// Left this code here as reminder that i tried this async/await function first,
// but the program crashed before reading the new imported data

// export default async function dataImport(dataRequest) {
//   if (dataRequest !== "none") {
//     const dataPromise = await import(`./${dataRequest}.json`);
//     const dataObject = await dataPromise.default;
//     console.log("return this: ", dataObject);
//     return dataObject;
//   } else {
//     return;
//   }
// }
