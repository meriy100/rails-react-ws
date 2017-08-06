import * as ActionCable from 'actioncable';

const CableApp:any = { cable: ActionCable.createConsumer(" ws://localhost:3000/cable") };
export default CableApp.cable.subscriptions.create("ApiChannel", {
  connected:  function() {
    this.perform('post', {one: true})
  },
  disconnected: function() {
  },
  received: function(data:any) {
    console.log(data);
  }
})

