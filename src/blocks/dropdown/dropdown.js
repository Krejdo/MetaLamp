$(function() {
     //Mouse click on setting button and ul list
    $(".dropdown__list, .dropdown__button").mouseup(function() {
        return false;
    });

    //Expandable checkbox list
    $(document).ready(function() {
        $(".dropdown__button").click(function() {
            $(this).children(".icon-expand_more").toggleClass("rtoate180");
            $(this).next(".dropdown__list").stop().slideToggle(500);
        });
    });
});