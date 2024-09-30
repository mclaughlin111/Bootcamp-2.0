# Discriminated Unions in TypeScript

## What Are Discriminated Unions?

Discriminated Unions are a pattern in TypeScript that combines union types and literal types to create more type-safe code. They help TypeScript understand which type of a union is being used by introducing a common property, often referred to as a discriminator or tag.

### Components:

- **Union Types**: Allow defining a variable that can hold values of multiple types.
- **Literal Types**: Allow using specific values as types.
- **Discriminator**: A shared property used to differentiate the union members.

### How It Works:

A discriminated union requires:

- A union type (i.e., a type that could be one of several options).
- A common literal property (the discriminator) shared by all the options.

By checking the value of this **discriminator**, TypeScript narrows down the type, making it easier to ensure type-safety in conditional logic.

### Example:

```ts
type Square = { kind: "square"; size: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };
type Circle = { kind: "circle"; radius: number };

type Shape = Square | Rectangle | Circle;
```

Here, `kind` is the discriminator, which allows TypeScript to understand the exact type being handled based on its value.

## Type Narrowing Using the Discriminator:

```ts
function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}
```

By checking the `kind` property in each case, TypeScript knows which type (`Square`, `Rectangle`, or `Circle`) you're working with, allowing safe access to the relevant properties (`size`, `width`, `radius`, etc.).

### Benefits:

- Type Safety: It helps ensure that all possible cases are handled.
- Better Intellisense: Modern editors will give suggestions based on the narrowed type, improving development speed and reducing errors.
- Exhaustiveness Checking: TypeScript can warn you if a switch statement or similar construct is missing one or more possible cases.

### Use Cases:

- Discriminated unions are especially useful in scenarios involving:

- State management (e.g., handling different actions).
- Function overloading.
- Complex form structures.
