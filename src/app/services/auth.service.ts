import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { AuthResponseData } from './../models/AuthResponseData.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { autoLogout } from '../auth/state/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  timeoutInterval: any;
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `http://localhost:8000/auth/login`,
      { email, password }
    );
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `http://localhost:8000/auth/register`,
      { email, password }
    );
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data?.email,
      data.access_token,
      data?.localId,
      expirationDate
    );
    return user;
  }

  getErrorMessage(data: any) {
    switch (data) {
      case 'Incorrect email or password':
        return 'Email Not Found';
      case 'Email and Password already exist':
        return 'Email and Password already exists';
      case 'Error in authorization format':
        return 'please check link';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));

    this.runTimeoutInterval(user);
  }

  runTimeoutInterval(user: User) {
    const todaysDate = new Date().getTime();
    const expirationDate = user.expireDate.getTime();
    const timeInterval = expirationDate - todaysDate;

    this.timeoutInterval = setTimeout(() => {
      this.store.dispatch(autoLogout());
      //logout functionality or get the refresh token
    }, timeInterval);
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expirationDate
      );
      this.runTimeoutInterval(user);
      return user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('userData');
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }
}
