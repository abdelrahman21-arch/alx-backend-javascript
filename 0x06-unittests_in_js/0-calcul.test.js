const calculateNumber = require('./0-calcul.js')
const assert = require('assert')

describe('calculateNumber', function() {
    it('should round both numbers and then add', function() {
	assert.strictEqual(calculateNumber(3.5, 5.5), 10);
	assert.strictEqual(calculateNumber(4.5, 5.5), 11);
	assert.strictEqual(calculateNumber(4.9, 5.1), 10); // 5 + 5 = 10
        assert.strictEqual(calculateNumber(-4.5, 5.5), 2); // -4 + 6 = 2
        assert.strictEqual(calculateNumber(-4.4, -5.4), -9); // -4 + -5 = -9
        assert.strictEqual(calculateNumber(-4.6, -5.6), -11); // -5 + -6 = -11
    });
});