const {checkISBN} = require('./isbn');

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