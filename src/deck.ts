// Deck Class
class Deck {
    deck: Array<any>

    constructor (_deck: Array<any>) {
        this.deck = _deck
    }

    // Draw a card from the deck and return it to the user, this simulates
    // a literal draw from the deck and so the card must be removed from 
    // the deck array
    draw(): any | Error {
        if (this.deck.length == 0) {
            throw new Error('No more cards in the deck!')
        }

        return this.deck.shift()
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
