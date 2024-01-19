import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

    private loggedInUserToken: string = '';

    constructor(private http: HttpClient) { }

    setLoggedInUserToken(userToken: string){
        this.loggedInUserToken = userToken;
        console.log("This is from userService of loggedInUserId: ", this.loggedInUserToken);
    }

    getLoggedInUserToken(): string {
        return this.loggedInUserToken;
    }

}
