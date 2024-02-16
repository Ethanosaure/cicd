import { describe, it, expect } from "vitest";
import { generateText } from "./generateText";

describe("generateText Unit Test Suites", () => {
  it("should be return something", () => {
    expect(generateText("du texte")).toBeDefined();
  });

  it("should be return a string", () => {
    expect(typeof generateText("du texte")).toBe("string");
  });

  it("should be return `3 ptits tours et puis s'en vont`", () => {
    expect(generateText("puis s'en vont")).toBe(
      "3 ptits tours et puis s'en vont",
    );
  });
});
