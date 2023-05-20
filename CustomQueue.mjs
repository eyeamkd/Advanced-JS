import _ from 'lodash'; 

class Queue{
    constructor(){
        this.items = []
    } 

    enqueue(element){
       this.items.push(element);
    } 

    dequeue(){
        this.items = _.pullAt(this.items, 0);
    }

    getSize(){
        return this.items.length;
    }
}

export default Queue;