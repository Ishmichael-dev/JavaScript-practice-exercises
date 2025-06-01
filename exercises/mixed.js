// exercise 1
function distance(Km){
    const miles = Km * 0.621371;
    return miles;
}
console.log(distance(5));
//  exercise 2
let classmates = 'Maxwell'
switch(classmates){
    case  'Maxwell' : 
    console.log('maxwell is the smartest guy in the class')
    break;
    case 'Bernard' :
        console.log('Bernard is the tallest guy in the class')
    break;
    case 'Julia' :
        console.log('Julia is the finest grl in the class')
    break;
    case 'Michael' :
        console.log('And finally I, Michael I am the richest of all') 
    default: 
        console.log('There is no student with this name in this class')  
    break;
}


