function minArray(arr) {
    if (arr.length === 0)
        return -1;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > i) {
            min[i] = arr[i];
        }
    }
    return min;
}

let arr1 = [3, 5, 1, 8, -3, 7, 8gi];
let min = minArray(arr1);
alert(min)