import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UserServiceService} from "../../services/user-service.service";

@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.scss']
})
export class IdashboardComponent implements OnInit {

  constructor(private router: Router, private userService: UserServiceService) { }

    ngOnInit(): void {
        this.getUserToken();
    }

    navigateToInterviews(){
          this.router.navigate(['iinterviews']);
    }

    navigateToTodos(){
      this.router.navigate(['itodos']);
    }

    getUserToken(){
        const userTokenIs = this.userService.getLoggedInUserToken();
    }
}
