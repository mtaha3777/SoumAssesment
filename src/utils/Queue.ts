class Queue<T> {
    private static instance: Queue<any>;
    private queue: T[];

    private constructor() {
        if (Queue.instance) {
            return Queue.instance;
        }
        Queue.instance = this;
        this.queue = [];
    }

    public static getInstance<T>(): Queue<T> {
        if (!Queue.instance) {
            Queue.instance = new Queue<T>();
        }
        return Queue.instance;
    }

    public getQueue(): T[] {
        return this.queue;
    }

    public enqueue(element: T): void {
        this.queue.push(element);
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.queue.shift();
    }

    public peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue[0];
    }

    public size(): number {
        return this.queue.length;
    }

    public isEmpty(): boolean {
        return this.queue.length === 0;
    }

    public clear(): void {
        this.queue = [];
    }
}

const queueInstance = Queue.getInstance<string>(); // Replace 'string' with the type you want to use in the queue
Object.freeze(queueInstance);

export default queueInstance;
