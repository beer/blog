jQuery(function() {
    var murmur = jQuery('.murmur-text').text();
    var mlink = jQuery('<a>');
    mlink.attr('href', 'http://blog.beerlee88.com/blog/murmur').text(murmur);
    jQuery('.murmur-text').empty().append(mlink);
});
