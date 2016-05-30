# Code-Copter SDK

[![Build Status](https://travis-ci.org/jtheriault/code-copter-sdk.svg)](https://travis-ci.org/jtheriault/code-copter-sdk)

## Summary
Classes to help in the development of plugins for code-copter.

## Reference
## Classes

<dl>
<dt><a href="#Analysis">Analysis</a></dt>
<dd><p>What analyzers found for a source data target.</p>
</dd>
<dt><a href="#Analyzer">Analyzer</a></dt>
<dd><p>Provides analysis of source data.</p>
</dd>
<dt><a href="#FileSourceData">FileSourceData</a></dt>
<dd><p>Data, from a file source, to be passed through an analyzer for analysis.</p>
</dd>
<dt><a href="#FileSourceDataSampleIterator">FileSourceDataSampleIterator</a></dt>
<dd><p>Iterator which produces data samples from a file source.</p>
</dd>
<dt><a href="#Report">Report</a></dt>
<dd><p>A report of analyses.</p>
</dd>
<dt><a href="#Reporter">Reporter</a></dt>
<dd><p>Disseminates a Report.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AnalysisError">AnalysisError</a> : <code>Object</code></dt>
<dd><p>An error encountered during analysis.</p>
</dd>
<dt><a href="#DefaultAnalyzerConfigure">DefaultAnalyzerConfigure</a> : <code>function</code></dt>
<dd><p>Default configure implementation for a new Analyzer which allows disabling
the analyzer by passing a boolean false as its entire configuration.</p>
</dd>
<dt><a href="#FileSourceDataSampleIteration">FileSourceDataSampleIteration</a> : <code>Object</code></dt>
<dd><p>An iteration of file source data.</p>
</dd>
</dl>

<a name="Analysis"></a>

## Analysis
What analyzers found for a source data target.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| errors | <code>[Array.&lt;AnalysisError&gt;](#AnalysisError)</code> | The errors found. |
| target | <code>String</code> | The source that was analyzed. |


* [Analysis](#Analysis)
    * [new Analysis(parameters)](#new_Analysis_new)
    * [.pass](#Analysis+pass) ⇒ <code>Boolean</code>
    * [.addError(error)](#Analysis+addError)

<a name="new_Analysis_new"></a>

### new Analysis(parameters)
Create an analysis.


| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | Named parameter values to use in construction. |
| parameters.target | <code>String</code> | The target of this analysis (e.g. the file analyzed). |

<a name="Analysis+pass"></a>

### analysis.pass ⇒ <code>Boolean</code>
Gets whether the target passed the analysis (i.e. there are no errors).

**Kind**: instance property of <code>[Analysis](#Analysis)</code>  
**Returns**: <code>Boolean</code> - - Whether the target passed analysis.  
<a name="Analysis+addError"></a>

### analysis.addError(error)
Adds an error to the analysis.

**Kind**: instance method of <code>[Analysis](#Analysis)</code>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>[AnalysisError](#AnalysisError)</code> | An error in the target. |

<a name="Analyzer"></a>

## Analyzer
Provides analysis of source data.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| analyze | <code>function</code> | Accepts source data and returns an Analysis object. |
| configure | <code>function</code> | Allows configuration of the analyzer. |
| name | <code>String</code> | The name of the analyzer. |

<a name="new_Analyzer_new"></a>

### new Analyzer(parameters)
Create an analyzer.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>Object</code> |  | Named parameter values to use in construction. |
| parameters.analyze | <code>function</code> |  | A function which returns an Analysis object for given source data. |
| [parameters.configure] | <code>function</code> | <code>DefaultAnalyzerConfigure</code> | A function which accepts user-provided configuration to influence the analyzer. |
| parameters.name | <code>String</code> |  | The name of the analyzer |

<a name="FileSourceData"></a>

## FileSourceData
Data, from a file source, to be passed through an analyzer for analysis.

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Symbol.iterator | <code>[FileSourceDataSampleIterator](#FileSourceDataSampleIterator)</code> |  | Iterator to traverse samples of text for analysis. |
| lineStart | <code>Number</code> | <code>1</code> | The line on which this source data starts within the containing file. |
| text | <code>String</code> |  | The text contents of the file to analyze. |

<a name="new_FileSourceData_new"></a>

### new FileSourceData(parameters)
Create file source data.


| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | Named parameter values to use in construction. |
| parameters.lineStart | <code>Number</code> | The line on which this source data starts within its file. |
| parameters.text | <code>String</code> | The text contents of the file to analyze. |

<a name="FileSourceDataSampleIterator"></a>

## FileSourceDataSampleIterator
Iterator which produces data samples from a file source.

**Kind**: global class  
<a name="FileSourceDataSampleIterator+next"></a>

### fileSourceDataSampleIterator.next() ⇒ <code>[FileSourceDataSampleIteration](#FileSourceDataSampleIteration)</code>
Returns the next sample from the file source data.

**Kind**: instance method of <code>[FileSourceDataSampleIterator](#FileSourceDataSampleIterator)</code>  
**Returns**: <code>[FileSourceDataSampleIteration](#FileSourceDataSampleIteration)</code> - - The next sample from the file source data.  
<a name="Report"></a>

## Report
A report of analyses.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| analyses | <code>[Array.&lt;Analysis&gt;](#Analysis)</code> | The analyses of all processed source data. |
| pass | <code>Boolean</code> | Whether all analyses passed. |


* [Report](#Report)
    * [new Report()](#new_Report_new)
    * [.addAnalysis(analysis)](#Report+addAnalysis)

<a name="new_Report_new"></a>

### new Report()
Create a Report.

<a name="Report+addAnalysis"></a>

### report.addAnalysis(analysis)
Add an analysis to the report.

**Kind**: instance method of <code>[Report](#Report)</code>  

| Param | Type | Description |
| --- | --- | --- |
| analysis | <code>[Analysis](#Analysis)</code> | An analysis to add to the report. |

<a name="Reporter"></a>

## Reporter
Disseminates a Report.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| report | <code>function</code> | Accepts a Report and disseminates it in an implementation-specific way. |

<a name="new_Reporter_new"></a>

### new Reporter(parameters)
Create a Reporter.


| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | Named parameter values to use in construction. |
| parameters.report | <code>function</code> | Accepts a Report and disseminates it in an implementation-specific way. |

<a name="AnalysisError"></a>

## AnalysisError : <code>Object</code>
An error encountered during analysis.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| line | <code>Number</code> | The line number on which the error was found. |
| message | <code>String</code> | A description of the error found. |

<a name="DefaultAnalyzerConfigure"></a>

## DefaultAnalyzerConfigure : <code>function</code>
Default configure implementation for a new Analyzer which allows disabling
the analyzer by passing a boolean false as its entire configuration.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | False to disable the analyzer; otherwise it is enabled. |

<a name="FileSourceDataSampleIteration"></a>

## FileSourceDataSampleIteration : <code>Object</code>
An iteration of file source data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| done | <code>Boolean</code> | False if there are more samples; otherwise true. |
| value | <code>Object</code> | File source data sample. |
| value.line | <code>Number</code> | The line of the current sample. |
| value.text | <code>String</code> | The text of the current sample. |

