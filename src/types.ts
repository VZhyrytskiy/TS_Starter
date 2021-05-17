import { getBooksByCategoryPromise } from './functions';
import { Book, Person, Author } from './interfaces';

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;
export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type createCustomerFunctionType = (name: string, age?: number, city?: string) => void;

type fn = (a: string, b: number, c: boolean) => symbol;
type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;
export type P1 = Param1<fn>; 
export type P2 = Param2<fn>; 
export type P3 = Param3<fn>; 

type Unpromisify<T> = T extends Promise<infer R> ? R : never;
type fn = ReturnType<typeof getBooksByCategoryPromise>;
export type PromiseValueType = Unpromisify<fn>;



