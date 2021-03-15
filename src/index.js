module.exports = function check(str, bracketsConfig) {
//   let arr1=bracketsConfig.flat();
//   let objTemplete={};
//   for (let i = 0; i < arr1.length; i++) {
//     if(i%2===0)
//      objTemplete[arr1[i+1]]= arr1[i];
// }
//   let stek=[];
//   let count=0;
//   for (let i = 0; i < str.length; i++) {
//     if(str[i]==='('||str[i]==='{'||str[i]==='['||str[i]==='|'){  
//       if (str[i]==='|'&&count%2==0){
//         stek.push(str[i]);
//         count++;
//       }else if(str[i]==='|'&&count%2!=0){
//         if(stek.pop()!=objTemplete[str[i]]){
//           return false;
//         }
//         count++;
//       }else{
//         stek.push(str[i]);
//       }

          
//     } else{
//       if(stek.pop()!=objTemplete[str[i]]){
//         return false;
//       }
//     }
   
//   }
  
//     return stek.length===0;
let arr1=bracketsConfig.flat();
let objTemplete={};
for (let i = 0; i < arr1.length; i++) {
  if(i%2===0)
   objTemplete[arr1[i+1]]= arr1[i];
}
let theSame='';
let tempOpen=Object.values(objTemplete);
let tempClose=Object.keys(objTemplete);
let stek=[];
let count=0;
let countNewSameBraket=0;
for (let i = 0; i < str.length; i++) {
  if(tempClose.includes(str[i])){
    if (tempClose.includes(str[i])&&tempOpen.includes(str[i])&&count==0) {
      stek.push(str[i]);
      theSame=str[i];
      count++;
    }else if (tempClose.includes(str[i])&&tempOpen.includes(str[i])&&count==1) {
      if (str[i]===theSame) {
          if (stek.pop()!=objTemplete[str[i]]){
             return false;
           }
             count--; 
          }else{
            if (countNewSameBraket==0) {
               stek.push(str[i]);
               countNewSameBraket++;
            }else{
               if (stek.pop()!=objTemplete[str[i]]){
                return false;
              }
                countNewSameBraket--;
            }
          }
  }else{
    if (stek.pop()!=objTemplete[str[i]]){
      return false;
    }
  }
    
  }else{
    stek.push(str[i]);
  }
}
return stek.length===0;
}
