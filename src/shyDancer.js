var ShyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.originalsize = 90;
  this.size = 90;
  this.$node = $('<div class="dancer"></div>');
  this.$node.css({'width': '90px', 'height': '90px', 'border': 'none', 'display': 'none', 'background': 'linear-gradient(black, white)'});
  
  
  

};

ShyDancer.prototype = Object.create(FrootLoop.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  //this needs to be changed
  Dancer.prototype.step.call(this);
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //this needs to be changed
  this.randomMove();
  this.setPosition();
  this.$node.css({'display': 'block'});
  var numberNeighbors = this.findNearestNeighbors();
  this.changeSize(numberNeighbors);
  
};

ShyDancer.prototype.lineUp = function() {
  this.left = $('body').width() * 0.95;
};

ShyDancer.prototype.findNearestNeighbors = function() {
  var left = this.left;
  var top = this.top;
  var closeDancers = window.dancers.filter(function(dancer) {
    var distance = Math.sqrt(Math.pow((dancer.left - left), 2) + Math.pow((dancer.top - top), 2));
    return distance <= 150;
  });
  console.log(closeDancers.length);
  return closeDancers.length;
};

ShyDancer.prototype.changeSize = function(neighbors) {
  this.size = this.originalsize - (neighbors - 1) * 15;
  this.$node.css({'width': this.size + 'px'});
  this.$node.css({'height': this.size + 'px'});
};


