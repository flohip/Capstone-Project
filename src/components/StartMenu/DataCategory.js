import Button from "../Button/Button";

export default function DataCategory({ setCategoryState, setCategory }) {
  function clickHandler(input) {
    if (input) {
      setCategoryState(false);
      setCategory(input);
    }
  }

  return (
    <>
      <Button
        onClick={() => clickHandler("cityDataGermany")}
        content={"Städte in Deutschland"}
      />
      <Button
        onClick={() => clickHandler("countryDataWorldWide")}
        content={"Länder der Welt"}
      />
      <Button
        onClick={() => clickHandler("AnimalsWorldWide")}
        content={"Tiere der Welt"}
      />
    </>
  );
}
