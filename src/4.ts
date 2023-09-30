
class Key {
    private signature: number = Math.random();

    getSignature() {
        return this.signature;
      }

}

class Person{
    private key: Key;

    constructor(key: Key) {
      this.key = key;
    }
  
    getKey() {
      return this.key;
    }

}

abstract class House {
  protected key: Key;
  protected door: boolean;
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  

  comeIn(person: Person): void {
    if (this.door) {
      console.log(`Person is enter the house`);
      this.tenants.push(person);
    } else {
      console.log(`Person cant enter the house`);
    }
  }

  abstract openDoor(key: Key): void;


}

class MyHouse extends House {

  openDoor (key: Key): void {
    if (key.getSignature === this.key.getSignature) {
      console.log(`Door is open with key`);
      this.door = true;
    } else {
      console.log(`Wrong key`);
    }
  }

}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};