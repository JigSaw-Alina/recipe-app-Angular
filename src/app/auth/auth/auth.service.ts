import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, EndPoint } from 'src/app/service/url';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: string;
}

// interface AuthResponseData {
//   kind: string;
//   idToken: string;X`X`
//   email: string;
//   refreshToken: string;
//   expiresIn: string;
//   localId: string;
// }

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${EndPoint}=${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((resError) => {
          let errorMessage = 'An unknown error occured!';

          if (!resError.error || !resError.error.error) {
            return errorMessage;
          }

          switch (resError.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'EMAIL_EXISTS';
              break;
            case 'INVALID_EMAIL':
              errorMessage = 'INVALID_EMAIL';
              break;
          }
          return throwError(errorMessage);
        })
      );
  }
}
EndPoint;
