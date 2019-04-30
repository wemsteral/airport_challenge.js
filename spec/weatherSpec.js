describe('Weather', function(){

  var weather = new Weather

  it('has the function "isStorm"', function(){
    expect(weather.isStorm()).toBeDefined();
  });
});
