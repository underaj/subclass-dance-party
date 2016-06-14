var Yoshi = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('yoshi');


};

Yoshi.prototype = Object.create(makeDancer.prototype);

Yoshi.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var mario;
  var yoshi = this.$node.position();
  if ($('.mario').length > 0) {
    mario = $($('.mario')[0]).position();
    if (yoshi.left < mario.left + 100 && yoshi.left > mario.left - 100) {
      this.$node.toggle();
      $('.mario').css({ 'background-image': 'url(photos/marioyoshi.gif)'});
    } 
  }
};

Yoshi.prototype.constructor = Yoshi;
