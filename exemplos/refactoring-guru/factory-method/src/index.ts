interface Button {
  render(): void;
}

class WindowsButton implements Button {
  render(): void {
    console.log("render WindowsButton");
  }
}

class HTMLButton implements Button {
  render(): void {
    console.log("render HTMLButton");
  }
}

abstract class Dialog {
  render(): void {
    console.log('');
    console.log(`It renders ${this.constructor.name}`);
    const button = this.createButton();
    button.render();
  }

  abstract createButton(): Button;
}

class WindowsDialog extends Dialog {
  createButton(): Button {
    console.log(`Creates WindowsButton in ${this.constructor.name}`);
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  createButton(): Button {
    console.log(`Creates HTMLButton in ${this.constructor.name}`);
    return new HTMLButton();
  }
}

class Client {
  initialize(dialog: Dialog): void {
    dialog.render();
  }
}

let dialog = new WindowsDialog();
new Client().initialize(dialog)

dialog = new WebDialog();
new Client().initialize(dialog)
