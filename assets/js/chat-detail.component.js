System.register("chat-detail.component", ['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1;
    var ChatDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChatDetailComponent = (function () {
                function ChatDetailComponent() {
                }
                __decorate([
                    core_1.Input()
                ], ChatDetailComponent.prototype, "chat");
                ChatDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'chat-detail',
                        template: "\n    <div *ngIf=\"chat\">\n      <h2>{{chat.name}} details!</h2>\n      <div><label>id: </label>{{chat.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"chat.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
                    })
                ], ChatDetailComponent);
                return ChatDetailComponent;
            }());
            exports_1("ChatDetailComponent", ChatDetailComponent);
        }
    }
});
