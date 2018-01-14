import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ChatPageComponent from './chat-page/chat-page.component';

const ChatRoutingModule = angular
    .module('chatRoutingModule', [uiRouter])
    .config(/*@ngInject*/ ($stateProvider) => {
        $stateProvider
            .state('chat', {
                url: '',
                // we can use component instead of template + controller + controllerAs
                component: 'chatPageComponent'
            })
    })
    .component('chatPageComponent', ChatPageComponent)

export default ChatRoutingModule;

