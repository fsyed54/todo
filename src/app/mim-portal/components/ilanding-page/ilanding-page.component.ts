import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-ilanding-page',
  templateUrl: './ilanding-page.component.html',
  styleUrls: ['./ilanding-page.component.scss']
})
export class IlandingPageComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

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


    onLogin(form: NgForm){
        console.log(form.value)
        if(form.invalid){
            return;
        }
        this.authService.login(form.value.signin_email, form.value.signin_password);
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
