class Key {
  private signature: number = Math.random();
  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public person: string;
  protected door: boolean = false;
  protected tenants: string[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(this.person);
    }
  }
  openDoor(key: Key) {}
}

class MyHouse extends House {
  openDoor(keyPerson: Key) {
    if (keyPerson.getSignature() === key.getSignature()) {
      return (this.door = true);
    } else {
      return (this.door = false);
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
