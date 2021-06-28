import readlineSync from "readline-sync";

import { Queue } from "./index";
import { QueueType } from "./types/Queue";

const main = (): void => {
    console.log("Choose any of these options");

    console.log(
        "\x1b[32m%s\x1b[0m",
        "Enter 1 to push an element into the queue"
    );
    console.log(
        "\x1b[35m%s\x1b[0m",
        "Enter 2 to pop an element from the queue"
    );
    console.log(
        "\x1b[36m%s\x1b[0m",
        "Enter 3 to display all elements in the queue"
    );
    console.log("\x1b[31m%s\x1b[0m", "Enter 4 exit the program");

    const q = new Queue();

    while (true) {
        const choice = Number(readlineSync.question("Enter your choice:"));

        switch (choice) {
            case 1: {
                const item: QueueType = readlineSync.question("Enter element:");
                q.push(item);
                console.log(
                    "\x1b[37m%s\x1b[0m",
                    `Element ${item} pushed into the queue!`
                );
                break;
            }

            case 2: {
                console.log(
                    "\x1b[37m%s\x1b[0m",
                    `Element ${q.top} will be popped from the queue!`
                );
                q.pop();
                console.log(
                    "\x1b[37m%s\x1b[0m",
                    `Element ${q.queue[0]} is popped from the queue!`
                );
                break;
            }

            case 3: {
                console.log(q.all);
                break;
            }

            default: {
                process.exit(1);
            }
        }
    }
};

main();

/*
How to add colours in nodejs console

console.log('\x1b[36m%s\x1b[0m', 'I am cyan');

colour codes:

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"


*/
