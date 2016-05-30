'use strict';
var assert = require('assert'),
    os = require('os');

/** 
 * Data, from a file source, to be passed through an analyzer for analysis.
 *
 * @property {FileSourceDataSampleIterator} Symbol.iterator - Iterator to traverse samples of text for analysis.
 * @property {Number} [lineStart=1] - The line on which this source data starts within the containing file.
 * @property {String} text - The text contents of the file to analyze.
 */
class FileSourceData {
    /* jscs:disable disallowAnonymousFunctions */

    /**
     * Create file source data.
     *
     * @param {Object} parameters - Named parameter values to use in construction.
     * @param {Number} parameters.lineStart - The line on which this source data starts within its file.
     * @param {String} parameters.text - The text contents of the file to analyze.
     */
    constructor (parameters) {
        assert(parameters, 'File source data parameters are required');
        assert(parameters.text, 'File source data text is required');

        this.lineStart = parameters.lineStart || 1;
        this.text = parameters.text;

        this[Symbol.iterator] = function iterator () {
            return new FileSourceDataSampleIterator(this);
        };

        Object.seal(this);
    }
}

/**
 * Iterator which produces data samples from a file source.
 */
class FileSourceDataSampleIterator {
    /* jscs:disable disallowAnonymousFunctions */

    /*
     * Create a file source data sample iterator.
     * @param {Object} data - File source data.
     * @param {String} data.text - Source text from which to draw samples. 
     *
     * @constructor
     */
    constructor (data) {
        this.data = data;
        this.lines  = this.data.text.split(os.EOL);

        this.current = 0;
    }

    /**
     * An iteration of file source data.
     *
     * @typedef {Object} FileSourceDataSampleIteration
     * @property {Boolean} done - False if there are more samples; otherwise true.
     * @property {Object} value - File source data sample.
     * @property {Number} value.line - The line of the current sample.
     * @property {String} value.text - The text of the current sample.
     */

    /**
     * Returns the next sample from the file source data.
     *
     * @returns {FileSourceDataSampleIteration} - The next sample from the file source data.
     */
    next () {
        var result = {
            done: this.current >= this.lines.length,
            value: {
                line: this.current + this.data.lineStart,
                text: this.lines[this.current]
            }
        };

        this.current++;

        return result;
    }
}

module.exports = FileSourceData;
