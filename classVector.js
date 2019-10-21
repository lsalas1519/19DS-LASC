class Vector {
    constructor(a) {
        let array = new Array(a);
        for (let i = 0; i < a; i++) {
            array[i] = 0;
        }
        this.array = array;
    }

    getData() { 
        return this.array;
    }

    suma(b) {
        let op = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                op[i] = this.array[i] + b[i];
            }
            return op;
        } else {
            return "Error,no se puede efectuar el cálculo"
        }
    }


    subt(b) {
        let op = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                op[i] = this.array[i] - b[i];
            }
            return op;
        } else {
            return "Error,no se puede efectuar el cálculo"
        }
    }

    


    multi(b) {
        let op = [];


        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                op[i] = this.array[i] * b[i];
            }
            return op;
        } else {
            return "Error,no se puede efectuar el cálculo"
        }
    }
}


let ejemplo = new Vector(5); //[0,0,0,0,0]
console.log(ejemplo.getData());
console.log(ejemplo.suma([1, 1, 1, 1, 1])); //[1, 1, 1, 1, 1]
console.log(ejemplo.suma([1, 1, 1, 1, 1, 1])); //Error
console.log(ejemplo.subt([2, 2, 2, 2, 2])); //[-2, -2, -2, -2, -2]
console.log(ejemplo.multi([2, 2, 2, 2, 2])); //[0, 0, 0, 0, 0]
