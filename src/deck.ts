// Deck Class
export default class Deck {
    deck: Array<any>

    constructor (_deck: Array<any>) {
        this.deck = _deck
    }

    // Shuffle the deck using the Durstenfeld solution to the Fisher–Yates shuffle
    shuffle(): Deck {
        const deckLength = this.deck.length

        for (let i = deckLength - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            // Use destructuring assignment to swap values
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }

        return this
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
