'use strict';
describe('Main module', function describeMainModule () {
    var main = require('.');

    it('should export Analysis', function shouldExportAnalysis () {
        expect(main.Analysis).toBe(require('./analysis'));
    });

    it('should export Report', function shouldExportReport () {
        expect(main.Report).toBe(require('./report'));
    });

    it('should export Reporter', function shouldExportReporter () {
        expect(main.Reporter).toBe(require('./reporter'));
    });
});
