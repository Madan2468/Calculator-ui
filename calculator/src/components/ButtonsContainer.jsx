import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onbuttonclick }) => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div classNameName={styles.buttonscontainer}>
      {buttonNames.map((buttonName) => (
        <button
          classNameName={styles.button}
          onClick={() => onbuttonclick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
