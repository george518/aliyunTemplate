$(document).ready(function () {
    $('.expandable-header').click(function (e) {
        e.preventDefault();

        var $header = $(this);
        var $content = $header.nextAll('.expandable-content');

        if ($content.is(':visible')) {
            $content.slideUp('fast');
        } else {
            $content.slideDown('fast');
        }
    });
});