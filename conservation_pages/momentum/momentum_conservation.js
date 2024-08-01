// var curColor = "rgb(246, 237, 253)";
// used to animate steady state
curColor = $(function() {
    $('.equation_assumptions').click(function(e) {
        var reference_sys_list = $(this).parent().nextAll().eq(1).children();

        // find which reference system is currently active
        for (let i = 0; i < reference_sys_list.length; i++) {
            if (reference_sys_list.eq(i).css("display") === "inline") {
                var ref_sys = reference_sys_list.eq(i);
            }
        }

        var zero_term = ref_sys.children('.equation_line').children('.equation').children('.equation_left_replacement');
        var dropped_term = zero_term.prev();
        // Assumption box clicked
        if ($(this).css("color") === "rgb(0, 0, 0)"){
            var newColor = "darkviolet";
            $(this).css("background-color", newColor);
            $(this).css("color", "white");
            var frameSize = 40;

            // Fade out all terms before zero term
            dropped_term.fadeOut('fast');
            console.log(dropped_term.eq(1))

            for (let i = 0; i < dropped_term.length; i++) {
                var cur_dropped_term = dropped_term.eq(i);
                var offset = cur_dropped_term.offset();
                var width = cur_dropped_term.outerWidth();
                var height = cur_dropped_term.outerHeight();

                var centerX = offset.left + width / 2;
                var centerY = offset.top + height / 2;

                var posX = centerX - frameSize / 2;
                var posY = centerY - frameSize / 2;

                var puff_ID = '#p' + (i + 1);

                $(puff_ID).css({
                    left: posX + 'px',
                    top: posY + 'px'
                }).show();
                animatePoof(puff_ID);
            }   
            // $(this).text("0");
            // $(this).fadeIn('slow');
            setTimeout(() => {
                zero_term.fadeIn('slow');
            }, 200);
        } else { // Assumption box unclicked
            var newColor = "rgb(246, 237, 253)";
            $(this).css("background-color", newColor);
            $(this).css("color", "black");
            var frameSize = 40;

            zero_term.fadeOut('fast');
            // $(this).text("0");
            // $(this).fadeIn('slow');
            setTimeout(() => {
                // Fade in all terms before zero term
                dropped_term.fadeIn('slow');
            }, 200);
        }
        return newColor;
    });
});

// Original puff code example from https://jsfiddle.net/Y7Ek4/22/
// Some modifications made

function animatePoof(puff_ID) {
    var bgTop = 0,
        frame = 0,
        frames = 6,
        frameSize = 40,
        frameDelay = 80,
        puff = $(puff_ID);
    var animate = function(){
        if(frame < frames){
            puff.css({
                backgroundPosition: "0 "+bgTop+"px"
            });
            bgTop = bgTop - frameSize;
            frame++;
            setTimeout(animate, frameDelay);
        }
    };
    
    animate();
    setTimeout("$('" + puff_ID + "').hide()", frames * frameDelay);
}