// Type definitions for ActionCable
// Project: https://github.com/rails/rails/tree/master/actioncable
// Definitions by: Vincent Zhu <https://github.com/zhu1230>
// Definitions: https://github.com/zhu1230/DefinitelyTyped

declare module ActionCable {
  interface Channel {
    unsubscribe(): void;
    perform(action: string, data: {}): void;
  }
  interface Subscriptions {
    create(chan_name: string, obj: {}): Channel;
  }
  interface Cable {
    subscriptions: Subscriptions;
  }
  function createConsumer(): Cable;
  function createConsumer(url: string): Cable;
}

declare interface AppInterface {
  cable?: ActionCable.Cable;
  network?: ActionCable.Channel; 
}

declare var App: AppInterface;





