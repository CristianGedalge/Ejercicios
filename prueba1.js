"use strict"



function convertToRoman(num) {
    let v=[['I','II','III','IV','V','VI','VII','VIII','IX'],['X',"XX","XXX","XL","L","LX","LXX","LXXX","XC"],['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],['M','MM','MMM']]
  let s="";
  while(num!=0)
  {
    let n=parseInt(Math.log10(num))+1
    let dividendo=Math.pow(10,n-1);
    let cociente=parseInt(num/dividendo);
    s+=v[n-1][cociente-1]
    num=num%dividendo;


  }

   return s;
  }
 //insercion
  console.log(convertToRoman(3999));

