import {validatePizzaOrder} from "../src/index";

test("Valid Pizza Order", () => {
    const order = {
        size: 12,
        crust: "normal",
        toppings: ["pepperoni", "mushrooms"]
    };

    const result = validatePizzaOrder(order);
    expect(result.isPizza).toBe(true);
    if (result.isPizza) {
        expect(result.pizza.size).toBe(12);
        expect(result.pizza.crust).toBe("normal");
        expect(result.pizza.toppings).toEqual(["pepperoni", "mushrooms"]);
    }
});

test("Invalid Pizza Order - Size Too Small", () => {
    const order = {
        size: 4,
        crust: "normal",
        toppings: ["pepperoni"]
    };

    const result = validatePizzaOrder(order);
    expect(result.isPizza).toBe(false);
    if (!result.isPizza) {
        expect(result.error).toContain("Size must be at least 6 inches");
    }
});

test("Invalid Pizza Order - Forbidden Topping", () => {
    const order = {
        size: 12,
        crust: "stuffed",
        toppings: ["pepperoni", "fish"]
    };

    const result = validatePizzaOrder(order);
    expect(result.isPizza).toBe(false);
    if (!result.isPizza) {
        expect(result.error).toContain("Cannot include forbidden toppings");
    }
});

test("Invalid Pizza Order - Missing Size", () => {
    const order = {
        crust: "normal",
        toppings: ["mushrooms"]
    };

    const result = validatePizzaOrder(order);
    expect(result.isPizza).toBe(false);
    if (!result.isPizza) {
        expect(result.error).toContain("Required");
    }
});


