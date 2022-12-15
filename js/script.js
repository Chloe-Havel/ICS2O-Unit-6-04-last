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
  const radius = params.get("r")
  console.log(aBase)

  // process
  const volume = (4 / 3 ) * 3.14 * radius ** 3

  // output
  document.getElementById("volume").innerHTML = "volume is: " + volume + " mm³ "
}
