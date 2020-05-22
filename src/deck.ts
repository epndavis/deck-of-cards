// Deck Class
export default class Deck {
    deck: Array<any>

    constructor (_deck: Array<any>) {
        this.deck = _deck
    }

    // Cut the deck into two new deck classes
    cut(): [Deck, Deck] {
        const deckLength = this.deck.length
        const splitIndex = Math.ceil(deckLength / 2)

        return [
            new Deck(this.deck.slice(0, splitIndex)),
            new Deck(this.deck.slice(splitIndex, deckLength))
        ]
    }
}


// ! Functions !
// Shuffle
// Draw
// Merge
// Cut
// Count
// Discard
// Deal
