document.addEventListener('DOMContentLoaded', function(){
        Typed.new("#typed", {
            strings: [" a web developer.", "a student.", "a nerd.", 
            " Christian Trinidad"],
            typeSpeed: 40,
            startDelay:500,
            backDelay: 500, //how long before deleting text
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
        var resetElement = document.querySelector('.reset');
        if(resetElement) {
            resetElement.addEventListener('click', function() {
                document.getElementById('typed')._typed.reset();
            });
        }
    });
    function newTyped(){ /* A new typed object */ }
    function foo(){ 
       $('.hideContent').delay(3800).addClass('reveal');
    
     }