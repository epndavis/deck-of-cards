// Deck Class
export default class Deck {
    deck: Array<any>

    constructor (_deck: Array<any>) {
        this.deck = _deck.slice(0)
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
    
    // Draw a card from the deck and return it to the user, this simulates
    // a literal draw from the deck and so the card must be removed from 
    // the deck array
    draw(): any | Error {
        if (this.deck.length == 0) {
            throw new Error('No more cards in the deck!')
        }

        return this.deck.shift()
    }

    // Cut the deck into two new deck classes
    cut(): [Deck, Deck] {
        const deckLength = this.deck.length

        if (deckLength < 2) {
            throw new Error ('There are not enough cards to be able to perform a cut')
        }

        const splitIndex = Math.ceil(deckLength / 2)

        return [
            new Deck(this.deck.slice(0, splitIndex)),
            new Deck(this.deck.slice(splitIndex, deckLength))
        ]
    }

    // Merge two decks together, adds second deck to the end of the first deck
    static merge(firstDeck: Deck, secondDeck: Deck): Deck {
        let mergeDeck = firstDeck.deck.slice(0)
        Array.prototype.push.apply(mergeDeck, secondDeck.deck);

        return new Deck(mergeDeck);
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
