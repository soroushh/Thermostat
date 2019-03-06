describe("Thermostat",function() {
  describe("Thermostat starts at 20 degrees",function(){
    it("strats at 20 degree", function(){
      var thermostat = new Thermostat;
      expect(thermostat.degree).toEqual(20);
    });
  });

  describe("You can increase the temperature with an up function",function(){
    it("The termostat temperature increases by up function", function(){
      var thermostat = new Thermostat;
      thermostat.up();
      expect(thermostat.dgree).toEqual(21);
    });
  });

  describe("You can decrease the temperature with an down function",function(){
    it("The termostat temperature decreases by down function", function(){
      var thermostat = new Thermostat;
      thermostat.down();
      expect(thermostat.degree).toEqual(19);
    });
  });

});
