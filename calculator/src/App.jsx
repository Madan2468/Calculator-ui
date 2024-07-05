import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setcalVal] = useState("");

  const onbuttonclick = (buttonText) => {
    if (buttonText === "c") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div classNameName={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onbuttonclick={onbuttonclick}></ButtonsContainer>
    </div>
  );
}

export default App;
