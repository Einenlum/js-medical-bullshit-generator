;(function(exports){
    'use strict';

    var bullshitDictionary = {};

    bullshitDictionary.getPrefixes = function() {
        return [
            'ostéo',
            'kinésio',
            'naturo',
            'géo',
            'nutri',
            'astro',
            'grapho',
            'homéo',
            'chiro',
            'irido',
            'éco',
            'éthio',
            'réflexo',
            'psycho',
            'biokinergo',
            'aroma',
            'hypno',
            'énergo',
            'fascia',
            'fascio',
            'synergo',
        ];
    };

    bullshitDictionary.getSuffixes = function() {
        return [
            'practeur',
            'pathe',
            'biologue',
            'puncteur',
            'logue',
            'praxologue',
            'thérapeute',
        ];
    };

    bullshitDictionary.getDomains = function() {
        return [
            'tantrique',
            'quantique',
            'cellulaire',
            'biocellulaire',
            'informationnel',
            'dynamique',
            'biodynamique',
        ];
    };

    bullshitDictionary.getExcludedWords = function()
    {
        return [
            'psychologue',
            'géologue',
            'psychothérapeute',
        ];
    }

    exports.bullshitDictionary = bullshitDictionary;
})(window);
