var Pikachu = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('mario');
};

Pikachu.prototype = Object.create(makeDancer.prototype);

Pikachu.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // this.$node.toggle();
};

Pikachu.prototype.constructor = Mario;
