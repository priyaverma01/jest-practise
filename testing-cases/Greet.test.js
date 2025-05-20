// greet.test.js

const { getGreeting } = require('../functions/Greet');

test('returns greeting with mocked name', () => {
  // Create a mock function that returns "Alice"
  //mock name 
  const mockNameProvider = jest.fn().mockReturnValue("Alice");
// const mockNameProvider=jest.fn().mockName('add42');
  console.log(mockNameProvider);
  

  // Pass the mock function to getGreeting
  const result = getGreeting(mockNameProvider);

  // Expect it to return greeting using the mocked name
  expect(result).toBe("Hello, Alice!");
});

