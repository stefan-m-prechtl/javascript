"use strict";

// Helper
function sysout(msg) {
    console.log(msg);
}

// destructuring of an array
let colors = ['rot', 'gelb', 'grün'];
let [c1, c2, c3] = colors;
sysout(c2);