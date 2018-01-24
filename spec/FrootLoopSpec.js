describe('FrootLoop', function() {

  var frootloop, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    frootloop = new FrootLoop(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(frootloop.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a steps function that make its node change color, size and position', function() {
    sinon.spy(frootloop, 'randomMove');
    sinon.spy(frootloop, 'resize');
    sinon.spy(frootloop, 'changeColor');
    frootloop.step();
    expect(frootloop.randomMove.called).to.be.true;
    expect(frootloop.resize.called).to.be.true;
    expect(frootloop.changeColor.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(frootloop, 'step');
      expect(frootloop.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(frootloop.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(frootloop.step.callCount).to.be.equal(2);
    });
  });
});
