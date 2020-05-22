import Deck from '../../src/deck'

describe('Deck', () => {
    let _deck: Deck;

    beforeEach(() => {
        _deck = new Deck([1,2,3,4,5])
    })

    it('can access deck array', () => {
        expect(_deck.deck).toStrictEqual([1,2,3,4,5])
    })

    it('can shuffle the deck and return the instance', () => {
        const returnedInstance = _deck.shuffle();

        expect(returnedInstance).toBeInstanceOf(Deck)
        expect(_deck.deck).not.toEqual([1,2,3,4,5])
        expect(_deck.deck.length).toBe(5)
    })
    
    it('can draw a card from the deck and remove that card from the instance', () => {
        const card = _deck.draw()

        expect(card).toBe(1)
        expect(_deck.deck.length).toBe(4)
    })

    it('throws an error if no cards are left to draw', () => {
        const deckLength = _deck.deck.length
        
        for (let i = 0; i < deckLength; i++) {
            _deck.draw()
        }

        expect(() => {
            _deck.draw()
        }).toThrow()
    })
})
