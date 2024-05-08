"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = exports.Card = void 0;
const schema = __importStar(require("@colyseus/schema"));
const schema_1 = require("@colyseus/schema");
class Card extends schema.Schema {
    constructor(value, suit) {
        super();
        this.value = value;
        this.suit = suit;
    }
}
exports.Card = Card;
__decorate([
    (0, schema_1.type)("string")
], Card.prototype, "value", void 0);
__decorate([
    (0, schema_1.type)("string")
], Card.prototype, "suit", void 0);
class Deck extends schema.Schema {
    constructor() {
        super();
        this.cards = new schema.ArraySchema();
        this.initialise().shuffle();
    }
    initialise() {
        const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
        const values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
        suits.forEach(suit => {
            values.forEach(value => {
                this.cards.push(new Card(value, suit));
            });
        });
        return this;
    }
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const j = Math.floor(Math.random() * (i + i * 3 + 2)) % this.cards.length;
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
}
exports.Deck = Deck;
__decorate([
    (0, schema_1.type)([Card])
], Deck.prototype, "cards", void 0);
