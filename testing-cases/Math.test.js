const { getUser, sum } = require("../functions/Math");

describe('Testing matchers', () => {
  test('sum returns correct values using toBe', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('same object reference using toBe', () => {
    const user = getUser();
    expect(user).toBe(user);
  });

  test('different objects with same values using toEqual', () => {
    const expectedUser = { name: "Alice", age: 30 };
    expect(getUser()).toEqual(expectedUser);
  });

  // test('different objects with same values using toBe (should fail)', () => {
  //   const expectedUser = { name: "Alice", age: 30 };
  //   expect(getUser()).toBe(expectedUser); 
  // });
});

