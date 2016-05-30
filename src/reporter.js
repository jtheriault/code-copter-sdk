'use strict';
var assert = require('assert');

/**
 * Disseminates a Report.
 *
 * @property {Function} report - Accepts a Report and disseminates it in an implementation-specific way.
 */
class Reporter {
    /* jscs:disable disallowAnonymousFunctions */
    
    /**
     * Create a Reporter.
     *
     * @param {Object} parameters - Named parameter values to use in construction.
     * @param {Function} parameters.report - Accepts a Report and disseminates it in an implementation-specific way.
     */
    constructor (parameters) {
        assert(parameters, 'A value for parameters must be provided');
        assert(typeof parameters.report === 'function', 'A report function must be provided');

        this.report = parameters.report;

        Object.seal(this);
    }
}

module.exports = Reporter;
