var NUMBER_OF_FEED_TO_SHOW = 3;

function initialize() {
    loadRecentBlogFeed();
}

function loadRecentBlogFeed() {
    if(!$("#recent_blog")) return;
    loadBlogFeed("Recent Blogs", "jitu-blog", $("#recent_blog"));
    loadBlogFeed("Bogging on Distribited", "distash", $("#recent_dist_blog"));
}

function loadBlogFeed(title, blogSpotName, loadInContent) {
    var jsonFeed = "http://" + blogSpotName + ".blogspot.com/feeds/posts/default?orderby=published&alt=json-in-script&max-results=" + NUMBER_OF_FEED_TO_SHOW + "&callback=?";
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
                if(NUMBER_OF_FEED_TO_SHOW != i+1) seperator = "<hr size='1'/>";
                recent_blog_contents += "<a href=\"" + postLink +"\" target=\"_blank\" speech=\"It is about " + postTags + "\">" + postTitle + "</a>" + seperator;
            });
            loadInContent.html("<h3>" + title + "</h3>" + recent_blog_contents);
        });    
}