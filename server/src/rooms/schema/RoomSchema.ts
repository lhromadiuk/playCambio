import * as schema from "@colyseus/schema";
import { Schema, type, MapSchema } from "@colyseus/schema";
import { Deck } from "./Deck";
import { Player } from "./Player";

export class RoomSchema extends Schema {
    @type(Deck)
    deck: Deck;

    @type({ map: Player })
    players: MapSchema<Player>;

    @type("string")
    currentPlayer: string;

    constructor() {
        super();
        this.deck = new Deck();
        this.players = new MapSchema<Player>();
        this.currentPlayer = "";
    }
}
