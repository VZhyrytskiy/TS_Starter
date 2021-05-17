import { makeProperty } from './functions';

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
export function writable(isWritable: boolean) {
  return function(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(`Setting ${propertyKey}.`);
    descriptor.writable = isWritable;

    return descriptor;
  };
}

export function timeout(milliseconds: number = 0) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any) {
      
      if (window.confirm('Are you sure?')) {
        setTimeout(() => {
          originalMethod.apply(this, args);
        }, milliseconds);
      }
    };

    return descriptor;
  };
}

export function logParameter(
  target: Object,
  methodName: string,
  index: number
) {
  console.log(target);
  console.log(methodName);
  console.log(index);

  const key = `${methodName}_decor_params_indexes`;

  if (Array.isArray(target[key])) {
    target[key].push(index);
  } else {
    target[key] = [index];
  }
}

export function logMethod(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args) {
    const indexes = target[`${methodName}_decor_params_indexes`];
    if (Array.isArray(indexes)) {
      args.forEach((arg, index) => {
        if (indexes.indexOf(index) !== -1) {
          const arg = args[index];
          console.log(
            `Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`
          );
        }
      });
    }
    console.log(`this: `, this);
    const result = originalMethod.apply(this, args);
    return result;
  };

  return descriptor;
}



// property decorator factory
export function format(pref: string = 'Mr./Mrs.') {
  // property decorator
  return function(target: any, propertyName: string) {
    makeProperty(
      target,
      propertyName,
      value => `${pref} ${value}`,
      value => value
    );
  };
}
