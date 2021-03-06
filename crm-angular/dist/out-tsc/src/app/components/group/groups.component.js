"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var group_actions_1 = require("../../actions/group.actions");
var router_actions_1 = require("../../actions/router.actions");
var GroupsComponent = (function () {
    function GroupsComponent(store, groupActions, routerActions) {
        this.store = store;
        this.groupActions = groupActions;
        this.routerActions = routerActions;
        this.groups$ = store.select('groups');
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.store.dispatch(this.groupActions.loadGroups(1, ""));
    };
    GroupsComponent.prototype.addGroup = function () {
        this.store.dispatch(this.routerActions.show(['/groupadd']));
    };
    GroupsComponent.prototype.showDetails = function (id) {
        this.store.dispatch(this.routerActions.go(['groupdetail', id]));
    };
    GroupsComponent.prototype.loadGroups = function (data) {
        this.store.dispatch(this.groupActions.loadGroups(data.page, data.filter));
    };
    return GroupsComponent;
}());
GroupsComponent = __decorate([
    core_1.Component({
        selector: 'groups',
        template: "\n<group-list [groups]=\"groups$ | async\" \n            (addNewGroup) = \"addGroup()\" \n            (groupDetails) = \"showDetails($event)\"\n            (loadGroups)=\"loadGroups($event)\">\n</group-list>"
    }),
    __metadata("design:paramtypes", [store_1.Store,
        group_actions_1.GroupActions,
        router_actions_1.RouterActions])
], GroupsComponent);
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=groups.component.js.map