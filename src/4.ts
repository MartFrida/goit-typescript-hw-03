class Key {
  private signature: number;
  getSignature() {
    return (this.signature = Math.random());
  }
}

class Person {
  person: string;
  constructor(private key: Key) {}
  getKey() {
    return key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  person: string;
  tenants: string[];
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(this.person);
    }
  }
  openDoor(key: Key) {}
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
  }
  openDoor(keyPerson: Key) {
    if (keyPerson === key) {
      return true;
    } else {
      return false;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
