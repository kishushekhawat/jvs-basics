let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];
console.log(shoppingList);
shoppingList.push('carrots');
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList)




shoppingList[4].splice(1 , 2);
console.log(shoppingList)

shoppingList[4].push("cucumbers" , " Bell peppers")
console.log(shoppingList)



let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
console.log(student.name)

student.phone = "123-456-7890";
console.log(student)

student.age = '21';
console.log(student);

delete student.grade;
console.log(student)


function number(i){

if(i > 0){
    return 'Positive';
}
if( i <0){
    return 'Negative';
}
if( i == 0){
  return 'zero';
}

}console.log(number(8))




function grades(score){
    if(score >= 90 && score <= 100){
         return "A"
    }
    else if(score >= 80 && score <= 89){
        return "B"
    }
    else if(score >= 70 && score <= 79){
        return "C"
    }
    else if(score >= 60 && score <= 69){
        return "D"
    }
    else{
        return "F"
    }
}
console.log(grades(70))



