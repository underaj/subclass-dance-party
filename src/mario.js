var Mario = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('mario');


};

Mario.prototype = Object.create(makeDancer.prototype);

Mario.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // this.$node.toggle();
};

Mario.prototype.constructor = Mario;
