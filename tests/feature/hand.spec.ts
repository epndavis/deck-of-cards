import Deck from '../../src/deck'
import Hand from '../../src/hand'

describe('Hand class', () => {
    let _deck: Deck
    let _hand: Hand
    let _array: Array<any>

    beforeEach(() => {
        _array = [];

        for (let i = 1; i <= 5; i++) {
            _array.push({
                'id': i
            })
        }

        _deck = new Deck(_array)      
        _hand = new Hand([]) 
    })

    it('can add card to hand', () => {
        _hand.add(_deck.draw())

        expect(_hand.cards.length).toBe(1)
    })
})
