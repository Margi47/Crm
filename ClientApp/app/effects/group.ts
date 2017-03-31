﻿import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';

import { AppState } from '../reducers';
import { GroupActions } from '../actions/group.actions';
import { GroupService } from '../services/group.service';

@Injectable()
export class GroupEffects {
    constructor(
        private update$: Actions,
        private groupActions: GroupActions,
        private service: GroupService,
    ) { }

    @Effect() loadGroups$ = this.update$
        .ofType(GroupActions.LOAD_GROUPS)
        .switchMap(() => this.service.getGroups())
        .map(groups => this.groupActions.loadGroupsSuccess(groups));

    @Effect() getGroup$ = this.update$
        .ofType(GroupActions.GET_GROUP)
        .map(action => action.payload)
        .switchMap(id => this.service.getGroup(id))
        .map(group => this.groupActions.getGroupSuccess(group));

    @Effect() saveGroup$ = this.update$
        .ofType(GroupActions.SAVE_GROUP)
        .map(action => action.payload)
        .switchMap(group => this.service.update(group))
        .map(group => this.groupActions.saveGroupSuccess(group));

    @Effect() addGroup$ = this.update$
        .ofType(GroupActions.ADD_GROUP)
        .map(action => action.payload)
        .switchMap(group => this.service.addGroup(group))
        .map(group => this.groupActions.addGroupSuccess(group));

    @Effect() deleteGroup$ = this.update$
        .ofType(GroupActions.DELETE_GROUP)
        .map(action => action.payload)
        .switchMap(group => this.service.deleteGroup(group))
        .map(group => this.groupActions.deleteGroupSuccess(group));
}