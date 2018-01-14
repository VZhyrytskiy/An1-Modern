import angular from 'angular';
import  AppComponent from './app.component';
import  ChatModule from './chat/chat.module';

import '../style/app.css';


const AppModule = angular.module('app', [ChatModule.name])
  .component('app', AppComponent);

export default AppModule;