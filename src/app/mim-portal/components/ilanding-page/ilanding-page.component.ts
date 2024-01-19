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

    ngOnInit(): void {}

    onLogin(form: NgForm){
        console.log(form.value)
        if(form.invalid){
            return;
        }
        this.authService.login(form.value.email, form.value.password);
    }

}
