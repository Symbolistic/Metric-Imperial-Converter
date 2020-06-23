/*
*
*
*       Complete the handler logic below
*       
*       
*/

const units = {
  gal: 'L',
  l: "gal",
  lbs: "kg",
  kg: "lbs",
  mi: "km",
  km: "mi"
}


function ConvertHandler() {
  
  this.getNum = function(input) {
    const lowInput = input.toLowerCase(); // Sets input letters to lowercase to avoid issues
    const unit = this.getUnit(lowInput);
    
    if (unit === null) return null;
    
    const matchOperators = lowInput.match(/[*/+-]/g);
    
    if(matchOperators && matchOperators.length > 1) {
        return null;
    }
    
    try {
      var result = lowInput.split(unit)[0] === '' ? 1 : lowInput.split(unit)[0];
      return eval(result);
    } catch(e) {
      return null;
    }
  };
  
  this.getUnit = function(input) {
    var reg = /(gal)|(lbs)|(L)|(kg)|(mi)|(km)$/i;
    
    const result = input.match(reg);
    return result === null ? null : result[0].toLowerCase();

  };
  
  this.getReturnUnit = function(initUnit) {
    // If its null return null
    if (initUnit === null) return null;
    
    // Go to the unit object and get the correct return unit
    return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    
    const fullSpellings = {
      gal: 'gallons',
      l: "liters",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometers"
    }
       
    var result = this.getUnit(unit);
    return fullSpellings[result];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const LToGal = 1 / galToL;
    const kgToLbs = 1 / lbsToKg;
    const kmToMi = 1 / miToKm;
    var result = initNum;
    
    if (initNum === null) return null;
    
    switch(initUnit.toLowerCase()) {
      case 'gal': {
        return Number((initNum * galToL).toFixed(5));
      }
        
      case 'l': {
        return Number((initNum * LToGal).toFixed(5));
      }
        
      case 'lbs': {
        return Number((initNum * lbsToKg).toFixed(5));
      }
        
      case 'kg': {
        return Number((initNum * kgToLbs).toFixed(5));
      }
        
      case 'mi': {
        return Number((initNum * miToKm).toFixed(5));
      }
        
      case 'km': {
        return Number((initNum * kmToMi).toFixed(5));
      }
        
      default: {
        return null;
      }
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    
    if (initNum === null || initUnit === null || returnNum === null || returnUnit === null) {
      return null;
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
