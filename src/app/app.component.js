const template = require('./app.component.html'); 

const controller = class {
    constructor() {
      this.url = 'https://github.com/preboot/angular-webpack';
    }
}

const  AppComponent = { 
    template, 
    controller
};

export default AppComponent;