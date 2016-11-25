System.register("app.component", ['@angular/core', './chat-detail.component', './chat.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, chat_detail_component_1, chat_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chat_detail_component_1_1) {
                chat_detail_component_1 = chat_detail_component_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(chatService) {
                    this.chatService = chatService;
                    this.title = 'Chats';
                }
                AppComponent.prototype.getChats = function () {
                    var _this = this;
                    this.chatService.getChats().then(function (chats) { return _this.chats = chats; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getChats();
                };
                AppComponent.prototype.onSelect = function (chat) { this.selectedChat = chat; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h2>Chats</h2>\n    <div class=\"grid--md4\">\n      <div class=\"grid__item\" *ngFor=\"let chat of chats\"\n        [class.selected]=\"chat === selectedChat\">\n        <div class=\"card--chat\">\n          <a (click)=\"onSelect(chat)\">\n          <img class=\"card__image\" src=\"http://placekitten.com/g/450/300\"/>\n          </a>\n          <h3 class=\"card__title\">\n            <a (click)=\"onSelect(chat)\">{{chat.name}}</a>\n            </h3>\n          <a class=\"button\" (click)=\"onSelect(chat)\">join chat</a>\n      </div>\n    </div>\n    <chat-detail [chat]=\"selectedChat\"></chat-detail>\n    ",
                        directives: [chat_detail_component_1.ChatDetailComponent],
                        providers: [chat_service_1.ChatService]
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
