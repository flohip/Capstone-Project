import { useEffect } from "react";

export default function PhysicalKeyboard() {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      console.log(e.target);
    });
  }, []);
  return <div>physicalKeyboard</div>;
}
