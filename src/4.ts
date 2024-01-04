class MyHouse {
  person: Person;
  key: Key;
  constructor(key: Key) {}

  openDoor(person: Person) {
    return person;
  }
  comeIn(person: Person) {
    if (person.getKey()) {
      return this.person;
    }
  }
}
class Person {
  person: string;
  constructor(key: Key) {}
  getKey() {
    return person;
  }
}
class Key {
  key: number;
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
