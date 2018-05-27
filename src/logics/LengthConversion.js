import Big from 'big.js';
export default function lengthConversion(leftUnit,rightUnit,
    numValue,direction){
              let one = new Big(numValue);
        if(leftUnit==='kilometer'){
            if(rightUnit==='kilometer'){
                return one.toString();
            };
            if(rightUnit==='meter'){
               return one.times(1000).toString();
            };
            if(rightUnit==='centimeter'){
                return one.times(100000).toString();
            };
            if(rightUnit==='millimeter'){
                return one.times(1000000).toString();
            };
        };
        if(leftUnit==='meter'){
            if(rightUnit==='kilometer'){
                return one.times(0.001).toString();
            };
            if(rightUnit==='meter'){
                return one.toString();
            };
            if(rightUnit==='centimeter'){
                return one.times(100).toString();
            };
            if(rightUnit==='millimeter'){
                return one.times(1000);
            }
        };
        if(leftUnit==='centimeter'){
            if(rightUnit==='centimeter'){
                return one.toString();
            };
            if(rightUnit==='kilometer'){
                return one.times(0.00001).toString();
            };
            if(rightUnit==='meter'){
                return one.times(0.01).toString();
            };
            if(rightUnit==='millimeter'){
                return one.times(10).toString();
            };
        }
        if(leftUnit==='millimeter'){
            if(rightUnit==='millimeter'){
                return one.toString();
            };
            if(rightUnit==='kilometer'){
                return one.times(0.000001).toString();
            };
            if(rightUnit==='meter'){
                 return one.times(0.001).toString();
            };
            if(rightUnit==='centimeter'){
                return one.times(0.1).toString();
            };
        };
    };