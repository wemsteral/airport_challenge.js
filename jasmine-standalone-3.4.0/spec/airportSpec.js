

describe('Airport', function() {

  var airport;
  //
  // var Plane = {};

  // beforeEach(function() {
  //   plane = new Plane()
  // });

  describe('land', function() {

    it('receives plane', function() {
      expect(airport.land(plane)).toEqual(plane);
    });
  });
});

// spyOn(Plane, 'land');
