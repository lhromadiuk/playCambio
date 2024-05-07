import * as schema from "@colyseus/schema";
import { type } from "@colyseus/schema";
export class Card extends schema.Schema {
    @type("string") value: string;
    @type("string") suit: string;

    constructor(value: string, suit: string) {
        super();
        this.value = value;
        this.suit = suit;
    }
}

export class Deck extends schema.Schema {
    @type([Card])
    cards: schema.ArraySchema<Card>;

    constructor() {
        super();
        this.cards = new schema.ArraySchema<Card>();
        this.initialise().shuffle();
    }

    initialise(): this {
        const suits: string[] = ["Hearts", "Spades", "Clubs", "Diamonds"];
        const values: string[] = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

        suits.forEach(suit => {
            values.forEach(value => {
                this.cards.push(new Card(value, suit));
            });
        });

        return this;
    }

    shuffle(): void {
        for (let i = 0; i < this.cards.length; i++) {
            const j = Math.floor(Math.random() * (i + i *3 + 2))% this.cards.length;
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
}
