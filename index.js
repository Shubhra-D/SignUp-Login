let arr=["Alice","Bobo","Chilli","Dibba"];
function signup(userName){
      for(let i=0;i<arr.length;i++){
        if(arr[i]==userName) return "Use Aleady Resistered,Please Login"
      }
      arr.push("Koko")
      return "Signup Successfull ,Please Login" 
}
console.log(signup("Koko"));
let correct="Emp@123"
function login(userName,password){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==userName&&correct==password){
            return "Login Successfull";
        }else if(arr[i]!==userName) {
            return "User Not Found,Please Signup"
        }else if(arr[i]==userName&&correct!==password){
            return "Wrong password"
        }
    }
        
}
console.log(login("Alice","zae"));