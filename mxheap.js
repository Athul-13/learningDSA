class MaxHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i){
        return 2 * i + 1
    }

    getRightChildIndex(i){
        return 2 * i + 2
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    heapifyUp(){
        let index = this.heap.length - 1

        while(index > 0){
            let parentIndex = this.getParentIndex(index)

            if(this.heap[index] <= this.heap[parentIndex]) break

            this.swap(index,parentIndex)
            index = parentIndex
        }
    }

    extractMax(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()

        return max
    }

    heapifyDown(){
        let index = 0;

        while(this.getLeftChildIndex(index) < this.heap.length){
            let smallerChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)

            if(
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] > this.heap[smallerChildIndex]
            ){
                smallerChildIndex = rightChildIndex
            }

            if(this.heap[index] >= this.heap[smallerChildIndex])

            this.swap(index, smallerChildIndex)
            index = smallerChildIndex
        }
    }
}

// Creating max heap
const heap = new MaxHeap()

heap.insert(10)
heap.insert(5)
heap.insert(15)
heap.insert(3)

console.log(heap.heap)

console.log(heap.extractMax())

console.log(heap.heap)