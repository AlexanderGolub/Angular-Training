import { Action } from '@ngrx/store';

export enum ActionTypes {
  StartApplication = '[Authentication] Start app',
  Initialize = '[Authentication] Initialize state',
  LogIn = '[Authentication] Log in',
  SaveUserInfo = '[Authentication] Save user info',
  LogOut = '[Authentication] Log out',
};

export class StartApplication implements Action {
  readonly type = ActionTypes.StartApplication;
};

export class Initialize implements Action {
  readonly type = ActionTypes.Initialize;

  constructor(public payload: { login: string; token: string }) { }
};

export class LogIn implements Action {
  readonly type = ActionTypes.LogIn;

  constructor(public payload: { login: string; password: string }) { }
};

export class SaveUserInfo implements Action {
  readonly type = ActionTypes.SaveUserInfo;

  constructor(public payload: { login: string; token: string }) { }
};

export class LogOut implements Action {
  readonly type = ActionTypes.LogOut;
};

export type ActionsUnion = StartApplication | Initialize | LogIn | LogOut | SaveUserInfo;
