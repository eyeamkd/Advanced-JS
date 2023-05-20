export class EventEmitter{
     events;
    constructor(){
        this.events = {};
    }

    on(eventName, listner){
      if(!this.events[eventName]){
        this.events[eventName]= [];
    } 
    this.events[eventName].push(listner);
    }

    emit(eventName){
        this.events[eventName]?.forEach(listner => {
            listner();
        });
    } 

    off(eventName){
        if(this.events[eventName])
        delete this.events[eventName];
    }
}