var FatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = this.step;
  // this.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   // console.log(oldStep);
  //   debugger;
  //   oldStep.call(this);
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   this.$node.toggle();
  // };

  this.$node.addClass('fatDancer');
};

FatDancer.prototype = Object.create(makeDancer.prototype);

FatDancer.prototype.step = function(timeBetweenSteps) {
  
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  
  this.$node.toggle();

};