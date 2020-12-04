const {checkISBN} = require('./isbn');
const {connectStrings} = require('./isbn');

describe('checkISBN', () => {

    it('1 should return false', () => {
        expect(checkISBN("1")).toBe(false);
    })

    it('123 should return false', () => {
        expect(checkISBN("123")).toBe(false);
    })

    it('368008783 should return 7', () => {
        expect(checkISBN("3680087837")).toBe(true);
    })

    it('3-680-0878 should return 7', () => {
        expect(checkISBN("3-680-08783-7")).toBe(true);
    })

    it('3---------------680-0878 should return 7', () => {
        expect(checkISBN("3----------------680-08783")).toBe(false);
    })

    it('3-499-13599 should return false', () => {
        expect(checkISBN("3-499-13599")).toBe(false);
    })

    it('3-499-13599-X', () => {
        expect(checkISBN("3-499-13599-X")).toBe(true);
    })

    
})

describe('connectStrings', () => {


    it('connect all Strings', () => {
        expect(connectStrings("1")).toBe(false);
    })

    it('3 680 0878 7 should return true', () => {
        expect(connectStrings("3","680","08783","7")).toBe(true);
    })

    it('Valid ISBN should return true', () => {
        expect(connectStrings("3","446","19313","8")).toBe(true);
    })

    it('Invalid ISBN should return false', () => {
        expect(connectStrings("1","234","5678","8")).toBe(false);
    })

    it('Valid ISBN with X should return true', () => {
        expect(connectStrings("3","499","13599","X")).toBe(true);
    })

    it('Invalid ISBN with X should return false', () => {
        expect(connectStrings("3","479","13899","X")).toBe(false);
    })
    
})