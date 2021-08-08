let arr = [89, 32, 33, 132, 55, 66, 86, 97, 100, 9, 30];

for (i = 0; i < arr.length; i++) {

    element = arr[i];
    // console.log(element);

    if (element < 80) {
        continue;
    }
    else { console.log(element); }
}



