import { z } from "zod";


const forbiddenToppings = ["fish", "nuts", "anchovies", "pickes"];

const pizzaSchema = z.object({
    size: z.number().min(6, "Size must be at least 6 inches").max(24, "Size can be at most 24 inches"),
    crust: z.enum(["stuffed", "normal"]),
    isDeepDish: z.boolean().optional().default(false),
    toppings: z.array(z.string().optional().refine(topping => !forbiddenToppings.includes(topping || ""), {
        message: "Cannot include forbidden toppings"
    }))
});

export type pizzaOrder = z.infer<typeof pizzaSchema>;

export function validatePizzaOrder(order: unknown): | {isPizza: true, pizza: pizzaOrder} | {isPizza: false, error: string[]} {
    const result = pizzaSchema.safeParse(order);
    if(result.success) {
        return {isPizza: true, pizza: result.data};
    } else {
        const errors = result.error.issues.map((e) => e.message);
        return {isPizza: false, error: errors};
    }
}