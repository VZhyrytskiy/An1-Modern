import angular from 'angular';
import  { AppComponent } from './app.component';

import '../style/app.css';


const AppModule = angular.module('app', [])
  .component('app', AppComponent);

export default AppModule;