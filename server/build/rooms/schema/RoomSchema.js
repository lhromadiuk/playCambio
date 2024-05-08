"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSchema = void 0;
const schema_1 = require("@colyseus/schema");
const Deck_1 = require("./Deck");
const Player_1 = require("./Player");
class RoomSchema extends schema_1.Schema {
    constructor() {
        super();
        this.deck = new Deck_1.Deck();
        this.players = new schema_1.MapSchema();
        this.currentPlayer = "";
    }
}
exports.RoomSchema = RoomSchema;
__decorate([
    (0, schema_1.type)(Deck_1.Deck)
], RoomSchema.prototype, "deck", void 0);
__decorate([
    (0, schema_1.type)({ map: Player_1.Player })
], RoomSchema.prototype, "players", void 0);
__decorate([
    (0, schema_1.type)("string")
], RoomSchema.prototype, "currentPlayer", void 0);
