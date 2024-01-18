import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.scss']
})
export class IdashboardComponent implements OnInit {

  constructor(private router: Router) { }

    navigateToInterviews(){
          this.router.navigate(['iinterviews']);
    }

    navigateToTodos(){
      this.router.navigate(['itodos']);
    }



  ngOnInit(): void {
  }

}
