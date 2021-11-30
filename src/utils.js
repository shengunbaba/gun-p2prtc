export  class EventDispatcher {
    constructor() {
        this.eventListeners = {}
    }

    addEventListener(eventType, listener) {
        if (!this.eventListeners[eventType]) {
            this.eventListeners[eventType] = [];
        }
        this.eventListeners[eventType].push(listener)
    }

    removeEventListener(eventType, listener) {
        if (!this.eventListeners[eventType]) {
            return;
        }
        const index = this.eventListeners[eventType].findIndex(x => x === listener)
        this.eventListeners[eventType].splice(index, 1)
    }

    clearEventListener(eventType) {
        this.eventListeners[eventType] = [];
    }

    clearAllEventListeners() {
        this.eventListeners = {}
    }

    dispatchEvent(event) {
        if (!this.eventListeners[event.type]) {
            return
        }
        for (const listener of this.eventListeners[event.type]) {
            listener(event);
        }
    }
}