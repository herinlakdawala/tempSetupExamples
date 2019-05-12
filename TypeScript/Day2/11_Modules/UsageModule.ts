import { IPoint, Point } from "./PointModule.js";
// import { Component } from "@angular/core";
// import { FormBuilder } from "@angular/forms";

// @Component({})
// class HelloComponent{
//     constructor(private fbuilder:FormBuilder){

//     }
// }

// import * as $ from 'jquery';

let point: IPoint = new Point(2, 3);
console.log(point.getDistance());

// document.getElementById("result").innerHTML =
//     point.getDistance().toString();

$(document).ready(function () {
    $("#result").html(point.getDistance().toString());
});