$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    // var dancer = new dancerMakerFunction(
    //   $('body').height() * Math.random(),
    //   $('body').width() * Math.random(),
    //   Math.random() * 1000
    // );
    // $('body').append(dancer.$node);
    var character;
    if ( dancerMakerFunctionName === 'Bowser') {
      character = new dancerMakerFunction('75%', '50%', 50);
    } else {
      character = new dancerMakerFunction('79%', '0%', 500);
      character.$node.data('health', 30);
    }

    $('body').append(character.$node);
  });

// need to add keyboard controls
  
  $(document.body).on('keydown', function(e) {
    if (e.keyCode === 37) {
      //left
      // $( '.mario' ).animate({ 'left': '-=20px' }, 'fast' );
      $('.mario').css({left: '-=5', transform: 'scaleX(-1)'});
    }
    if (e.keyCode === 39) {
      //right
      // $( '.mario' ).animate({ 'left': '+=20px' }, 'fast' );
      $('.mario').css({left: '+=5', transform: 'scaleX(1)'});
    }

  });

  $(document.body).on('keyup', function(e) {
    if ( e.keyCode === 32 ) {
      $('.mario').addClass('marioJump');
      setTimeout(function() {
        $('.mario').removeClass('marioJump');
      }, 1000);
    }
  });

 
});

