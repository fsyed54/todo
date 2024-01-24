import { Component, OnInit } from '@angular/core';
import { InterviewServicesService } from "../../services/interview-services.service";
import { Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from "@angular/common";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-iinterviews-details',
  templateUrl: './iinterviews-details.component.html',
  styleUrls: ['./iinterviews-details.component.scss']
})
export class IinterviewsDetailsComponent implements OnInit {

    selectedInterview: any;
    currentInterview: any;
    editForm: FormGroup;
    display: boolean = false;
    loading = false;

  constructor(
      public interviewService: InterviewServicesService,
      private router: Router,
      private fb: FormBuilder,
      private messageService: MessageService,
  ) {

      this.editForm = this.fb.group({
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
          i_candidate_behavior_skills: this.i_candidate_behavior_skills,
          i_frontend_skills_rating: this.i_frontend_skills_rating,
          i_backend_skills_rating: this.i_backend_skills_rating,
          i_cloud_skills_rating: this.i_cloud_skills_rating,
          i_linux_devops_skills_rating: this.i_linux_devops_skills_rating,
          i_top_three_skills: this.i_top_three_skills,
          i_final_result: this.i_final_result,
          i_candidate_business_knowledge_rating: this.i_candidate_business_knowledge_rating
      });
  }

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
    i_candidate_behavior_skills  = new FormControl('', {validators: []});

    // Overall Technical Ratings
    i_frontend_skills_rating  = new FormControl('', {validators: []});
    i_backend_skills_rating  = new FormControl('', {validators: []});
    i_cloud_skills_rating  = new FormControl('', {validators: []});
    i_linux_devops_skills_rating  = new FormControl('', {validators: []});


    // Interview Outcomes
    i_top_three_skills  = new FormControl('', {validators: []});
    i_final_result  = new FormControl('', {validators: []});
    i_candidate_business_knowledge_rating  = new FormControl('', {validators: []});

    ngOnInit(): void {
      this.selectedInterview = this.interviewService.getSelectedInterview();
      this.fetchMoreInterviewDetails(this.selectedInterview);
  }

    showSuccessToastAndRoute() {
        this.loading = true;

        this.messageService.add({
            severity: 'info',
            summary: 'Please wait...',
            detail: 'Processing your request.',
            life: 1000
        });

        this.messageService.add({
            severity: 'success',
            summary: 'Interview Updation',
            detail: 'The interview was updated successfully.',
            life: 6000
        });

        setTimeout(() => {
            this.router.navigate(['/iinterviews']);
        }, 2000);


    }

    onClickCancel() {
        this.router.navigate(['/iinterviews']);
        console.log('Form canceled');
    }

    onClickEdit() {
        this.display = true;
        this.interviewService.setSelectedInterview(this.currentInterview)
        this.fetchMoreInterviewDetailsToEdit(this.currentInterview.candidate_id);
    }

    fetchMoreInterviewDetails(interviewId: string){
        this.interviewService.getInterviewDetails(interviewId)
            .subscribe({
                next: (value: any) => {
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

    fetchMoreInterviewDetailsToEdit(interviewId: string){

        this.interviewService.getInterviewDetails(interviewId)
            .subscribe({
                next: (value: any) => {
                    console.log("Interview Details: ", value.data[0]);
                    this.currentInterview = value.data[0]

                    const date = new Date(this.currentInterview.dateOfInterview);
                    console.log("This is the time: ", this.currentInterview.timeOfInterview);
                    // @ts-ignore
                    this.currentInterview.dateOfInterview = date.toLocaleDateString();

                    this.editForm.patchValue({
                        c_firstname: this.currentInterview.candidateFirstName,
                        c_lastname: this.currentInterview.candidateLastName,
                        c_email: this.currentInterview.candidateEmail,
                        c_visa: this.currentInterview.candidateVisaStatus,
                        c_certifications: this.currentInterview.candidateCertifications,
                        r_name: this.currentInterview.recruiterName,
                        r_email: this.currentInterview.recruiterEmail,
                        ir_name: this.currentInterview.interviewerName,
                        i_position: this.currentInterview.interviewForPosition,
                        i_doi: this.currentInterview.dateOfInterview,
                        i_toi: this.currentInterview.timeOfInterview,
                        i_frontend_skills: this.currentInterview.candidateFrontendSkills,
                        i_backend_skills: this.currentInterview.candidateBackendSkills,
                        i_cloud_skills: this.currentInterview.candidateCloudSkills,
                        i_linux_devops_skills: this.currentInterview.candidateLinuxDevOpsSkills,
                        i_overall_feedback: this.currentInterview.overallTechnicalFeedback,
                        i_candidate_behavior_skills: this.currentInterview.behavioralFeedback,
                        i_frontend_skills_rating: this.currentInterview.candidateFrontendSkillsRating,
                        i_backend_skills_rating: this.currentInterview.candidateBackendSkillsRating,
                        i_cloud_skills_rating: this.currentInterview.candidateCloudSkillsRating,
                        i_linux_devops_skills_rating: this.currentInterview.candidateLinuxDevOpsSkillsRating,
                        i_top_three_skills: this.currentInterview.candidateTopThreeSkills,
                        i_final_result: this.currentInterview.interviewStatus,
                        i_candidate_business_knowledge_rating: this.currentInterview.candidateBusinessKnowledgeRating
                    });

                },
                error: (error: any) => {
                    console.error("Error is: ", error)
                },
                complete: () => {

                }
            })
    }

    onClickSaveInEdit() {
        this.showSuccessToastAndRoute();
        if (this.editForm.valid) {
            const updatedData = {...this.editForm.value, _id: this.currentInterview._id};
            this.interviewService.updateCurrentInterview(updatedData)
                .subscribe({
                    next: (value: any) => {
                        console.log(value);
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
