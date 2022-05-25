type Callback = () => void;

interface IEvents {
  [key: string]: Callback[];
}

export class Events {
  private events: IEvents = {};

  public on(eventName: string, callback: Callback): void {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  public trigger(eventName: string): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => {
        callback();
      });
    }
  }

  public off(eventName: string): void {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
  }
}
