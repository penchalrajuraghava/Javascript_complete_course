/*
=========================================
MVC Pattern
=========================================
*/

class Model {
  constructor(data) {
    this.data = data;
  }
}

class View {
  render(data) {
    console.log(data);
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  show() {
    this.view.render(this.model.data);
  }
}

const model = new Model("Hello MVC");

const view = new View();

const controller = new Controller(model, view);

controller.show();
