"use strict";
//import * as Model from './DejimonModel';
//import Dejimon = Model.Dejimon;
//export
class DejimonServices {
    constructor() {
        this.Dejimons = [];
        if (localStorage.getItem("DejimonsArray") == null) {
            this.Dejimons = [];
        }
        else {
            this.Dejimons = JSON.parse(localStorage.DejimonsArray);
        }
    }
    addDejimon(d) {
        d.id = DejimonServices.currentID;
        DejimonServices.currentID++;
        this.Dejimons.push(d);
        localStorage.DejimonsArray = JSON.stringify(this.Dejimons);
        console.log("added");
    }
    deleteDejimon(n) {
        this.Dejimons.splice(n, n + 1);
        localStorage.DejimonsArray = JSON.stringify(this.Dejimons);
    }
}
DejimonServices.currentID = 0;
