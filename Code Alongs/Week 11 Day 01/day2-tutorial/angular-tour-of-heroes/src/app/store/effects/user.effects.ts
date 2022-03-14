import { Injectable } from "@angular/core";
import { Effect, ofType,  Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom } from 'rxjs/operators'

import { IAppState } from "../state/app.state";
import {
    EUserActions,
    GetUsers,
    GetUsersSuccess,
    GetUser,
    GetUserSuccess
} from '../actions/user.actions';

// imports for services,http-models, and user.selector required
import { UserService } from '../../services/user.service';
import { IUserHttp } from '../../http-models/user-http.interface';
import { SelectedUserList } from '../selectors/user.selector'
import { IUser } from 'src/app/data-info/interfaces/iuser'; //

@Injectable ()
export class UserEffects { 
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter( user => user.id === +id)[0];
            return of( new GetUserSuccess(selectedUser));
        })
    )

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    )

    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>

    ) {}
}