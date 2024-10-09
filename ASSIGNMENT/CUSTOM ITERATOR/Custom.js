// Define an object with a collection of items
const myCollection = {
    items: ['apple', 'banana', 'orange', 'mango'],
    
    // Define Symbol.iterator to make the object iterable
    [Symbol.iterator]() {
        let index = 0; // Start at the first item
        let items = this.items; // Reference the collection of items

        // Return an iterator object with a next() method
        return {
            next() {
                if (index < items.length) {
                    // Return the next item and set done to false
                    return { value: items[index++], done: false };
                } else {
                    // When iteration is complete, set done to true
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

// Using a for...of loop to iterate over the custom iterator
for (const fruit of myCollection) {
    console.log(fruit); // Output: apple, banana, orange, mango
}

// Manually using the iterator
let iterator = myCollection[Symbol.iterator]();
console.log(iterator.next()); // { value: 'apple', done: false }
console.log(iterator.next()); // { value: 'banana', done: false }
console.log(iterator.next()); // { value: 'orange', done: false }
console.log(iterator.next()); // { value: 'mango', done: false }
console.log(iterator.next()); // { value: undefined, done: true }












//////2///////
class MyCollectionIterator {
    constructor(items) {
        this.items = items;  // The collection to iterate over
        this.index = 0;      // Start index for iteration
    }

    // Define the next() method according to the iterator protocol
    next() {
        if (this.index < this.items.length) {
            return { value: this.items[this.index++], done: false };
        } else {
            return { value: undefined, done: true };  // No more items
        }
    }
}

// Usage Example
const myFruitss = ['apple', 'banana', 'orange', 'mango'];
const iterators = new MyCollectionIterator(myFruits);

// Manually using the iterator
console.log(iterator.next()); // { value: 'apple', done: false }
console.log(iterator.next()); // { value: 'banana', done: false }
console.log(iterator.next()); // { value: 'orange', done: false }
console.log(iterator.next()); // { value: 'mango', done: false }
console.log(iterator.next()); // { value: undefined, done: true }





//////////////////3///////////////
// Generator function to iterate over a collection
function* myCollectionGenerator(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];  // Yield each item one by one
    }
}

// Usage Example
const myFruits = ['apple', 'banana', 'orange', 'mango'];
const iteratorss = myCollectionGenerator(myFruits);

// Using the generator function's iterator manually
console.log(iteratorss.next()); // { value: 'apple', done: false }
console.log(iteratorss.next()); // { value: 'banana', done: false }
console.log(iteratorss.next()); // { value: 'orange', done: false }
console.log(iteratorss.next()); // { value: 'mango', done: false }
console.log(iteratorss.next()); // { value: undefined, done: true }

// Using a for...of loop with generator
for (const fruit of myCollectionGenerator(myFruits)) {
    console.log(fruit);  // Output: apple, banana, orange, mango
}
