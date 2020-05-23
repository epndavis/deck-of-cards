// Deck Class
export default class Deck {
    original: Array<any>
    cards: Array<any>

    constructor (_cards: Array<any>) {
        this.original = _cards.slice(0)
        this.cards = _cards.slice(0)
    }

    // Shuffle the deck using the Durstenfeld solution to the Fisher–Yates shuffle
    shuffle(): Deck {
        const deckLength = this.count()

        for (let i = deckLength - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            // Use destructuring assignment to swap values
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }

        return this
    }
    
    // Draw a card from the deck and return it to the user, this simulates
    // a literal draw from the deck and so the card must be removed from 
    // the deck array
    draw(): any | Error {
        if (this.count() == 0) {
            throw new Error('No more cards in the deck!')
        }

        return this.cards.shift()
    }

    // Add card to the deck
    add(_card: any): Deck {
        this.cards.push(_card)

        return this
    }

    // Cut the deck into two new deck classes
    cut(): [Deck, Deck] {
        const deckLength = this.count()

        if (deckLength < 2) {
            throw new Error ('There are not enough cards to be able to perform a cut')
        }

        const splitIndex = Math.ceil(deckLength / 2)

        return [
            new Deck(this.cards.slice(0, splitIndex)),
            new Deck(this.cards.slice(splitIndex, deckLength))
        ]
    }

    // Reset the deck order to when the class was initialized
    reset(): Deck {
        this.cards = this.original.slice(0)

        return this
    }

    // Return count of cards in deck
    count(): number {
        return this.cards.length
    }

    // Merge two decks together, adds second deck to the end of the first deck
    static merge(firstDeck: Deck, secondDeck: Deck): Deck {
        let mergeDeck = firstDeck.cards.slice(0)
        Array.prototype.push.apply(mergeDeck, secondDeck.cards);

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
