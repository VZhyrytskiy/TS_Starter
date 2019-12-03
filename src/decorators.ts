export function sealed(name: string) {
  return function(target: Function): void {
    console.log(`Sealing the constructor: ${name}`);
    Object.seal(target);
    Object.seal(target.prototype);
  };
}

export function logger<TFunction extends Function>(
  target: TFunction
): TFunction {
  let newConstructor: Function = function() {
    console.log(`Creating new instance.`);
    console.log(target);

    this.age = 30;
  };
  // это нужно так, как добавлен декоратор sealed и он запрещает добавлять методы
  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;

  // добавим новый метод
  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
  };

  return <TFunction>newConstructor;
}
