var HiphopDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  console.log(this.top, this.left);
  this.$node = $('<div class="dancer flipper"></div>');
  
  this.$node.css({'width': '100px', 'height': '100px', 'display': 'none', 'border': 'none', 'background-image': 'url("img/biggerbreakdancer.png")', 'background-repeat': 'no-repeat', 'background-size': '100% 100%'});
  

};

HiphopDancer.prototype = Object.create(Dancer.prototype);
HiphopDancer.prototype.constructor = HiphopDancer;

HiphopDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  //this needs to be changed
  Dancer.prototype.step.call(this);
  this.setPosition();
  this.flip();
  this.$node.css({'display': 'block'});
  console.log(this.$node);
};

HiphopDancer.prototype.flip = function() {
  var node = this.$node;
  $('.flipper').on('mouseover', function() {
    node.css({'transform': 'rotate(180deg)'});
  });
  $('.flipper').on('mouseout', function() {
    node.css({'transform': 'rotate(0deg)'});
  });
};

HiphopDancer.prototype.lineUp = function() {
  this.top = $('body').height() * 0.95;
};