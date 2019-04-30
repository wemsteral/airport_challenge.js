
describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
  });

  describe('land', function() {

    it('receives plane', function() {
      expect(airport.land(plane)).toEqual(plane);
    });
  });
});

// spyOn(Plane, 'land');
