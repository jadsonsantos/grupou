$(document).ready(function() {
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            // minutes = minutes < 10 ? "0" + minutes : minutes;
            // seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.text(seconds);
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    var display = $('.countdown');
    startTimer(30, display);

    $('.modal-question .option').on('click', function() {
        var btn = $('.submit-answer').not('.finished-question-buttton');

        $(this).addClass('selected');
        $('#modal').addClass('finished-question');

        btn.text('Concluir').addClass('finished-question-buttton');
    })

    $('.modal-question').on('click', '.finished-question-buttton', function() {
        $('#modal-overlay').fadeOut();
    })
})