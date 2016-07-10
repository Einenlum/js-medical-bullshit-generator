;(function(Generator, exports){
    'use strict';


    var reloadName = function() {
        var $nameContainer = $('[data-role="name"]')
        var name  = Generator.generateName();

        $nameContainer.fadeOut(function() {
            $nameContainer.text(name).fadeIn();
        });
    };

    var reloadTitle = function() {
        var $titleContainer = $('[data-role="title"]')
        var title = Generator.generateTitle();

        $titleContainer.fadeOut(function() {
            $titleContainer.text(title).fadeIn();
        });
    };

    $(function() {
        reloadName();
        reloadTitle();

        $('[data-type="reload"]').click(function() {
            reloadName();
            reloadTitle();
        });
    });

})(window.bullshitGenerator, jQuery);
