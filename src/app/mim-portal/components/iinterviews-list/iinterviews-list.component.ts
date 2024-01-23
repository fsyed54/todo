import { Component, OnInit } from '@angular/core';
import { InterviewServicesService } from "../../services/interview-services.service";
import { Interviews } from "../../models/interviews";
import { Router } from "@angular/router";

@Component({
  selector: 'app-iinterviews-list',
  templateUrl: './iinterviews-list.component.html',
  styleUrls: ['./iinterviews-list.component.scss']
})
export class IinterviewsListComponent implements OnInit {

    interviewsList: Interviews[] = [];
    loading: boolean = false;
  constructor(
      public interviewService: InterviewServicesService,
      public router: Router
  ) { }

  ngOnInit() {
      this.fetchInterviewsList();
  }

createInterview(){
    this.router.navigate(['/icu']);
}

fetchInterviewsList() {
    this.interviewService.getListOfAllInterviews().subscribe({
        next: (value: any) => {
            this.interviewsList = value.data;
            this.interviewsList.forEach(interview => {
                const date = new Date(interview.dateOfInterview);
                // @ts-ignore
                interview.dateOfInterview = date.toLocaleDateString()
            })

            console.log(this.interviewsList);
        },
        error: (error: any) => {
            console.error("Error is: ", error)
        },
        complete: () => {

        }
    });
}

getRowIndex(rowIndex: number): number {
    return rowIndex + 1;
}

onRowClick(interview: any)  {
    const interviewId = interview.candidate_id;
    console.log("This is the clicked interview ID: ",interviewId);

    this.interviewService.setSelectedInterview(interviewId);
    this.router.navigate(['/iinterviews', interviewId]);
}

}
