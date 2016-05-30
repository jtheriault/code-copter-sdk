'use strict';
describe('Analysis', function describeAnalysis () {
    var Analysis = require('./analysis'),
        analysis,
        validErrorParameters;

    beforeEach(function instantiateAnalysis () {
        analysis = new Analysis();

        validErrorParameters = {
            line: 1,
            message: 'Epsilon Rho Rho'
        };
    });

    it('should require instantiation', function constructor () {
        expect(function callAnalysis () {
            /* jshint newcap:false */
            Analysis();
        }).toThrow();
    });

    it('should not allow modification of structure', function shouldBeSealed () {
        expect(function monkeyPatchAnalysis () {
            analysis.isAwesome = true;
        }).toThrow();
    });

    describe('adding an error', function describeAddingErrors () {
        it('should add an error', function addError () {
            analysis.addError(validErrorParameters);

            expect(analysis.errors[0]).toEqual(jasmine.objectContaining(validErrorParameters));
        });

        it('should require parameters', function addError () {
            expect(function addInvalidError () {
                analysis.addError();
            }).toThrow();
        });

        it('should require a line number', function addError () {
            delete validErrorParameters.line;

            expect(function addInvalidError () {
                analysis.addError(validErrorParameters);
            }).toThrow();
        });

        it('should require a message', function addError () {
            delete validErrorParameters.message;

            expect(function addInvalidError () {
                analysis.addError(validErrorParameters);
            }).toThrow();
        });
    });

    it('should pass if there are no errors', function pass () {
        expect(analysis.pass).toEqual(true);
    });

    it('should not pass if there are errors', function pass () {
        analysis.addError(validErrorParameters);

        expect(analysis.pass).toEqual(false);
    });
    
    it('should have a target', function target () {
        var testTarget = 'bullseye';

        analysis = new Analysis({
            target: testTarget
        });

        expect(analysis.target).toEqual(testTarget);
    });
});
