import data1 from "./cityDataGermany.json";
import data2 from "./countryDataWorldwide.json";
import data3 from "./animalDataWorldwide.json";

const cityDataGermany = data1;
const countryDataWorldwide = data2;
const animalDataWorldwide = data3;

// export default {
//   ...cityDataGermany,
//   ...countryDataWorldwide,
//   ...animalDataWorldwide,
// };

export default function dataImport(data) {
  return `${data}`;
}
