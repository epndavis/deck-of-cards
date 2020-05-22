import Deck from '../../src/deck'

interface TestObject {
    id: number
}

describe('Deck', () => {
    let _deck: Deck
    let _array: Array<TestObject>

    beforeEach(() => {
        _array = [];

        for (let i = 1; i <= 5; i++) {
            _array.push({
                'id': i
            })
        }

        _deck = new Deck(_array)
    })

    it('can access deck array', () => {
        expect(_deck.deck).toStrictEqual(_array)
    })

    it('can modify referenced object in original array', () => {
        _array[0].id = 0

        expect(_deck.deck[0].id).toBe(0)
    })

    it('can shuffle the deck and return the instance', () => {
        const returnedInstance = _deck.shuffle();

        expect(returnedInstance).toBeInstanceOf(Deck)
        expect(_deck.deck).not.toEqual(_array)
        expect(_deck.deck.length).toBe(5)
    })
    
    it('can draw a card from the deck and remove that card from the instance', () => {
        const card = _deck.draw()

        expect(card).toStrictEqual({'id': 1})
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
        const decks = _deck.cut()

        expect(decks.length).toBe(2)
        expect(decks[0]).toBeInstanceOf(Deck)
        expect(decks[1]).toBeInstanceOf(Deck)
    })

    it('can keep object reference when cutting', () => {
        const decks = _deck.cut()

        _array[0].id = 0
        _array[_array.length - 1].id = 10
        expect(decks[0].deck.filter(arr => arr.id === 0)).toStrictEqual([{'id': 0}])
        expect(decks[1].deck.filter(arr => arr.id === 10)).toStrictEqual([{'id': 10}])
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
        let _array2 = [
            { 'id': 5 },
            { 'id': 6 },
            { 'id': 7 },
            { 'id': 8 },
            { 'id': 9 },
        ]
        const _deck2 = new Deck(_array2)
        const mergedDeck = Deck.merge(_deck, _deck2)

        expect(mergedDeck).toBeInstanceOf(Deck)
        expect(mergedDeck.deck).toStrictEqual([
            { 'id': 1 },
            { 'id': 2 },
            { 'id': 3 },
            { 'id': 4 },
            { 'id': 5 },
            { 'id': 5 },
            { 'id': 6 },
            { 'id': 7 },
            { 'id': 8 },
            { 'id': 9 },
        ])
        expect(_deck2.deck).toStrictEqual([
            { 'id': 5 },
            { 'id': 6 },
            { 'id': 7 },
            { 'id': 8 },
            { 'id': 9 },
        ])
        expect(_deck.deck).toStrictEqual(_array)
    })

    it('can keep object reference when merging', () => {
        let _array2 = [
            { 'id': 5 },
            { 'id': 6 },
            { 'id': 7 },
            { 'id': 8 },
            { 'id': 9 },
        ]
        const _deck2 = new Deck(_array2)
        const mergedDeck = Deck.merge(_deck, _deck2)

        _array[0].id = 0
        _array2[0].id = 10
        expect(mergedDeck.deck.filter(arr => arr.id === 0)).toStrictEqual([{'id': 0}])
        expect(mergedDeck.deck.filter(arr => arr.id === 10)).toStrictEqual([{'id': 10}])
    })

    it('can reset the deck to it\'s original set', () => {
        let deckReference = _deck.shuffle().reset()

        expect(_deck.deck).toStrictEqual(_array)
        expect(deckReference).toBeInstanceOf(Deck)

        _deck.shuffle()

        expect(_deck.original).toStrictEqual(_array)
    })
})
