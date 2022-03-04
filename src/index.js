module.exports = function toReadable (number) {
  

    const readNumbers = {
        '0' :'',
        '1' : 'one',
        '2' : 'two',
        '3' : 'three',                                      
        '4' : 'four',
        '5' : 'five',
        '6' : 'six',
        '7' : 'seven',
        '8' : 'eight',
        '9' : 'nine',
        '10' : 'ten',
        '11' : 'eleven',
        '12' : 'twelve',
        '13' : 'thirteen',
        '14' : 'fourteen',
        '15' : 'fifteen',
        '16' : 'sixteen',
        '17' : 'seventeen',
        '18' : 'eighteen',
        '19' : 'nineteen',
        '20' : 'twenty',
        '30' : 'thirty',
        '40' : 'forty',
        '50' : 'fifty',
        '60' : 'sixty',
        '70' : 'seventy',
        '80' : 'eighty',
        '90' : 'ninety',
    }

let result = '';    
let numToStr = number.toString();
let length = numToStr.length;
let arr;
let resArr = [];
//let units;
let dozens;
//let dozenPad;
let dozen;
let hundreds;



if(number === 0) {
    return 'zero';
}
else if(Object.keys(readNumbers).includes(numToStr)) {
   // console.log(true);
    result += readNumbers[numToStr];
    //console.log(result);
    return result;
} else {
    console.log(false);
    if(length === 2) {
        arr = numToStr.split('');
       // console.log(arr)
        arr[0] = arr[0].padEnd(2, '0');
       // console.log(dozens)
        arr.map(function(el) {
            resArr.push(readNumbers[el])
            //console.log(resArr)
            result  = resArr.join(' ');
            //console.log(result);
            return result
        })
    } else if (length === 3) {
        hundreds = numToStr[0];
        resArr.push(`${readNumbers[hundreds]} hundred`)
       // console.log(resArr)
        
        dozen = numToStr.slice(1)
        //console.log(dozen)
          if(Object.keys(readNumbers).includes(dozen)) {
           // console.log(true);
            resArr.push(readNumbers[dozen]);
          //  console.log(resArr);
            result = resArr.join(' ');
           // console.log(result)
           // console.log(typeof(result))
            return result;
           // return ;
        } else {
            if(dozen[0] === '0' && dozen[1] !== '0') {
              resArr.push(readNumbers[dozen[1]])
              //console.log(resArr);
              result = resArr.join(' ')
             // console.log(result)
             // console.log(typeof(result))
              return result;
            } else if(dozen[0] === '0' && dozen[1] === '0') {
                
                //console.log(resArr);
                result = resArr.join(' ')
               // console.log(result)
               // console.log(typeof(result))
                return result;
            }
            console.log(false);
           
                arr = dozen.split('');
                //console.log(arr)
                arr[0] = arr[0].padEnd(2, '0');
               // console.log(arr)
                arr.map(function(el) {
                    resArr.push(readNumbers[el])
                   // console.log(resArr)
                    result  = resArr.join(' ');
                   // console.log(result);
                   // console.log(typeof(result))
                    return result
                    
                })
            }
    }
    
}
return result

}
