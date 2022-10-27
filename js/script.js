// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/* Function */
function calculate() {
  /* Input */
  const base = parseInt(document.getElementById("triangleBase").value)
  const height = parseInt(document.getElementById("triangleHeight").value)

  /* Process */
  const area = (base * height) / 2

  /* Output */
  document.getElementById("area").innerHTML = "The area is: " + area + " cm²"
}
