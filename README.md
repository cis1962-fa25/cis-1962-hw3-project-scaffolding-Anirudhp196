[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/x6X7wJcH)

# Pizza Validator

A TypeScript package that validates pizza objects using Zod. 
It can be used as a dependency or run via CLI to check if a JSON pizza object is valid.

It uses Zod for schema validation, designed to ensure the pizza meets specific criteria (like allowed toppings, valid crust type, and size limits). You can use this package as a library dependancy in any typescript/javascript project, or as a command-line interface to validate pizza JSON files directly from your terminal

## Installation
If you cloned this repo:
```bash
npm install
npm run build

## Install as a Dependency

If this package has been published (or installed locally):
npm install pizza-validator

or if testing locally from another project:
npm install ../pizza-validator

## Usage as a Dependency
import { validatePizzaOrder } from "pizza-validator";

const result = validatePizzaOrder({
  size: 12,
  crust: "stuffed",
  toppings: ["cheese", "pepperoni"],
});

if (result.isPizza) {
  console.log("✅ Valid pizza:", result.pizza);
} else {
  console.error("❌ Invalid pizza:", result.error);
}




