class personne{
    constructor(name , age ){
    this.name= name ;
    this.age=age ; 
}
getName(){
  return this.name ; 
}
getAge(){
    return this.age  ; 
}



TestAge(){
if (this.age>= 18){
    return major ;
    console.log(major);
}else{
    return minor ; 
}
}
TestName(){
    if(! this.name.match("^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?")){
return 'name invalide' ;
    }
}


} 

var person = new personne ('jean','34');
console.log(person);

module.exports = personne;

