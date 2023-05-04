import React from "react";
import { useEffect, useState } from "react";

export default function Countries() {
  const Countries = useState([]);
  useEffect(
    () =>
      fetch("https://restcountries.com/v3.1/all")
        .then((r) => r.json())
        .then((data) =>{
          console.log(data);
        }),
    []
  );
}
