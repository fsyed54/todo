import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.scss']
})
export class IdashboardComponent implements OnInit {

    isAuthenticated: boolean = false;
  constructor(private router: Router, private authService: AuthServiceService) { }

    ngOnInit(): void {
      const token = this.authService.getToken();
      if(token){
          this.isAuthenticated = true;
      }
      console.log("this is token: ", token);
    }

    navigateToInterviews(){
          this.router.navigate(['iinterviews']);
    }

    navigateToTodos(){
      this.router.navigate(['itodos']);
    }

}
