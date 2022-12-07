  //  1.

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  console.log(user.studentstatus);

//   2.

    let numbers = [1, 10, 25, 35, 45, 105]
     
    for (let i = 0; i < numbers.length; i++ ){
        console.log(numbers[i]);
    }
     let index = 0 
     while (index < numbers.length ) {
        console.log(numbers[index]);
        index++;
     }

//  3. 

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0;  i < numbers.length; i++ ){
    if (numbers[i] > 5) {
    console.log(numbers[i]);
}
}


// 4. 

let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if (user.age < 18 &&  user.studentstatus == 'active' ){
    console.log("Hello");
}
else if  (user.name == "levan"){
    console.log("hello levan");
}
else if  (user.studentstatus == "active" ||  user.age < 25 ){
    console.log("hello World");
}
else {
    console.log("error");
}

//  5.

 let arrays = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

    for(let x of arrays){
        if(typeof x == 'string')
        console.log(x);
    }

//  6. 

 
let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];

                                X
// 7.

let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

for (let x of array){
    if (x % 2 ==0)
    console.log(x);
}

for (let x of array){
    if (x % 2 == 1)
    console.log(x);
}

// 8. 

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for ( x of users ){
    if (x.status == true)
    console.log(x);
}


