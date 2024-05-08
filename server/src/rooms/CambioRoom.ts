import { Room, Client } from "@colyseus/core";
import { RoomSchema } from "./schema/RoomSchema.js";
import { Player } from "./schema/Player.js";




export class CambioRoom extends Room {
  maxClients = 2;

  onCreate(options: any) {
   
    this.setState(new RoomSchema());
    //let entry = {"username1":options.username, ""}
    this.onMessage("ready", client => {
      const player = this.state.players[client.sessionId]
      console.log("iwtsd")
    });

  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    //this.setMetadata({ gamePIN: this.roomId });
    this.state.players[client.sessionId] = new Player(options.username);
    this.state.players[client.sessionId].id = client.sessionId;
  }

  onLeave(client: Client, consented: any) {
    console.log(client.sessionId, "left!");
    delete this.state.players[client.sessionId]
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
  startGame() {
    this.state.players.forEach((player: Player) => {
      for (let i = 0; i < 4; i++) {
        const card = this.state.deck.cards.pop();
        if (card) {
          player.cards.push(card);
        }
      }

      this.state.currentPlayer = this.state.players[this.state.players.keys()[0]];
      this.lock();

    })
  }

}
