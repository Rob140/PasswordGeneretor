import React, { useState } from "react";

const passwordgeneretor = () => {
  const [rangelength, setRangelength] = useState(12);
  const [numbercheckbox, setNumbercheckbox] = useState(false);
  const [symbolcheckbox, setSymbolcheckbox] = useState(false);
  const [inputdisplayvalue, SetInputdisplayvalue] = useState("");

  // All English alphabet letters (small and capital)
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(lowercaseLetters.charAt(3) === lowercaseLetters[3]);

  let NamberHolder = "0123456789";
  let symbolHolder = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let value = "";
  function generetor() {
    let password = lowercaseLetters + uppercaseLetters;
    console.log(password, 0);

    if (numbercheckbox) {
      password += NamberHolder;
      console.log(password, 1);

      //   SetInputdisplayvalue(password);
    }
    if (symbolcheckbox) {
      password += symbolHolder;
      console.log(password, 2);

      //   SetInputdisplayvalue(password);
      //   const rundomText = Math.floor(Math.random() * password.length);
      //   console.log(rundomText);

      //
    }
    for (let i = 0; i < rangelength; i++) {
      const rundomText = Math.floor(Math.random() * password.length);
      value += password[rundomText];
      console.log((value += password[rundomText]), "pass");
    }

    SetInputdisplayvalue(value);
  }
  // practice
  let s = "world";
  const randomNamber = Math.floor(Math.random() * s.length);
  const indexs = s[randomNamber];
  console.log(indexs, "this is s");

  const arrayItem = ["aple", "banana", "kivi", "orangr", "mango"];
  for (let i = 0; i < arrayItem.length; i++) {
    const randomItem = Math.floor(Math.random() * arrayItem.length);

    const indexArray = arrayItem[randomItem].toUpperCase();

    console.log(indexArray, "this is arrayItem");
  }

  return (
    <>
      <h2>password generator</h2>
      <input type="text" value={inputdisplayvalue} readOnly name="" id="" />
      <button onClick={generetor}>Generate Password</button>
      <br />
      <label>Length: {rangelength}</label>
      <input
        type="range"
        min="4"
        max="20"
        value={rangelength}
        onChange={(e) => setRangelength(e.target.value)}
        name=""
        id=""
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={numbercheckbox}
          onChange={(e) => setNumbercheckbox(e.target.checked)}
          name=""
          id=""
        />
        Include Numbers
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={symbolcheckbox}
          onChange={(e) => setSymbolcheckbox(e.target.checked)}
          name=""
          id=""
        />
        Include Symbols
      </label>
    </>
  );
};

export default passwordgeneretor;
