describe('ShyDancer', function() {

  var shydancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shydancer = new ShyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shydancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a steps function that make its node change size', function() {
    sinon.spy(shydancer, 'changeSize');
    shydancer.step();
    expect(shydancer.changeSize.called).to.be.true;
    
  });

  it('should have return the number of objects in close   range', function() {
    var blinkydancer2 = new BlinkyDancer(15, 25, timeBetweenSteps);
    var blinkydancer3 = new BlinkyDancer(200, 200, timeBetweenSteps);
    window.dancers.push(shydancer);
    window.dancers.push(blinkydancer2);
    window.dancers.push(blinkydancer3);
    var numOfObjs = shydancer.findNearestNeighbors();
    expect(numOfObjs).to.be.equal(1);
    
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shydancer, 'step');
      expect(shydancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shydancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shydancer.step.callCount).to.be.equal(2);
    });
  });
});