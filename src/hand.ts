import Deck from './deck'

// Hand Class
export default class Hand extends Deck {
    constructor (_cards: Array<any>) {
        super(_cards)
    }

    add(_card: any): Hand {
        this.cards.push(_card)

        return this
    }
}
