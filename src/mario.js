var Mario = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('mario');
  this.gameOn = true;
};

Mario.prototype = Object.create(makeDancer.prototype);

Mario.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // use step recursive calling ability to identify mario's location
  var mario = this.$node.position();
  var boxPosition2 = $('#box2').position();
  var boxPosition3 = $('#box3').position();
  var boxPosition4 = $('#box4').position();
  var health = $($('.mario')[0]).data('health');

    // do something
  if (mario.top < boxPosition2.top + 25 && mario.top > boxPosition2.top - 25 && mario.left < boxPosition2.left + 25 && mario.left > boxPosition2.left - 40) {
    health = health + 5;
    $('#box2').animate({top: '-=50'});
    $('#coin').toggle();
    $('#coin').animate({top: '-=80'});
    $('#box2').animate({top: '+=50'});
    $('#coin').animate({top: '+=80'});
    setTimeout(function() {
      $('#coin').toggle();
    }, 1000);
  }

  if (mario.top < boxPosition3.top + 25 && mario.top > boxPosition3.top - 25 && mario.left < boxPosition3.left + 25 && mario.left > boxPosition3.left - 40) {
    health = health + 5;
    $('#box3').animate({top: '-=50'});
    $('#coin2').toggle();
    $('#coin2').animate({top: '-=80'});
    $('#box3').animate({top: '+=50'});
    $('#coin2').animate({top: '+=80'});
    setTimeout(function() {
      $('#coin2').toggle();
    }, 1000);
  }

  if (mario.top < boxPosition4.top + 25 && mario.top > boxPosition4.top - 25 && mario.left < boxPosition4.left + 25 && mario.left > boxPosition4.left - 40) {
    health = health + 5;
    $('#box4').animate({top: '-=50'});
    $('#coin3').toggle();
    $('#coin3').animate({top: '-=80'});
    $('#box4').animate({top: '+=50'});
    $('#coin3').animate({top: '+=80'});
    setTimeout(function() {
      $('#coin3').toggle();
    }, 1000);
  }

  if ( this.$node.data('health') < 0 && this.gameOn) {
    $('body').css({'background-image': 'url(photos/gameover.jpg)'});
    $('#box1').toggle();
    $('#box2').toggle();
    $('#box3').toggle();
    $('#box4').toggle();
    $('.mario').toggle();
    this.gameOn = false;
  }
  $($('.mario')[0]).data('health', health);
  $('.healthbar').html(health);
};

Mario.prototype.constructor = Mario;
