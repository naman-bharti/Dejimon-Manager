"use strict";
//import { DejimonServices } from './DejimonService';
var _a, _b;
var ds = new DejimonServices;
function init() {
    ds = new DejimonServices;
    var table = document.getElementById("indexTable");
    var htmlStr = '<thead class="thead-light"><th>Name</th><th>Type</th><th>More Info</th><th>Delete</th></thead><tbody>';
    for (var i = 0; i < ds.Dejimons.length; i++) {
        htmlStr = htmlStr + '<tr><td>' + ds.Dejimons[i].name + '</td><td>' + ds.Dejimons[i].type +
            '</td><td><button class="btn btn-secondary btn-lg" onclick="moreInfoFunct(' + i + ')">More Info</button></td><td><button class="btn btn-secondary btn-lg" onclick="deleteDeji(' + i + ')">Delete</button></td></tr>';
    }
    htmlStr = htmlStr + '</tbody>';
    table.innerHTML = htmlStr;
}
function deleteDeji(num) {
    if (confirm("Press OK to delete " + ds.Dejimons[num].name)) {
        ds.deleteDejimon(num);
    }
    init();
}
function moreInfoFunct(num) {
    localStorage.dejiName = ds.Dejimons[num].name;
    localStorage.dejiHeight = ds.Dejimons[num].height;
    localStorage.dejiWeight = ds.Dejimons[num].weight;
    localStorage.dejiType = ds.Dejimons[num].type;
    localStorage.dejiAbilityName = ds.Dejimons[num].abilityName;
    localStorage.dejiStrength = ds.Dejimons[num].ability;
    localStorage.dejiOverall = ds.Dejimons[num].overall;
    window.open("moreinfo.html", "_self");
}
function moreInfoInit() {
    document.getElementById("dName").textContent = localStorage.dejiName;
    document.getElementById("dHeight").textContent = localStorage.dejiHeight;
    document.getElementById("dWeight").textContent = localStorage.dejiWeight;
    document.getElementById("dType").textContent = localStorage.dejiType;
    document.getElementById("dAbilityName").textContent = localStorage.dejiAbilityName;
    document.getElementById("dStrength").textContent = localStorage.dejiStrength;
    document.getElementById("dOverall").textContent = localStorage.dejiOverall;
}
function range(val) {
    document.getElementById("rangeValue").textContent = val;
}
(_a = document.getElementById("select")) === null || _a === void 0 ? void 0 : _a.addEventListener('change', changeSelect);
function changeSelect() {
    var a = document.getElementById("select").value;
    var items = [];
    if (a == "Yorkshire") {
        items = ["Water", "Ice"];
    }
    else if (a == "Lean") {
        items = ["Fire", "Charm"];
    }
    else if (a == "Potbelly") {
        items = ["Electricity"];
    }
    var str = "";
    for (var item of items) {
        str += "<option>" + item + "</option>";
    }
    document.getElementById("changeThis").innerHTML = str;
}
(_b = document.getElementById("sbmt")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', addOne);
function addOne() {
    var addName = document.getElementById("name").value;
    var addHeight = parseFloat(document.getElementById("height").value);
    var addWeight = parseFloat(document.getElementById("weight").value);
    var addStrength = parseFloat(document.getElementById("strengthRange").value);
    var addType = document.getElementById("select").value;
    var addAbility = document.getElementById("changeThis").value;
    var addOverall = (addHeight + addWeight + addStrength) / 3;
    if (addName == "" || addHeight.toString() == "" || addWeight.toString() == "" || addType == "Choose an option" || addAbility == "") {
        alert("Atleast one of the fields is not filled");
    }
    else {
        var newDejimon = {
            name: addName,
            height: addHeight,
            weight: addWeight,
            type: addType,
            ability: addStrength,
            abilityName: addAbility,
            overall: addOverall
        };
        ds.addDejimon(newDejimon);
        window.open("index.html", "_self");
    }
}
