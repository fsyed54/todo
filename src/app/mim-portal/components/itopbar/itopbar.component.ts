import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-itopbar',
  templateUrl: './itopbar.component.html',
  styleUrls: ['./itopbar.component.scss']
})
export class ItopbarComponent implements OnInit {

    isAuthenticated: boolean = false;
    username: string = '';
    userToken: string = '';
  constructor(
      private authService: AuthServiceService,
      private cdRef: ChangeDetectorRef,
      private userService: UserServiceService) { }

    ngDoCheck(): void {
        // Detect changes and update the view when the user logs in or out
        if (this.userToken !== this.userService.getLoggedInUserToken()) {
            this.userToken = this.userService.getLoggedInUserToken();
            this.cdRef.detectChanges();
        }
    }

  ngOnInit(): void {

  }

    logout(){
      this.authService.logout();
    }



}
