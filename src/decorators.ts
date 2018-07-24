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
  // это нужно так, как добавлен декоратор sealed и он запрещает обавлять методы
  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;

  // добавим новый метод
  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
  };

  return <TFunction>newConstructor;
}

export function timeout(milliseconds: number = 0) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);
    };

    return descriptor;
  };
}
