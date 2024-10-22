window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
    // Toggle function for elements with common classes
    $(".toggle_button").click(function () {
        // Find the nearest content block with the class 'toggle_content' related to the clicked button
        const content = $(this).closest('article').find('.toggle_content');

        // Toggle the visibility of the content block
        content.slideToggle('slow');

        // Toggle the 'is-active' class on the button for visual feedback (optional)
        $(this).toggleClass('is-active');
    });
});