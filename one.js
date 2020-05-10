var first = (array, n) =>
 { 
     if (array == null) 
     return void 0; 
     if (n == null)
     return array[0]; 
     if (n < 0) 
     return []; 
     return array;
}
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));