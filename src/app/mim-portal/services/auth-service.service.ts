import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserData} from "../models/user-data";
import {UserLoginData} from "../models/user-login-data";
import {Subject} from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    backendUrl = environment.baseUrl;
    private tokenTimer: any;
    private isAuthenticated = false;
    private token: string | undefined;
    public authStatusListener = new Subject<boolean>();
    private jwtHelper = new JwtHelperService();

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

  constructor(
      private http: HttpClient,
      private router: Router) { }

    getToken(){
        return this.token;
    }

    getIsAuth(){
        return this.isAuthenticated;
    }

    getAuthStatusListener(){
      console.log("getAuthStatusListener status: ", this.authStatusListener);
        return this.authStatusListener.asObservable();
    }

    createUser(firstname: string,
        lastname: string,
        email: string,
        mobile: string,
        password: string){

        const newUserData: UserData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            mobile: mobile,
            password: password,
        }

        this.http.post<{ message: string }>(`${this.backendUrl}/apis/users/signup`, newUserData)
            .subscribe({
                next: (response) =>{
                    return response;
                },
                error: (error) => {
                    console.error("Error while creating new user", error)
                },
                complete: () => {

                }
            });
    }
    login(email: string, password: string){

        const userDataToLogin: UserLoginData = {
            email: email,
            password: password,
        }

        console.log("Headers for login: ,", this.headers);


        console.log("This is backend URL: ", this.backendUrl);
        this.http.post<{ token: string, expiresIn: number}>(`${this.backendUrl}/apis/users/login`, userDataToLogin, {headers: this.headers})
            .subscribe({
                next: (response) =>{

                    console.log("Used logged in successfully", response)
                    const token = response.token;
                    this.token = token;
                    if(token){
                        const expiredInDuration = response.expiresIn;
                        this.setAuthTimer(expiredInDuration);

                        this.isAuthenticated = true;
                        this.authStatusListener.next(true);

                        const now = new Date();
                        const expirationDate = new Date(now.getTime() + expiredInDuration * 1000);

                        this.saveAuthData(token, expirationDate);

                        console.log("Just about to navigate");

                        this.router.navigate(['/idashboard']);
                    }else{
                        console.log("Something is wrong with the token")
                    }
                },
                    error: (error) => {
                    console.error("Error while creating new user", error)
                },
                    complete: () => {

                    }
            })

    }

    private saveAuthData(token: string, expirationDate: Date){
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
    }

    setAuthTimer(duration: number){
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }

    logout(){
        this.authStatusListener.next(false);
        this.token = '';
        this.isAuthenticated = false;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }

    private clearAuthData(){
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    }

    getDecodedTokenValues() {
      if(this.token){
          return this.jwtHelper.decodeToken(this.token);
      }
      return null;
    }

}
