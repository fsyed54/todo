import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService} from "../../services/auth-service.service";
import {UserServiceService} from "../../services/user-service.service";

@Component({
  selector: 'app-ilanding-page',
  templateUrl: './ilanding-page.component.html',
  styleUrls: ['./ilanding-page.component.scss']
})
export class IlandingPageComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

    isSignUpFormVisible = false;


    ngOnInit(): void {}

    showSignupForm(){
        this.isSignUpFormVisible = !this.isSignUpFormVisible;
    }

    onLogin(form: NgForm){
        console.log(form.value)
        if(form.invalid){
            return;
        }
        this.authService.login(form.value.signin_email, form.value.signin_password);
    }

}
