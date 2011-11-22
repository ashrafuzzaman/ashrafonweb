function initialize() {
    if ( $.browser.msie ) {
        // extra tag is added in the body to warn if it is IE :P
        // so that we can custom our css accordingly
        $("body").addClass("ie");
        if ( $.browser.version == "6.0" ) {
            $("body").addClass("ie6");
        }
    }
    loadRecentBlogFeed();
}

function loadRecentBlogFeed() {
    if(!$("#recent_blog")) return;
    var numberOfFeed = 3;
    var technicalBlogFeed = "http://jitu-blog.blogspot.com/feeds/posts/default?orderby=published&alt=json-in-script&max-results=" + numberOfFeed + "&callback=?";
    var distBlogFeed = "http://distash.blogspot.com/feeds/posts/default?orderby=published&alt=json-in-script&max-results=" + numberOfFeed + "&callback=?";
    loadBlogFeed("Recent Blogs", numberOfFeed, technicalBlogFeed, $("#recent_blog"));
    loadBlogFeed("Bogging on Distribited", numberOfFeed, distBlogFeed, $("#recent_dist_blog"));
}

function loadBlogFeed(title, numberOfFeed, jsonFeed, loadInContent) {
    $.getJSON(jsonFeed,
        function(data) {
            var recent_blog_contents = '';
            $.each(data.feed.entry, function(i, postentry) {
                var postTitle = postentry.title.$t;
                var postLink = '';

                $.each(postentry.link, function(i, link) {
                    postLink = link.href;
                    return;
                });
                var postTags = new Array();
                if(postentry.category) {
                    $.each(postentry.category, function(i, category) {
                        postTags.push(category.term);
                    });
                }
                postTags = postTags.length > 0 ? postTags.join(", ") : "nothing specific";
                var seperator = '';
                if(numberOfFeed != i+1) seperator = "<hr size='1'/>";
                recent_blog_contents += "<a href=\"" + postLink +"\" target=\"_blank\" speech=\"It is about " + postTags + "\">" + postTitle + "</a>" + seperator;
            });
            loadInContent.html("<h3>" + title + "</h3>" + recent_blog_contents);
        });    
}