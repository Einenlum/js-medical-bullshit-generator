;(function(exports, Dictionary, Faker){
    'use strict';

    var bullshitGenerator = {};

    Faker.locale = 'fr';

    bullshitGenerator.generateName = function() {
        return Faker.name.findName();
    };

    bullshitGenerator.isExcludedWord = function(word) {
        var excludedWords = Dictionary.getExcludedWords();

        return -1 !== $.inArray(word, excludedWords);
    };

    bullshitGenerator.generateTitle = function(domainProbability) {
        var self = this;

        domainProbability = domainProbability || 0.3;

        var prefixes = Dictionary.getPrefixes();
        var suffixes = Dictionary.getSuffixes();

        var prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        var suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

        var title = prefix + suffix;

        if (self.isExcludedWord(title)) {
            return self.generateTitle();
        }

        var domain = self.getDomain(domainProbability);
        if (null !== domain) {
            title = title + ' ' + domain;
        }

        return title.charAt(0).toUpperCase() + title.slice(1);
    };

    bullshitGenerator.getDomain = function(probability) {
        var random = Math.random();

        if (random > probability) {
            return null;
        }

        var domains = Dictionary.getDomains();

        return domains[Math.floor(Math.random() * domains.length)];
    };

    exports.bullshitGenerator = bullshitGenerator;
})(window, bullshitDictionary, faker);
