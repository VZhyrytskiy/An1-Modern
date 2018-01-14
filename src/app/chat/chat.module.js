import angular from 'angular';
import MatchWindowHeight from './shared/utilities/match-window-height.directive';

import ChatRoutingModule from './chat-routing.module';

const ChatModule = angular
    .module('chatModule', [ChatRoutingModule.name])
    .directive('matchWindowHeight', MatchWindowHeight);

export default ChatModule;

