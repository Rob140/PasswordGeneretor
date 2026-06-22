import { useState } from "react";
import styles from "./Passwordgeneretor.module.css";

const Passwordgeneretor = () => {
  const [rangelength, setRangelength] = useState(12);
  const [numbercheckbox, setNumbercheckbox] = useState(false);
  const [symbolcheckbox, setSymbolcheckbox] = useState(false);
  const [inputdisplayvalue, SetInputdisplayvalue] = useState("");

  // All English alphabet letters (small and capital)
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(lowercaseLetters.charAt(3) === lowercaseLetters[3]);

  const NamberHolder = "0123456789";
  const symbolHolder = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  function generetor() {
    let availableChars = lowercaseLetters + uppercaseLetters;

    if (numbercheckbox) {
      availableChars += NamberHolder;
    }
    if (symbolcheckbox) {
      availableChars += symbolHolder;
    }

    let value = "";
    for (let i = 0; i < rangelength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      value += availableChars[randomIndex];
    }

    SetInputdisplayvalue(value);
  }
  // practice
  // let s = "world";
  // const randomNamber = Math.floor(Math.random() * s.length);
  // const indexs = s[randomNamber];
  // console.log(indexs, "this is s");

  // const arrayItem = ["aple", "banana", "kivi", "orangr", "mango"];
  // for (let i = 0; i < arrayItem.length; i++) {
  //   const randomItem = Math.floor(Math.random() * arrayItem.length);

  //   const indexArray = arrayItem[randomItem].toUpperCase();

  //   console.log(indexArray, "this is arrayItem");
  // }

  return (
    <div className={styles.generator}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Password Generator</h2>

        <div className={styles.output}>
          {inputdisplayvalue || "Your secure password will appear here"}
        </div>

        <div className={styles.controls}>
          <label className={styles.sliderLabel}>Length: {rangelength}</label>
          <button className={styles.button} onClick={generetor}>
            Generate Password
          </button>
        </div>

        <input
          type="range"
          min="4"
          max="20"
          value={rangelength}
          onChange={(e) => setRangelength(e.target.value)}
          className={styles.slider}
        />

        <label className={styles.option}>
          <input
            type="checkbox"
            checked={numbercheckbox}
            onChange={(e) => setNumbercheckbox(e.target.checked)}
            className={styles.checkbox}
          />
          Include Numbers
        </label>

        <label className={styles.option}>
          <input
            type="checkbox"
            checked={symbolcheckbox}
            onChange={(e) => setSymbolcheckbox(e.target.checked)}
            className={styles.checkbox}
          />
          Include Symbols
        </label>

        <p className={styles.note}>
          Tip: use a longer password with symbols and numbers for stronger
          security.
        </p>
      </div>
    </div>
  );
};

export default Passwordgeneretor;
