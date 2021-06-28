import { Queue } from "../index";

describe("My Stack", () => {
    let q: Queue;

    beforeEach(() => {
        q = new Queue();
    });

    it("is created empty", () => {
        expect(q.queue).toEqual([]);
    });

    it("can push from rear", () => {
        q.push(1);
        q.push(2);
        q.push("three");
        expect(q.all).toEqual([1, 2, "three"]);
    });

    it("can pop from front", () => {
        q.push(1);
        q.push(2);
        q.push("three");

        q.pop();
        expect(q.top).toBe(2);
    });

    it.todo("can destruct after");
});
