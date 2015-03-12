'use strict'; // But be gentle

/*
 * Main service for the app.
 * This is used to store variables
 * that need to be maintained across
 * multiple views. And other things.
 * Boo ya!
 */

app.factory('appService', function() {
  var service = {};


  var showMenu = false;

  service.client = {
    name: '',
    age: '',
    weight: '',
    gender: '',
    mhr: '',
    thr: '',
    zone: '',
    bmi: '',
    fatPercent: '',
    fatMass: '',
    leanMass: '',
    idealWeight: '',
    isLoggedIn: ''
  };

  service.login = function() {
    service.client.isLoggedIn = true;
    service.client.mhr = 220 - service.client.age;
  };


  service.getThr = function(min, max, zone) {
    var thrMin = Math.floor(service.client.mhr * min);
    var thrMax = Math.floor(service.client.mhr * max);
    service.client.thr = thrMin + ' - ' + thrMax;
    service.client.zone = zone;
  };

  service.getBMI = function() {
    var bmiTemp = (service.client.weight * 703) / Math.pow(service.bmiHeight, 2);
    service.client.bmi = parseFloat(bmiTemp.toFixed(2));
    console.log(typeof service.client.bmi);
  };

  service.bodyFatCalc = function() {
    var log10 = function(val) {
      return Math.log(val) / Math.LN10;
    }
    var L = service.bodyFatBi + service.bodyFatTri + service.bodyFatSub + service.bodyFatIliac;
    var A = service.client.age;
    var D;
    if (service.client.gender === 'Male') {
      if (A < 17) {
        D = 1.1533 - (0.0643 * log10(L));
      } else if (A >= 17 && A <= 19) {
        D = 1.1650 - (0.0630 * log10(L));
      } else if (A >= 20 && A <= 29) {
        D = 1.1631 - (0.0632 * log10(L));
      } else if (A >= 30 && A <= 39) {
        D = 1.1422 - (0.0544 * log10(L));
      } else if (A >= 40 && A <= 49) {
        D = 1.1620 - (0.0700 * log10(L));
      } else if (A >= 50) {
        D = 1.1715 - (0.0779 * log10(L));
      }
    } else if (service.client.gender === 'Female') {
      if (A < 17) {
        D = 1.1369 - (0.0598 * log10(L));
      } else if (A >= 17 && A <= 19) {
        D = 1.1549 - (0.0678 * log10(L));
      } else if (A >= 20 && A <= 29) {
        D = 1.1599 - (0.0717 * log10(L));
      } else if (A >= 30 && A <= 39) {
        D = 1.1423 - (0.0632 * log10(L));
      } else if (A >= 40 && A <= 49) {
        D = 1.1333 - (0.0612 * log10(L));
      } else if (A >= 50) {
        D = 1.1339 - (0.0645 * log10(L));
      }
    }
    service.client.fatPercent = parseFloat(((495 / D) - 450).toFixed(2));
    var fatMassTemp = (service.client.fatPercent / 100) * service.client.weight;
    service.client.fatMass = parseFloat(fatMassTemp.toFixed(2));
    var leanMassTemp = service.client.weight - service.client.fatMass;
    service.client.leanMass = parseFloat(leanMassTemp.toFixed(2));
  }

  service.idealWeightCal = function() {
    var idealWeightTemp = service.client.leanMass / (1 - (service.desiredPerc / 100));
    service.client.idealWeight = parseFloat(idealWeightTemp.toFixed(2));
  }

  return service;
});