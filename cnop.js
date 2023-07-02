$(function() {
    $(".titleSpoiler").each(function(g, a) {
        function e(c) {
            c.preventDefault();
            c = +d.is(":hidden");
            d.slideToggle(200);
            a.text(b[c])
        }
        a = $(a);
        var b = $.trim(a.text()).split("|");
        b.push(b[0]);
        var d = a.next(".bodySpoiler"),
            f = $(".collapseSpoiler", d);
        a.text(b[0]);
        a.click(e);
        f.click(e)
    })
  });