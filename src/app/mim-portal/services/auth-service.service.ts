import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {UserData} from "../models/user-data";
import {UserLoginData} from "../models/user-login-data";
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    private tokenTimer: any;
    private isAuthenticated = false;
    private token: string | undefined;
    private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

    getToken(){
        return this.token;
    }

    getIsAuth(){
        return this.isAuthenticated;
    }

    getAuthStatusListener(){
        return this.authStatusListener;
    }

    createUser(
        firstname: string,
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

        this.http.post<{ message: string }>('http://localhost:3000/apis/users/signup', newUserData)
            .subscribe({
                next: (response) =>{
                    this.router.navigate(['/after-signup']);
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

        this.http.post<{ token: string, expiresIn: number}>('http://localhost:3000/apis/users/login', userDataToLogin)
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

                    }}


            )

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
        this.token = '';
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }

    private clearAuthData(){
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    }

}