
describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
    // weather = new Weather()
  });

  describe('land', function() {
    it('receives plane', function() {
      expect(airport.land(plane)).toEqual(plane);
    });
  });

  describe('takeOff', function() {
    it('allows plane to take off', function() {
      airport.land(plane)
      expect(airport.takeOff(plane)).toEqual(plane);
    });

    it('raises error if weather is stormy', function(){

    });
  });
});

// spyOn(Plane, 'land');
