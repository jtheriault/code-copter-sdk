'use strict';
var assert = require('assert');

/**
 * An error encountered during analysis.
 *
 * @typedef {Object} AnalysisError
 * @property {Number} line - The line number on which the error was found.
 * @property {String} message - A description of the error found.
 */

/**
 * What analyzers found for a source data target.
 *
 * @property {Array.<AnalysisError>} errors - The errors found.
 * @property {String} target - The source that was analyzed.
 */
class Analysis {
    /* jscs:disable disallowAnonymousFunctions */

    /**
     * Create an analysis.
     *
     * @param {Object} parameters - Named parameter values to use in construction.
     * @param {String} parameters.target - The target of this analysis (e.g. the file analyzed).
     *
     * @constructor
     */
    constructor (parameters) {
        this.target = parameters && parameters.target ? parameters.target : '';

        this.errors = [];

        Object.seal(this);
    }

    /**
     * Adds an error to the analysis. 
     *
     * @param {AnalysisError} error - An error in the target.
     */
    addError (error) {
        assert(error, 'An error must be provided');
        assert(typeof error.line === 'number', 'A line number must be provided');
        assert(error.message, 'An error message must be provided');
        
        this.errors.push(error);
    }

    /**
     * Gets whether the target passed the analysis (i.e. there are no errors).
     *
     * @returns {Boolean} - Whether the target passed analysis.
     */
    get pass () {
        return this.errors.length === 0;
    }
}

module.exports = Analysis;
