System.register("app.component", ['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1;
    var CHATS, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CHATS = [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }
            ];
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Chats';
                    this.chats = CHATS;
                }
                AppComponent.prototype.onSelect = function (chat) { this.selectedChat = chat; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h2>Chats</h2>\n    {{chats}}\n    <ul>\n    </ul>\n    <chat-detail [hero]=\"selectedChat\"></chat-detail>\n    "
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
