//https://www.npmjs.com/package/regenerator-runtime
//runtime import - thanks to this we can use async function
import regeneratorRuntime from "regenerator-runtime";

// styles import
import "../styles/main.css";

import AST from "./classes/ASTConvert";
import ASTObjectExample from "./ASTObjectExample";

//DOM variables

//Variables for the sample call
const exampleContainer = document.querySelector("#exampleContainer");
const exampleASTStringPlace = exampleContainer.querySelector("#ASTString");

//This is only sample
const ast = new AST(ASTObjectExample, exampleASTStringPlace, exampleContainer);

//Handling input data
const ASTForm = document.querySelector("#ASTContainer");
const ASTConvertString = document.querySelector("#ASTConvertString");

ASTForm.addEventListener("submit", e => {
  e.preventDefault();

  try {
    const stringToConvert = ASTForm.querySelector("#ASTObject").value.trim();
    const objToConvert = JSON.parse(stringToConvert);
    const astUser = new AST(objToConvert, ASTConvertString);
  } catch (error) {
    console.log(error);
    alert(
      "Błędna składnia, poprawna składnia ma wyglądać mniej więcej tak jak na tej stronie: https://przeprogramowani.pl/examples/ast.json. Uruchom konsole, aby uzyskać informacje na której pozycji występiuje błąd"
    );
  }
});
