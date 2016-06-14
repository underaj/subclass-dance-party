var Yoshi = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('yoshi');


};

Yoshi.prototype = Object.create(makeDancer.prototype);

Yoshi.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // this.$node.toggle();
};

Yoshi.prototype.constructor = Yoshi;
