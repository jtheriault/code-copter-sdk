'use strict';
var assert = require('assert');

/**
  * Provides analysis of source data.
  *
  * @property {Function} analyze - Accepts source data and returns an Analysis object.
  * @property {Function} configure - Allows configuration of the analyzer.
  * @property {String} name - The name of the analyzer.
  */
class Analyzer {
    /* jscs:disable disallowAnonymousFunctions */

    /**
     * Create an analyzer.
     *
     * @param {Object} parameters - Named parameter values to use in construction.
     * @param {Function} parameters.analyze - A function which returns an Analysis object for given source data.
     * @param {Function} [parameters.configure=DefaultAnalyzerConfigure] - A function which accepts user-provided configuration to influence the analyzer.
     * @param {String} parameters.name - The name of the analyzer
     *
     * @constructor
     */
    constructor (parameters) {
        assert(parameters, 'A value for parameters must be provided');
        assert(parameters.analyze, 'An analyze function must be provided');
        assert(parameters.name, 'A name must be provided');

        this.analyze = parameters.analyze;
        this.configure = parameters.configure || configure;
        this.name = parameters.name;

        Object.seal(this);
    }
}

/**
 * Default configure implementation for a new Analyzer which allows disabling
 * the analyzer by passing a boolean false as its entire configuration.
 *
 * @typedef {Function} DefaultAnalyzerConfigure
 * @param {Boolean} enabled - False to disable the analyzer; otherwise it is enabled.
 */
function configure (enabled) {
    assert(enabled !== false, 'Analyzer must be configured to be enabled');
}

module.exports = Analyzer;
