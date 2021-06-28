import { QueueType } from "./types/Queue";

class Queue {
    queue: QueueType[];

    constructor() {
        this.queue = [];
    }

    get all(): QueueType[] {
        return this.queue;
    }

    get top(): QueueType {
        return this.queue[0];
    }

    pop(): void {
        this.queue.shift();
    }

    push(value: QueueType): void {
        this.queue.push(value);
    }
}

// const q = new Queue();

// q.push(1);
// q.push(2);
// q.push(3);

// console.log(q.all);

// q.pop();

// console.log(q.all);

export { Queue };
