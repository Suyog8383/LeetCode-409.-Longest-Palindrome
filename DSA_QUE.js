var longestPalindrome = function(s) {
   let obj = {};
    for(let i = 0;i<s.length;i++){
        if(obj[s[i]]=== undefined){
            obj[s[i]] =1;
        }else{
            obj[s[i]]++;
        }
    }    
    let length = 0;
    
    let odd = false;

    let odd_max  = 0;

    for(let key in obj){
        if(obj[key]%2==0){
            length += obj[key];
        }else{
            odd = true;
            length+=obj[key] -1;
            
        }
    }
    return (odd) ?length +1: length;
};
