class Graph {
    constructor() {
        this.edges = {};
        this.count = 0;
        this.count2 = 0;
        this.mult=false;
        this.conjuntos=new Array;
        this.vertex = [];
    }

  
    addEdge(v1, v2) {
        this.edges[v1].push({
            vertice: v2
        });
        this.edges[v2].push({
            vertice: v1
        });
        //extra  
        if(!this.conjuntos[this.count]){this.conjuntos[this.count]=[];
            this.conjuntos[this.count][0]=v1;
            this.conjuntos[this.count][1]=v2;}
        this.count++;
        if(v1===v2){
            this.mult=true;
        }

    }

    addVertex(vertice) {
        this.vertex.push(vertice);
        this.edges[vertice] = [];
        this.count2++;
    }



    printGraph() {
        let graph = "";
        this.vertex.forEach(vertice => {
            graph += vertice + " -> " + this.edges[vertice].map(n => n.vertice).join("-") + "\n";
        });
        console.log(graph);
    }

    isComplete() {
        let result = false;
        let aux = (this.count2 * (this.count2 - 1)) / 2;
        if (this.count === aux) {
            result = true;
        } else result = false

        return result;

    }

    isMultigraph() {

        return this.mult;

    }

    nombres(g){
        let result=false;
        for(let i=0;i<this.vertex.length;i++){
        if(this.vertex[i]==g.vertex[i]){
            result=true;
        }else {result=false;}
        }

        return result;
    }

    pares(g){
        let result=false;
        for(let i=0;i<this.count;i++){
            for(let k=0;k<2;k++){
            if(this.conjuntos[i][k]===g.conjuntos[i][k]){
                result=true;
            }else {result=false;
}
            }}
        
                return result;

    }

    
    isSubgraph(g) {
        let result=false;
        if(this.pares(g)===this.nombres(g)){
            result=true
        }
        return result;
    }

}

//Prueba


var g = new Graph(3);
var vertices2 = ['1', '2', '3', '4'];
for (var i = 0; i < vertices2.length; i++) {
    g.addVertex(vertices2[i]);
}
g.addEdge('1', '2');
g.addEdge('2', '3');
g.addEdge('3', '4');
g.addEdge('4', '1');
g.addEdge('1', '3');
g.addEdge('4', '2');

g.printGraph();
console.log(g.isComplete());
console.log(g.isMultigraph());
console.log(g.isSubgraph(g));
/*
Resultado:
1 -> 2-4-3
2 -> 1-3-4
3 -> 2-4-1
4 -> 3-1-2
true
false
true
*/

