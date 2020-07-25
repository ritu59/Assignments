       //javascript assignment

//Q1 convert minutes into seconds

//function minute_convert(number)
//{
//	var seconds=number*60;
//	return(seconds);
//}
//console.log(minute_convert(5));



//Q2 divides evenly

//function dividesEvenly(a,b)
//{
//	if (a%b==0) 
//	{
//		return(true);
//	}
//	else
//	{
  //     return(false);
//	}
//}
//console.log(dividesEvenly(98,7));
//console.log(dividesEvenly(85,4));




//Q1 count instances of a character in a string

//function charCount(str1,str2) 
//{
//var str2_Count = 0;
//for (var position = 0; position < str1.length; position++) 
 //{
    //if (str1.charAt(position) == str2) 
      //{
      //str2_Count += 1;
    //  }
  //}
  //return str2_Count;
//}

//console.log(charCount('big fat Bubble','b'));
//console.log(charCount('big fat Bubble','B'));



//Q2 add up the numbers from single numbers

//function Addup(number)
//{
//	var sum=0;
//	for (var i =1; i <= number; i++)
//	{
//		sum+=i;
//	}
//	return sum;
//}
 //console.log(Addup(13));


//Q3 Replace vowel with another character

//function replaceVowel(String)
//{
 //   return String.replace(/[aeiou]/gi,('a',1),('e',2),('i',3),('o',4),('u',5));
//}
//console.log(replaceVowel("khanbari"));



//Q1 reverse words starting with a particular letter


//function specialReverse(str)
//{
 // return str.replace(/\w{5,}/g, s => s.split('').reverse(s).join(''));
//}
//console.log(specialReverse("word searches are super fun","s"));




//Q3 removes duplicates from an array


//function removeDups(string) 
//{
  //  var x,
    //  len=string.length,
    //  out=[],
    //    obj={};
 
 //   for (x=0; x<len; x++) 
 //   {
 //   obj[string[x]]=0;
   // }  
  //  for (x in obj)  
  //  {
  //   out.push(x);
  //  }
  //  return out;
//}
//var string = ["the","big","the","cat"];
//result = removeDups(string);
//console.log(string);
//console.log(result);