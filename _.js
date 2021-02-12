
 // 1. we need to create an object to contain new methods
const _ ={
  clamp(number,lower,upper)
  {
    const lowerClampedValue = Math.max(number,lower);
    const clampedValue = Math.min(lowerClampedValue,upper)

    return clampedValue;
  },

  inRange(number,start,end)
  {
    if(end===undefined)
    {
      end=start;
      start=0;
    }

    if(start>end)
    { 
      var temp=start;
      start=end;
      end=temp;
    }
    if(number>=start && number< end)
      {
        return true;
      }
      else
      {
        return false;
      }
  },

  words(string)
  {
    var words=string.split(' ');
    return words;
  },

  pad(string,length)
  {
    if(length<=string.length)
    {
      return string;
    }

    var startPaddingLength = Math.floor((length-string.length)/2);

    var endPaddingLength = length-string.length-startPaddingLength;

var paddedString = ' '.repeat(startPaddingLength)+string+' '.repeat(endPaddingLength);

return paddedString;
  },

  has(object,key)
  {
    var hasValue=object[key];

    if(hasValue===undefined)
    {
      return false;
    }
    else 
      return true;
  },

  invert(object)
  {
    var invertedObject = {};

    for(const key in object)
    {
      var originalValue =object[key];

      invertedObject[originalValue]=key;
    }
    return invertedObject;

  },

  findKey(object,predicate)
  {
    for(var key in object)
    {
      var value=object[key];
      var predicateReturnValue = predicate(value);

      if(predicateReturnValue==true)
      {
        return key;
      }
     // else
        
    }
    return undefined;
  },

  drop(array,n)
  {
      if(n===undefined)
      {
        n=1;
      }

      var droppedArray = array.slice(n,array.length);
      return droppedArray;
  },

  dropWhile(array,predicate)
  { 
    const cb=(element,index)=>{
        return !predicate(element,index,array);
    }
    var dropNumber = array.findIndex(cb); //findIndex find the 1st index where the condition is true;
    var droppedArray=this.drop(array,dropNumber);
    //this. because we are using drop function in this file

    return droppedArray;
  },

  chunk(array,size)
  {
    if(size===undefined)
      size=1

    var arrayChunks =[];

    var tempSize=size;

    for(var i=0;i<array.length;i++)
    { 
      var temp=[]
      while(tempSize>0 && i<array.length)
      { 
        temp.push(array[i])
        i++;
        tempSize--;
      }
      i--;
      console.log(temp)
      tempSize=size;
      arrayChunks.push(temp)
      console.log(arrayChunks);
    }

    return arrayChunks;
  }

}; 


// Do not write or modify code below this line.
module.exports = _;

