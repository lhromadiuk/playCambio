"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CambioRoom = void 0;
const core_1 = require("@colyseus/core");
const RoomSchema_js_1 = require("./schema/RoomSchema.js");
const Player_js_1 = require("./schema/Player.js");
class CambioRoom extends core_1.Room {
    constructor() {
        super(...arguments);
        this.maxClients = 2;
    }
    onCreate(options) {
        this.setState(new RoomSchema_js_1.RoomSchema());
        //let entry = {"username1":options.username, ""}
        this.onMessage("ready", client => {
            const player = this.state.players[client.sessionId];
            console.log("iwtsd");
        });
    }
    onJoin(client, options) {
        console.log(client.sessionId, "joined!");
        //this.setMetadata({ gamePIN: this.roomId });
        this.state.players[client.sessionId] = new Player_js_1.Player(options.username);
        this.state.players[client.sessionId].id = client.sessionId;
    }
    onLeave(client, consented) {
        console.log(client.sessionId, "left!");
        delete this.state.players[client.sessionId];
    }
    onDispose() {
        console.log("room", this.roomId, "disposing...");
    }
    startGame() {
        this.state.players.forEach((player) => {
            for (let i = 0; i < 4; i++) {
                const card = this.state.deck.cards.pop();
                if (card) {
                    player.cards.push(card);
                }
            }
            this.state.currentPlayer = this.state.players[this.state.players.keys()[0]];
            this.lock();
        });
    }
}
exports.CambioRoom = CambioRoom;
