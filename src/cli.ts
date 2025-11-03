#!/usr/bin/env node

import {validatePizzaOrder} from "./index"
import {argv} from "process";
import {readFileSync} from "fs";

function main() {
    const filePath = argv[2];

    if(!filePath) {
        console.error("Please provide a file path to a pizza JSON file.");
        process.exit(1);
    }

    try {
        const fileContent = readFileSync(filePath, "utf-8");
        const pizzaOrder = JSON.parse(fileContent);

        const validationResult = validatePizzaOrder(pizzaOrder);

        if(validationResult.isPizza) {
            console.log("Valid pizza order:", validationResult.pizza);
        } else {
            console.error("Invalid pizza order. Errors:");
            validationResult.error.forEach(err => console.error("-", err));
        }
    } catch (error) {
        console.error("Error reading or parsing the file:", error);
        process.exit(1);
    }
}

main();