interface Button {
  render(): void;
}

class WinButton implements Button {
  render(): void {
    console.log(`Render ${this.constructor.name}`);
  }
}

class MacButton implements Button {
  render(): void {
    console.log(`Render ${this.constructor.name}`);
  }
}

interface Checkbox {
  render(): void;
}

class WinCheckbox implements Checkbox {
  render(): void {
    console.log(`Render ${this.constructor.name}`);
  }
}

class MacCheckbox implements Checkbox {
  render(): void {
    console.log(`Render ${this.constructor.name}`);
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WinFactory implements GUIFactory {

  constructor() {
    console.log(`Creates UI from ${this.constructor.name}`);
  }

  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class MacFactory implements GUIFactory {

  constructor() {
    console.log(`Creates UI from ${this.constructor.name}`);
  }

  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

class Client {
  private factory: GUIFactory;
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  createUI(): void {
    this.button.render();
    this.checkbox.render();
    console.log("");
  }
}

const winFactory: GUIFactory = new WinFactory();
let client = new Client(winFactory);
client.createUI();

const macFactory: GUIFactory = new MacFactory();
client = new Client(macFactory);
client.createUI();

