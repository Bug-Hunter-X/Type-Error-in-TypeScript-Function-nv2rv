function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: number, b: any): number {
  if (isNumber(b)) {
    return a + b;
  } else {
    return a; // or throw an error
  }
}

let result1 = addSafe(1, 2); // returns 3
let result2 = addSafe(1, '2'); // returns 1

//Alternative using type assertion
let result3 = add(1, parseInt('2' as string)); // returns 3