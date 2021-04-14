$(function() {
    // on click on  setting button
    $(".dropdown__button").click(function() {
        var val = $(this).attr('id');
        if (val == 1) {
            $(".dropdown__list").hide();
            $(this).attr('id', '0');
        } else {
            $(".dropdown__list").show();
            $(this).attr('id', '1');
        }

    });

    //Mouse click on setting button and ul list
    $(".dropdown__list, .dropdown__button").mouseup(function() {
        return false;
    });

    //Document Click
    $(document).mouseup(function() {
        $(".dropdown__list").hide();
        $(".dropdown__button").attr('id', '0');
    });
});