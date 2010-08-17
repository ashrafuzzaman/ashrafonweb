var speechFadeTimeout = 400;
var speechStayDelay = 2000;
var speechMoveDistance = 50;

function activateSpeech(rootElement) {
    interceptForSpeech(rootElement);
}

function interceptForSpeech(rootElement) {
    $("*[speech]", rootElement).hover(
        function() {
            say($(this).attr("speech"));
        },
        function(f) {
            removeSpeech();
        }
        );
}

function resetPositionOfSpeech() {
    var right = $(document).width() - $("#profile_picture").offset().left + speechMoveDistance;
    var top = $("#profile_picture").offset().top + $("#profile_picture").height()/4;
    $(".bubble").css({
        right: right,
        top: top
    });
    $(".arrow").css({
        right: right,
        top: top
    });
}

function say(speech) {
    removeSpeech();
    bubble = $('.bubble_template').clone().removeClass("bubble_template");
    $('#header').append(bubble);
    $(".speech_content", bubble).html(speech);
    resetPositionOfSpeech();
    bubble.animate({
        right: '-=' + speechMoveDistance,
        opacity: 'show'
    }, speechFadeTimeout).animate({
        opacity: .95
    }).delay(speechStayDelay).speechRemoveAnimate();
}

function removeSpeech() {
    $('#header .bubble').stop().speechRemoveAnimate();
}

jQuery.fn.speechRemoveAnimate = function() {
    this.animate({
        right: '+=' + speechMoveDistance,
        opacity: 0
    }, speechFadeTimeout, function() {
        $(this).remove();
    });
}