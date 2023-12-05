$(document).ready(function() {
    $(".step").click(function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");

        // Update progress bar width
        var stepIndex = $(this).index(".step") + 1;
        var progressBarWidth = (stepIndex - 1) * 25 + "%";
        $("#line-progress").css("width", progressBarWidth);

        // Show corresponding content section
        $(".section-content").removeClass("active");
        $(".section-content:eq(" + (stepIndex - 1) + ")").addClass("active");
    });
});