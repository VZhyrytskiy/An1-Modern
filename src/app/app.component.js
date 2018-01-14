const template = require('./app.component.html'); 

const controller = class {
    constructor() {
      this.url = 'https://github.com/preboot/angular-webpack';
    }
}

export let AppComponent = { 
    template, 
    controller
};