var Bowser = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bowser bowserGoRight');
  this.direction = 'left';
};

Bowser.prototype = Object.create(makeDancer.prototype);

Bowser.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var bowser = this.$node;
  // adjust bowser's position to go right and face right
  var bowserPosition = bowser.position();
  if (this.direction === 'left') {
    bowser.css({left: '-=5px'});
  } else {
    bowser.css({left: '+=5px'});
  }

  // adjust bowser's position to go left and face right at end of screen
  if ( bowserPosition.left < 0 ) {
    bowser.css({transform: 'scaleX(-1)'});
    this.direction = 'right';

  } else if (bowserPosition.left > 1600) {
    bowser.css({transform: 'scaleX(1)'});
    this.direction = 'left';
  }
  // if bowswer touches mario, mario's life decreases
  if ( $('.mario').length > 0 ) {
    var marioPosition = $($('.mario')[0]).position();
  // if mario's left position falls between bowsers left position by 15pixels in either directions, 
    if ( marioPosition.left < bowserPosition.left + 15 && marioPosition.left > bowserPosition.left - 15 && marioPosition.top > bowserPosition.top ) {
      var health = $($('.mario')[0]).data('health');
      health = health - 1;
      $($('.mario')[0]).data('health', health);
      // decrease html health number
      $('.healthbar').html(health);

    // $($('.mario')[0]).data('health', health);
    // console.log($(('.mario')[0]).data('health'));
    }
  }
    
};

Bowser.prototype.constructor = Bowser;
