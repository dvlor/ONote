export class EventService{
  constructor(){
    this.listeners = {};
  }

  on(eventName, listener){
    if (!eventName || typeof listener !== 'function'){
      return;
    }
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listener);
  }

  off(eventName, listener){
    if (!eventName || typeof listener !== 'function'){
      return;
    }
    if (!this.listeners[eventName]) {
      return;
    }
    var index = this.listeners[eventName].indexOf(listener);
    if (index > -1){
      this.listeners[eventName].splice(index, 1);
    }
  }

  fire(eventName, args){
    let listeners = this.listeners[eventName];
    if (listeners) {
      listeners.forEach((listener) => {
        new Promise((resolve) => resolve()).then(() => listener(args));
      })
    }
  }
}