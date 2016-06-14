var Bowser = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bowser bowserGoRight');
  this.direction = 'left';
};

Bowser.prototype = Object.create(makeDancer.prototype);

Bowser.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var bowser = this.$node;
  
  var bowserPosition = bowser.position();
  if (this.direction === 'left') {
    bowser.css({left: '-=5px'});
  } else {
    bowser.css({left: '+=5px'});
  }



  if ( bowserPosition.left < 0 ) {
    bowser.css({transform: 'scaleX(-1)'});
    this.direction = 'right';

  } else if (bowserPosition.left > 800) {
    bowser.css({transform: 'scaleX(1)'});
    this.direction = 'left';
  }
  // if ($('.mario').length > 0) {
  //   mario = $($('.mario')[0]).position();
  //   if (Bowser.left < mario.left + 60 && Bowser.left > mario.left - 60) {
  //     mario.toggle();
  //   } 
  // }
};

Bowser.prototype.constructor = Bowser;
