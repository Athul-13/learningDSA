function heapSort(arr){
    let n = arr.length

    for(let i=Math.floor((n/2)-1);i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,0,i)
    }

    return arr
}

function heapify(arr, heapsize, rootindex){
    let largest = rootindex
    let left = 2 * rootindex +1
    let right = 2 * rootindex +2

    if(left<heapsize && arr[left] > arr[largest]){
        largest = left
    }

    if(right<heapsize && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== rootindex){
        [arr[largest],arr[rootindex]] = [arr[rootindex],arr[largest]]
        heapify(arr,heapsize,largest)
    }
}