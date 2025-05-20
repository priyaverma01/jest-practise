const {sayHello}=require("../functions/greet");
const welcomeUser=(name)=>{
    return sayHello(name)
}
module.exports={welcomeUser};

