// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("a")
  const bBase = params.get("b")
  const height = params.get("h")
  console.log(aBase)

  // process
  const volume = (4 / 3 ) * 3.14 * radius ** 3
  const dimensions =
    "<ul>\n<li>a base = " +
    aBase +
    "</li>\n<li>b base = " +
    bBase +
    "</li>\n<li>height = " +
    height +
    "</li>\n</ul>"

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML = "volume is: " + volume + " mm "
}
