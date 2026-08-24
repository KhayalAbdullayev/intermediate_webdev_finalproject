const { calculateInterest } = require('../src/script.js');

describe('calculateInterest', function() {
    it('should calculate interest correctly for valid inputs', function() {
        const result = calculateInterest(1000, 5, 2);
        expect(result).toBe(100);
    });
    
    it('should return null for invalid or non-positive inputs', function() {
        expect(calculateInterest(-1000, 5, 2)).toBe(null);
        expect(calculateInterest(1000, -5, 2)).toBe(null);
        expect(calculateInterest(1000, 5, -2)).toBe(null);
        expect(calculateInterest(0, 5, 2)).toBe(null);
        expect(calculateInterest(1000, 0, 2)).toBe(null);
        expect(calculateInterest(1000, 5, 0)).toBe(null);
        expect(calculateInterest('invalid', 5, 2)).toBe(null);
        expect(calculateInterest(1000, 'invalid', 2)).toBe(null);
        expect(calculateInterest(1000, 5, 'invalid')).toBe(null);
    });
});
