import * as schema from "@colyseus/schema";
import { Schema, type, ArraySchema } from "@colyseus/schema";
import { Card } from "./Deck";

export class Player extends Schema {
    @type("string")
    name: string;

    @type([Card])
    cards: ArraySchema<Card>;

    @type("number")
    score: number;

    constructor(name: string) {
        super();
        this.name = name;
        this.cards = new ArraySchema<Card>();
        this.score = 0;
    }
}
