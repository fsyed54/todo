import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";
import {Subscription} from "rxjs";
import {AppComponent} from "../../../app.component";
import {AppMainComponent} from "../../../app.main.component";

@Component({
  selector: 'app-itopbar',
  templateUrl: './itopbar.component.html',
  styleUrls: ['./itopbar.component.scss']
})
export class ItopbarComponent implements OnInit, OnDestroy {

    userIsAuthenticated: boolean = false;
    userToken: string = '';
    private authListerSubs: Subscription;
    constructor(private authService: AuthServiceService,
                public app: AppComponent,
                public appMain: AppMainComponent) { }

    ngOnInit(): void {
        this.authListerSubs = this.authService.authStatusListener.subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            if (isAuthenticated) {
                this.userToken = this.authService.getToken();
            }
        });
    }

    ngOnDestroy(): void {
        this.authListerSubs.unsubscribe();
    }



    logout(){
        this.authService.logout();
    }



}
