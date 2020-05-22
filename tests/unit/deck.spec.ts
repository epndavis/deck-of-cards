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
})
