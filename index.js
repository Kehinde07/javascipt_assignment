//ASSIGNMENT

//EXERCISE ONE
/*function showAddress(){
    return {
        street: 'Oil Village Mahuta,',
        city: 'Kaduna',
        zipCode: 800287
    }
}
const address= showAddress()
console.log(address) */

//(EXERCISE TWO) FACTORY FUNCTION
/*function showAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}
const address= showAddress('Oil Village Mahuta,', 'Kaduna', 800287)
console.log(address)*/

//CONSTRUCTOR FUNCTION
function showAddress(){

    this.street= 'Oil Village Mahuta,',
    this.city= 'Kaduna',
    this.zipCode= 800287
    }

const address= new showAddress()
console.log(address)




//EXERCISE 4

let blogPost= {
    title: "Managing Your Time Effectively",
    body: "Time planning is a vital part of ... ",
    author: "Olukunle Kehinde",
    views: 25,
    comments: {
        author: " Daniel Craig",
        body: "I found the post interesting and useful",
    },
   isLive: true,

}
console.log(blogPost);


//(EXERCISE 5. 1-4)

function programming (languages){
    return{
     languages,
     isChallenging: true,
     isRewarding: true,
     difficulty: 8,
     jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"

    }

 }

 //1
 const addGo= programming(["JavaScript", "Python", "Ruby", "Go" ]);
 console.log(addGo);
 //2
 addGo.difficulty= 7
 //3
 delete addGo.jokes;
 //4
 addGo.isFun= true


 //5.5
 const allKeys = new Programming();

   for(let key in allKeys){
     if (typeof allKeys[key] !== 'array')
      console.log(key, allKeys[key]);
   }


 //5.6 and 5.7

 function Programming (){

      this.languages= ["JavaScript", "Python", "Ruby", "Go" ];
      this.isChallenging= true;
      this.isRewarding= true;
      this.difficulty= 8,
      this.jokes="http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
         return this;
     }

  /*const allKeys = new Programming();
  
   for(let key in allKeys){
      console.log(key, allKeys[key])
   }
 */
