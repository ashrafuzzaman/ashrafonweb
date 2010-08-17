jQuery.fn.createRoundedCorner = function() {
    this.wrapInner('<td class="table_content"><div class="content"></div></td>').prepend('<td class="left"/>').append('<td class="right"/>').wrapInner('<tr></tr>').prepend('<tr><td class="top_left"/><td class="top"/><td class="top_right"/></tr>').append('<tr><td class="bottom_left"/><td class="bottom"/><td class="bottom_right"/></tr>').wrapInner('<table class="rounded_corner" border="0" cellpadding="0" cellspacing="0"></table>');
}
