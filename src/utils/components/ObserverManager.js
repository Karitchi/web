export default class ObserverManager {
  constructor() {
    this.observers = {}; // Use an object to store observers by type
  }

  registerObserver(type, observer) {
    if (!this.observers[type]) {
      this.observers[type] = [];
    }
    this.observers[type].push(observer);
  }

  unregisterObserver(type, observer) {
    if (this.observers[type]) {
      const index = this.observers[type].indexOf(observer);
      if (index !== -1) {
        this.observers[type].splice(index, 1);
      }
    }
  }

  notifyObserversByType(type, data) {
    if (this.observers[type]) {
      for (const observer of this.observers[type]) {
        observer.update(type, data); // Pass event type and data
      }
    }
  }
}
