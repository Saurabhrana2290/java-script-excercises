function swap(){
    var a = 10;
    var b = 8;
    console.log(`Value of a is ${a} and b is ${b} before swpaping`);

    var temp = 0;
    temp = a;
    a = b;
    b = temp;

    console.log(`Value of a is ${a} and b is ${b} before swapping`);
}

swap();