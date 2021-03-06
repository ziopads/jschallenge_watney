const watney = require('../watneyDecoder.js');
const expect = require('chai').expect;

describe('Arc Encoder', function() {
    it('Should exist', function() {
        expect(typeof watney.encodeArc).to.equal('function');
    });
    it('Should Encode Correctly', function () {
        expect(watney.encodeArc('I\'ll just wave to you guys as I go by.')).to.equal('90,202.5,45,157.5,135,270,135,270,45,0,135,225,157.5,112.5,157.5,67.5,157.5,90,45,0,157.5,157.5,135,22.5,157.5,135,135,112.5,45,0,157.5,90,135,337.5,45,0,157.5,202.5,135,337.5,157.5,112.5,45,0,135,157.5,157.5,112.5,157.5,202.5,157.5,67.5,45,0,135,22.5,157.5,67.5,45,0,90,202.5,45,0,135,157.5,135,337.5,45,0,135,45,157.5,202.5,45,315');
        expect(watney.encodeArc('I admit it\'s fatally dangerous, but I\'d get to fly around like Iron Man.')).to.equal('90,202.5,45,0,135,22.5,135,90,135,292.5,135,202.5,157.5,90,45,0,135,202.5,157.5,90,45,157.5,157.5,67.5,45,0,135,135,135,22.5,157.5,90,135,22.5,135,270,135,270,157.5,202.5,45,0,135,90,135,22.5,135,315,135,157.5,135,112.5,157.5,45,135,337.5,157.5,112.5,157.5,67.5,45,270,45,0,135,45,157.5,112.5,157.5,90,45,0,90,202.5,45,157.5,135,90,45,0,135,157.5,135,112.5,157.5,90,45,0,157.5,90,135,337.5,45,0,135,135,135,270,157.5,202.5,45,0,135,22.5,157.5,45,135,337.5,157.5,112.5,135,315,135,90,45,0,135,270,135,202.5,135,247.5,135,112.5,45,0,90,202.5,157.5,45,135,337.5,135,315,45,0,90,292.5,135,22.5,135,315,45,315');
    });
})