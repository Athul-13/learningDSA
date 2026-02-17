class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i){
        return 2*i + 1
    }

    getRightChildIndex(i){
        return 2*i + 2 
    }

    swap(i, j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1

        while(index > 0){
            let parentIndex = this.getParentIndex(index)

            if(this.heap[parentIndex] <= this.heap[index]) break

            this.swap(parentIndex, index)
            index = parentIndex
        }
    }

    extractMin(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()
    
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()

        return min
    }    

    heapifyDown(){
        let index = 0

        while(this.getLeftChildIndex(index)<this.heap.length){
            let smallerChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)

            if(
                rightChildIndex < this.heap.length && 
                this.heap[rightChildIndex] < this.heap[smallerChildIndex]
            ){
                smallerChildIndex = rightChildIndex
            }

            if(this.heap[index] <= this.heap[smallerChildIndex]) break

            this.swap(index, smallerChildIndex)
            index = smallerChildIndex;
        }
    }
}

// Creating min heap
const heap = new MinHeap()

heap.insert(10)
heap.insert(5)
heap.insert(15)
heap.insert(3)

console.log(heap.heap)

console.log(heap.extractMin())

console.log(heap.heap)