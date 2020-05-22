import Deck from '../../src/deck'

describe('Deck', () => {
    let _deck: Deck;

    beforeEach(() => {
        _deck = new Deck([1,2,3,4,5])
    })

    it('can access deck array', () => {
        expect(_deck.deck).toStrictEqual([1,2,3,4,5])
    })

    it('can cut the deck into two new decks', () => {
        const decks = _deck.cut();

        expect(decks.length).toBe(2)
        expect(decks[0]).toBeInstanceOf(Deck)
        expect(decks[1]).toBeInstanceOf(Deck)
    })
})
