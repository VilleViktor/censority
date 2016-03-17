/**
 * Created by viktorlarsson on 2016-03-11.
 * Gather all the languages
 */

var language = {};
language.swedish = require('./swedish').swedish;
language.english = require('./english').english;
language.spanish = require('./spanish').spanish;

exports.language = language;
