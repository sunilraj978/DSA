class Graph{
    constructor(){
        this.adjustancyList = []
    }

    addVertex(vtx){
        if(!this.adjustancyList[vtx]){
            this.adjustancyList[vtx] = []
        }
        return false
    }

    addEdges(vtx1, vtx2){
        if(this.adjustancyList[vtx1] && this.adjustancyList[vtx2]){

            this.adjustancyList[vtx1].push(vtx2)
            this.adjustancyList[vtx2].push(vtx1)
            return this
        }

        return false;
    }

    removeEdges(vtx1, vtx2){
        if(this.adjustancyList[vtx1] && this.adjustancyList[vtx2]){
            this.adjustancyList[vtx1] = this.adjustancyList[vtx2].filter(v => v!== vtx2)
            this.adjustancyList[vtx2] = this.adjustancyList[vtx1].filter(v => v!== vtx1)

            return true
        }
        return false
    }

    removeVertex(vtx){
        if(!this.adjustancyList[vtx]) return undefined

        for(let neighbor of this.adjustancyList[vtx]){
            this.adjustancyList[neighbor] = this.adjustancyList[neighbor].filter((v) => v!== vtx)
        }
        delete this.adjustancyList[vtx]
        return this;
    }
}


const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdges('A','B')
graph.addEdges('A','C')
graph.addEdges('C','B')

console.log(graph)

//graph.removeEdges('A','B')

graph.removeVertex("A")
console.log(graph)