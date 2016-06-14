var FatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('fatDancer');
};

FatDancer.prototype = Object.create(makeDancer.prototype);

FatDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};

FatDancer.prototype.constructor = FatDancer;
