import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService} from "../../services/auth-service.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-ilanding-page',
  templateUrl: './ilanding-page.component.html',
  styleUrls: ['./ilanding-page.component.scss']
})
export class IlandingPageComponent implements OnInit {
    private loading: boolean = false;

  constructor(public authService: AuthServiceService, private messageService: MessageService,) { }

    isSignInFormVisible = false;
    isSignUpFormVisible = false;
    isRegistrationSuccessful = false;

    showSignInForm() {
        this.isSignInFormVisible = !this.isSignInFormVisible;
        this.isSignUpFormVisible = !this.isSignUpFormVisible;
    }

    showSignupForm() {
        this.isSignUpFormVisible = !this.isSignUpFormVisible;
        this.isSignInFormVisible = !this.isSignInFormVisible;
    }

    ngOnInit(): void {}

    showSuccessToastAndRoute() {
        console.log("This is frm show toast: ", this.authService.incorrectPassword );

    }


    onLogin(form: NgForm){
        console.log(form.value)
        if(form.invalid){
            return;
        }
        this.authService.login(form.value.signin_email, form.value.signin_password);

        if(!this.authService.incorrectPassword){
            this.messageService.add({
                severity: 'error',
                summary: 'Incorrect password.',
                detail: 'Please re-enter your credentials.',
                life: 3000
            });
            this.authService.incorrectPassword = false;
        }

        if(this.authService.incorrectPassword){
            this.messageService.add({
                severity: 'success',
                summary: 'Logged in successfully.',
                detail: 'You have successfully logged In.',
                life: 3000
            });
        }
    }

    onSignup(form: NgForm) {
        if(form.invalid){
            return;
        }
        this.authService.createUser(
            form.value.firstname,
            form.value.lastname,
            form.value.signup_email,
            form.value.mobile,
            form.value.signup_password
        );

        this.isRegistrationSuccessful = !this.isRegistrationSuccessful;
        this.isSignUpFormVisible = !this.isSignUpFormVisible;
    }
}
