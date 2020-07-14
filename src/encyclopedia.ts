import { ReferenceItem } from './classes';

export default class Encyclopedia extends ReferenceItem {
  constructor(id: number, newTitle: string, newYear: number, public edition: number) {
    super(id, newTitle, newYear);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`);
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}
