import React from "react";
// import "./App.css";

// function App() {
//   const Countries = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err));
//   });
//   return (
//     <div id="container">
//       <div id="search-wrapper">
//         <input
//           type="text"
//           id="countryInput"
//           placeholder="Input the country name ..."
//         />
//         <button id="search-btn">Search</button>
//       </div>
//       <div id=document"></div>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// export default function App() {
//   const [countries, setCountries] = useState([]);
//   const document, sedocument] = useState([]);
//   const [showWarning, setShowWarning] = useState(false);

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then((res) => res.json())
//       .then((res) => setCountries(res));
//   }, []);

//   function onChangeHandler(evt) {
//     if ((evt.target.value !== '') & (countries.length > 0)) {
//       let filteredocument = countries.filter((c) =>
//         c.name.common.includes(evt.target.value)
//       );

//       if (filteredocument.length > 10) {
//         setShowWarning(true);
//       } else {
//         setShowWarning(false);
//         sedocument(filteredocument);
//       }
//     } else {
//       sedocument([]);
//     }
//   }

//   return (
//     <div>
//       <h1>Countries</h1>
//       <input type="text" onChange={onChangeHandler} />
//       <ul>
//         document &&
//          document.map((i) => <li key={i.name.common}>{i.name.common}</li>)}
//       </ul>
//       {showWarning && <p>Please fine tune your search</p>}
//     </div>
//   );
// }
function App(){
document.addEventListener("DOMContentLoaded", document);
let searchBtn = document.getElementById("search-btn");
let countryinput = document.getElementById("countryInput");
searchBtn.addEventListener("click", () => {
  // listens for a click
  let countryName = countryinput.value;
  //  // searches for the country
  let URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      //  console.log(data[0]);
      //  console.log(data[0].capital[0]);
      //  console.log(data[0].flags.svg);
      //  console.log(data[0].name.common);
      //  console.log(data[0].continents[0]);
      //  console.log(Object.keys(data[0].currencies)[0]);
      //  console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      //  console.log(Object.values(data[0].languages).toString().split(", ").join(", "));

      //This returns the countries details.
      //name, capital city, language spoken, flag, and the currency they use.
      // creates new tags to hold them.
      document.innerHTML = `<img src = "${data[0].flags.svg}"
    id = "flag-img">
    <h2>${data[0].name.common}</h2>
    <div class = "wrapper">
    <div id = "data-wrapper">
    <h4>Capital City:</h4>
    <span>${data[0].capital[0]}</span>
    </div>
    </div>
    <div class = "wrapper">
    <div id = "data-wrapper">
    <h4>Continent:</h4>
    <span>${data[0].continents[0]}</span>
    </div>
    </div>
   <div class = "wrapper">
   <div id = "data-wrapper">
   <h4>Currency:</h4>
   <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
   </div>
   </div>
   <div class = "wrapper">
   <div id = "data-wrapper">
   <h4>Languages:</h4>
   <span>${Object.values(data[0].languages)
     .toString()
     .split(" , ")
     .join(" , ")}</span>
   </div>
   </div>
   `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        // returns the message when the input box is empty.
        document.innerHTML = `<h3>Please input a country name!</h3>`;
      } else {
        // returns the message when the user mistypes the countries name
        document.innerHTML = `<h3>Sorry, ${countryName} is not a country. Try again!</h3>`;
      }
    });
});
}
export default App;
