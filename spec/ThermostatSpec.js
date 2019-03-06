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
      expect(thermostat.degree).toEqual(21);
    });
  });

  describe("You can decrease the temperature with an down function",function(){
    it("The termostat temperature decreases by down function", function(){
      var thermostat = new Thermostat;
      thermostat.down();
      expect(thermostat.degree).toEqual(19);
    });
  });

  describe("The minimum behaviour is controlled",function(){
    it("The termostat temperature decreases by down function", function(){
      var thermostat = new Thermostat;
      thermostat.degree = 10;
      thermostat.down();
      expect(thermostat.degree).toEqual(10);
      expect(thermostat._minimum()).toEqual(true);
    });
  });
  describe("power mode safing",function(){
    var thermostat;
    beforeEach(function(){
      thermostat = new Thermostat;
    });
    it("The power safe mode is on by default", function(){
      expect(thermostat.powerSafeMode).toEqual("on");
    });
    it("We can turn off the power safe mode", function(){
      expect(thermostat.powerSafeMode).toEqual("on");
      thermostat.turnOff();
      expect(thermostat.powerSafeMode).toEqual("off");
    });
    it("We can turn on the power safe mode after turning off", function(){
      expect(thermostat.powerSafeMode).toEqual("on");
      thermostat.turnOff();
      thermostat.turnOn();
      expect(thermostat.powerSafeMode).toEqual("on");
    });
  });
  describe("The maximum degree",function(){
    var thermostat;
    beforeEach(function(){
      thermostat = new Thermostat;
    });
    it("It is 25 when powerSafeMode is on", function(){
      expect(thermostat.maximumDegree()).toEqual(25);
    });

    it("It is 32 when powerSafeMode is off", function(){
      thermostat.turnOff();
      expect(thermostat.maximumDegree()).toEqual(32);
    });

    it("It will be 25 when we turn it on and off", function(){
      thermostat.turnOn();
      thermostat.turnOff();
      thermostat.turnOn();
      expect(thermostat.maximumDegree()).toEqual(25);
    });

    it("It will not add the temperature when it is at maximum", function(){
      var thermostat = new Thermostat;
      thermostat.degree = 25;
      thermostat.up();
      expect(thermostat.degree).toEqual(25);
    });

    it("It will not add the temperature when it is at maximum", function(){
      var thermostat = new Thermostat;
      thermostat.turnOff ;
      thermostat.degree = 32 ; 
      thermostat.up();
      expect(thermostat.degree).toEqual(32);
    });
  });

});
