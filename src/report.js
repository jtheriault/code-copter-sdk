'use strict';
var Analysis = require('./analysis'),
    assert = require('assert');

/**
 * A report of analyses.
 *
 * @property {Array.<Analysis>} analyses - The analyses of all processed source data.
 * @property {Boolean} pass - Whether all analyses passed.
 */
class Report {
    /* jscs:disable disallowAnonymousFunctions */

    /**
     * Create a Report.
     *
     * @constructor
     */
    constructor () {
        this.analyses = [];
        this.pass = true;

        Object.seal(this);
    }

    /**
     * Add an analysis to the report.
     *
     * @param {Analysis} analysis - An analysis to add to the report.
     */
    addAnalysis (analysis) {
        assert(analysis, 'An analysis must be provided');
        assert(analysis instanceof Analysis, 'The analysis must be of type Analysis');

        this.analyses.push(analysis);

        this.pass = this.pass && analysis.pass;
    }
}

module.exports = Report;
