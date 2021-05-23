$(function() {
    $(".dropdown-date__range_from").datepicker({
      inline: true,  //Показывает каленьдарь постоянно
      minDate: new Date(),
      range: true,
      offset: 10,
      multipleDatesSeparator: "-",
      classes: "dropdown-date",
      clearButton: true,
      prevHtml: `<i class="icon-arrow_back"></i>`,
      nextHtml: `<i class="icon-arrow_forward"></i>`,
      todayButton: true,
      navTitles: {
        days: "<h2>MM yyyy</h2>",
      },
      language: {
        today: "Применить",
      },
      onRenderCell: function(date, cellType) {
        if (cellType == "day") {
          return {
            html: `${date.getDate()}<div class="bg-selected"><span></span></div>`,
          };
        }
      },
      onSelect: function(fd, d, picker) {
        $(".dropdown-date__range_from").val(fd.split("-")[0]);
        $(".dropdown-date__range_to").val(fd.split("-")[1]);
      },
      
    });
    $(".datepicker")
      .find(".datepicker--button")
      .click(function() {
        if (this.dataset.action === "today") {
          $(this)
            .parents(".dropdown-date")
            .removeClass("active");
        }
      });
    $(".dropdown-date__range_to").click(function() {
      $(this)
        .parents(".dropdown-date")
        .find(".dropdown-date__range_from")
        .data("datepicker")
        .show();
    });
  });