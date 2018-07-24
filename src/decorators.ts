export function sealed(name: string) {
  return function(target: Function): void {
    console.log(`Sealing the constructor: ${name}`);
    Object.seal(target);
    Object.seal(target.prototype);
  };
}
