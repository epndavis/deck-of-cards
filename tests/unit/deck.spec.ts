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

    it('can cut the deck into two new decks', () => {
        const decks = _deck.cut();

        expect(decks.length).toBe(2)
        expect(decks[0]).toBeInstanceOf(Deck)
        expect(decks[1]).toBeInstanceOf(Deck)
    })

    it('throws an error if the deck is not large enough to cut', () => {
        const deckLength = _deck.deck.length
        
        for (let i = 0; i < deckLength - 1; i++) {
            _deck.draw()
        }

        expect(() => {
            _deck.cut()
        }).toThrow()
    })

    it('can merge two decks and return a deck instance', () => {
        const _deck2 = new Deck([5,6,7,8,9])
        const mergedDeck = Deck.merge(_deck, _deck2)

        expect(mergedDeck).toBeInstanceOf(Deck)
        expect(mergedDeck.deck).toStrictEqual([1,2,3,4,5,5,6,7,8,9])
        expect(_deck2.deck).toStrictEqual([5,6,7,8,9])
        expect(_deck.deck).toStrictEqual([1,2,3,4,5])
    })
})
