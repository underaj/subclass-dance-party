var Mario = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('mario');


};

Mario.prototype = Object.create(makeDancer.prototype);

Mario.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // use step recursive calling ability to identify mario's location
  var mario = this.$node.position();
  var boxPosition = $('#box2').position();
    // do something
  if (mario.top < boxPosition.top + 25 && mario.top > boxPosition.top - 25 && mario.left < boxPosition.left + 25 && mario.left > boxPosition.left - 40) {
    $('#box2').animate({top: '-=50'});
    $('#coin').toggle();
    $('#coin').animate({top: '-=80'});
    $('#box2').animate({top: '+=50'});
    $('#coin').animate({top: '+=80'});
    setTimeout(function() {
      $('#coin').toggle();
    }, 1000);
  }
};

Mario.prototype.constructor = Mario;
