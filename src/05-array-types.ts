/**
 *array 类型
 */

const arr: Array<number> = [10, 22, 99];
const arr2: number[] = [1, 23, 4];

function sum(...args) {
  return args.reduce((prev:number, current:number) => prev + current, 0);
}
