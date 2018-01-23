var FrootLoop = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.color = 'yellow';
  this.size = 10;
  this.$node.css({'height': JSON.stringify(10) + 'px'});
  this.$node.css({'width': JSON.stringify(10) + 'px'});
  this.$node.css({'border': '10px solid yellow'});

};

FrootLoop.prototype = Object.create(Dancer.prototype);

FrootLoop.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  //this needs to be changed
  Dancer.prototype.step.call(this);
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //this needs to be changed
  vertFlag = negFlag();
  horizFlag = negFlag();
  

  if (vertFlag) {
    this.top = this.top + 10;
  } else {
    this.top = this.top - 10;
  }
  if (horizFlag) {
    this.left = this.left + 10;
  } else {
    this.left = this.left - 10;
  }

  this.setPosition();
  this.resize();
  this.changeColor();  
};

FrootLoop.prototype.resize = function() {
  sizeFlag = negFlag();
  if (sizeFlag) {
    this.size = this.size + 5;
  } else if (this.size > 0) {
    this.size = this.size - 5;
  }
  this.$node.css({'height': JSON.stringify(this.size) + 'px'});
  this.$node.css({'width': JSON.stringify(this.size) + 'px'});
};

FrootLoop.prototype.changeColor = function() {
  var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.$node.css({'border': '10px solid ' + this.color});
};

FrootLoop.prototype.lineUp = function() {
  this.left = 0;
};

negFlag = function() {
  num = Math.random();
  if (num > 0.49) {
    return true;
  } else {
    return false;
  }
};



