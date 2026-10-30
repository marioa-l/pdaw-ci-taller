const { dueDate } = require("../src/dueDate");

const from = new Date("2026-10-05T12:00:00Z");

test("un socio tiene 14 días", () => {
  expect(dueDate(from, "member").toISOString()).toBe(
    "2026-10-19T12:00:00.000Z",
  );
});

test("la bibliotecaria tiene 30 días", () => {
  expect(dueDate(from, "librarian").toISOString()).toBe(
    "2026-11-04T12:00:00.000Z",
  );
});

test("un rol desconocido lanza TypeError", () => {
  expect(() => dueDate(from, "visitor")).toThrow(TypeError);
});

//test("demostración de falla", () => {
//  expect(dueDate(from, "member").getUTCDate()).toBe(20);
//});
