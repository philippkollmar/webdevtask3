const {checkISBN} = require('./isbn');

describe('checkISBN', () => {

    it('should return 1', () => {
        expect(checkISBN("1")).toBe("1");
    })

    it('should return 3', () => {
        expect(checkISBN("123")).toBe("3");
    })

    it('should return 6', () => {
        expect(checkISBN("396")).toBe("6");
    })

    it('368008783 should return 7', () => {
        expect(checkISBN("368008783")).toBe("7");
    })

    it('3-680-0878 should return 7', () => {
        expect(checkISBN("3-680-08783")).toBe("7");
    })

    it('3---------------680-0878 should return 7', () => {
        expect(checkISBN("3----------------680-08783")).toBe("7");
    })

    it('3-499-13599 should return X', () => {
        expect(checkISBN("3-499-13599")).toBe("X");
    })

    
})