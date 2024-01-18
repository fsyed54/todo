import { Component, OnInit } from '@angular/core';
import { InterviewServicesService } from "../../services/interview-services.service";

@Component({
  selector: 'app-iinterviews-details',
  templateUrl: './iinterviews-details.component.html',
  styleUrls: ['./iinterviews-details.component.scss']
})
export class IinterviewsDetailsComponent implements OnInit {

    selectedInterview: any;
    currentInterview: any;
    behavioralSkillsRatingValue!: number;
    technicalSkillsRatingValue!: number;

  constructor(
      public interviewService: InterviewServicesService
  ) { }

  ngOnInit(): void {
      this.selectedInterview = this.interviewService.getSelectedInterview();
      console.log("This ID is from interview details ngOnInit", this.selectedInterview);
      this.fetchMoreInterviewDetails(this.selectedInterview);
  }

    fetchMoreInterviewDetails(interviewId: string){
        this.interviewService.getInterviewDetails(interviewId)
            .subscribe({
                next: (value: any) => {
                    console.log("Interview Details: ", value.data[0]);
                    this.currentInterview = value.data[0]
                    const date = new Date(this.currentInterview.dateOfInterview);
                    // @ts-ignore
                    this.currentInterview.dateOfInterview = date.toLocaleDateString()
                },
                error: (error: any) => {
                    console.error("Error is: ", error)
                },
                complete: () => {

                }
            })
    }

}
