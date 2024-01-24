import { Component, OnInit } from '@angular/core';
import { InterviewServicesService } from "../../services/interview-services.service";
import { Interviews } from "../../models/interviews";
import { Router } from "@angular/router";
import {MessageService} from "primeng/api";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-iinterviews-list',
  templateUrl: './iinterviews-list.component.html',
  styleUrls: ['./iinterviews-list.component.scss']
})
export class IinterviewsListComponent implements OnInit {

    interviewsList: Interviews[] = [];
    loading: boolean = false;
    display: boolean = false;
    createdBy: string = "Bhanu Kandregula";

  constructor(
      public interviewService: InterviewServicesService,
      private messageService: MessageService,
      public router: Router,
      private fb: FormBuilder,
  ) { }


    // Candidate details
    c_firstname = new FormControl('', {validators: [Validators.required]});
    c_lastname = new FormControl('', {validators: []});
    c_email = new FormControl('', {validators: []});
    c_visa = new FormControl('', {validators: []});
    c_certifications = new FormControl('', {validators: []});

    // Interview Details
    r_name = new FormControl('', {validators: []});
    r_email = new FormControl('', {validators: []});
    ir_name = new FormControl('', {validators: []});
    i_position  = new FormControl('', {validators: []});
    i_doi = new FormControl('', {validators: []});
    i_toi  = new FormControl('', {validators: []});


    // Technical Feedback
    i_frontend_skills  = new FormControl('', {validators: []});
    i_backend_skills  = new FormControl('', {validators: []});
    i_cloud_skills  = new FormControl('', {validators: []});
    i_linux_devops_skills  = new FormControl('', {validators: []});
    i_overall_feedback  = new FormControl('', {validators: []});
    i_candidate_behaviour_skills  = new FormControl('', {validators: []});

    // Overall Technical Ratings
    i_frontend_skills_rating  = new FormControl('', {validators: []});
    i_backend_skills_rating  = new FormControl('', {validators: []});
    i_cloud_skills_rating  = new FormControl('', {validators: []});
    i_linux_devops_rating  = new FormControl('', {validators: []});
    i_candidate_business_knowledge_rating  = new FormControl('', {validators: []});

    // Interview Outcomes
    i_top_three_skills  = new FormControl('', {validators: []});
    i_final_result  = new FormControl('', {validators: []});

    iCreateUpdateForm = this.fb.group({
        c_firstname: this.c_firstname,
        c_lastname: this.c_lastname,
        c_email: this.c_email,
        c_visa: this.c_visa,
        c_certifications: this.c_certifications,
        r_name: this.r_name,
        r_email: this.r_email,
        ir_name: this.ir_name,
        i_position: this.i_position,
        i_doi: this.i_doi,
        i_toi: this.i_toi,
        i_frontend_skills: this.i_frontend_skills,
        i_backend_skills: this.i_backend_skills,
        i_cloud_skills: this.i_cloud_skills,
        i_linux_devops_skills: this.i_linux_devops_skills,
        i_overall_feedback: this.i_overall_feedback,
        i_candidate_behavior_skills: this.i_candidate_behaviour_skills,
        i_frontend_skills_rating: this.i_frontend_skills_rating,
        i_backend_skills_rating: this.i_backend_skills_rating,
        i_cloud_skills_rating: this.i_cloud_skills_rating,
        i_linux_devops_skills_rating: this.i_linux_devops_rating,
        i_candidate_business_knowledge_rating: this.i_candidate_business_knowledge_rating,
        i_top_three_skills: this.i_top_three_skills,
        i_final_result: this.i_final_result
    });

  ngOnInit() {
      this.fetchInterviewsList();
  }

onClickCancel(){
    this.iCreateUpdateForm.reset();
    this.router.navigate(['/iinterviews']);
    console.log('Form canceled');
}
createInterview(){
    // this.router.navigate(['/icu']);
    this.display = true;
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

showSuccessToastAndRoute() {
    this.loading = true;

    this.messageService.add({
        severity: 'info',
        summary: 'Please wait...',
        detail: 'Processing your request.',
        life: 1000
    });

    setTimeout(() => {

        this.messageService.add({
            severity: 'success',
            summary: 'Interview Created',
            detail: 'The interview was created successfully.',
            life: 3000
        });

        // Wait for the toast to be displayed (you can adjust the delay based on your needs)
        setTimeout(() => {
            // Route to the dashboard
            this.display = false;
            this.router.navigate(['/iinterviews']);
        }, 3000);



    }, 1000);

}

onClickSave(){
    this.showSuccessToastAndRoute();
    if (this.iCreateUpdateForm.valid) {
        console.log('Form submitted:', this.iCreateUpdateForm.value);

        const data =  { ...this.iCreateUpdateForm.value, createdBy: this.createdBy };

        console.log("This is the final objet to save: ",data);

        this.interviewService.createNewInterview(data)
            .subscribe({
                next: (value: any) => {

                },
                error: (error: any) => {
                    console.error("Error is: ", error)
                },
                complete: () => {

                }
            })

    } else {
        console.log('Form is invalid. Please check the fields.');
    }
}

}
