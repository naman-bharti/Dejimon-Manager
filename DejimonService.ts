//import * as Model from './DejimonModel';
//import Dejimon = Model.Dejimon;

//namespace and export
interface Services {
    addDejimon(d: Dejimon): void;
    deleteDejimon(n: number): void;
}

//export
class DejimonServices implements Services {
    static currentID = 0;
    Dejimons: Dejimon[];
    constructor() {
        this.Dejimons = [];
        if (localStorage.getItem("DejimonsArray") == null) {
            this.Dejimons = [];
        }
        else{
            this.Dejimons = JSON.parse(localStorage.DejimonsArray);
        }
    }

    addDejimon(d: Dejimon): void {
        d.id = DejimonServices.currentID;
        DejimonServices.currentID++;
        this.Dejimons.push(d);
        localStorage.DejimonsArray = JSON.stringify(this.Dejimons);
        console.log("added");
    }

    deleteDejimon(n: number): void {
        this.Dejimons.splice(n, n+1);
        localStorage.DejimonsArray = JSON.stringify(this.Dejimons);
    }
}