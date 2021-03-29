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

//=================================================================================//

$(function() {
    $('.num-in span').click(function () {
        var $input = $(this).parents('.num-block').find('input.in-num');
      if($(this).hasClass('minus')) {
        var count = parseFloat($input.val()) - 1;
        count = count < 0 ? 0 : count;
        if (count < 1) {
          $(this).addClass('dis');
        }
        else {
          $(this).removeClass('dis');
        }
        $input.val(count);
      }
      else {
        var count = parseFloat($input.val()) + 1
        $input.val(count);
        if (count > 0) {
          $(this).parents('.num-block').find(('.minus')).removeClass('dis');
        }
      }


      var bed = parseFloat($input.val());
      const bedroom = ["спальня", "спальни", "спален"]

      if (bed == 1) {
        $('#values').text( bed + " " + bedroom[0]);
      }
      else if (bed >= 2 && bed <= 4) {
        $('#values').text( bed + " " + bedroom[1]);
      }
      else if (bed >= 5) {
        $('#values').text( bed + " " + bedroom[2]);
      }
      

      // $input.change();
      // return false;
    });
    
  });