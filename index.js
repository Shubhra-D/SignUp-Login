let arr=["Alice","Bobo","Chilli","Dibba"];
function signup(userName){
      for(let i=0;i<arr.length;i++){
        if(arr[i]==userName) return "Use Aleady Resistered,Please Login"
      }
      arr.push("Koko")
      return "Signup Successfull ,Please Login" 
}
console.log(signup("Koko"));