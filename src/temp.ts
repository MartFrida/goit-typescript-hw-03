class A {
  protected someProperty = "str";
}

class B extends A {
  showProperty() {
    console.log(this.someProperty); //Немає помилки
  }
}

const a = new A();

const b = new B();

// a.someProperty; // Помилка: 'someProperty' можна викликати лише в межах класу

// b.someProperty; // Та ж помилка

b.showProperty(); // Помилки немає, оскільки 'showProperty' звертається до 'someProperty' всередині класу.

export {};
