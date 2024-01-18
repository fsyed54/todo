import { Component, OnInit } from '@angular/core';
import { ScrollResizableDirective } from "../../custom-diretives/scroll-resizable.directive";
import {FormBuilder, FormGroup, FormControl, Validators, NgForm, Form} from "@angular/forms";
import {Router} from "@angular/router";
import {InterviewServicesService} from "../../services/interview-services.service";
import {Interviews} from "../../models/interviews";

@Component({
  selector: 'app-iinterviews-cu',
  templateUrl: './iinterviews-cu.component.html',
  styleUrls: ['./iinterviews-cu.component.scss'],
    providers: [ScrollResizableDirective]
})
export class IinterviewsCuComponent implements OnInit {

    interviewsList: Interviews[] = [];

    constructor(
        private fb: FormBuilder,
        public interviewService: InterviewServicesService,
        public router: Router) { }

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
    ngOnInit(): void {
        console.log("iCreateUpdate form values are: ", this.iCreateUpdateForm.value);
    }

    onClickSave(){
        if (this.iCreateUpdateForm.valid) {
            console.log('Form submitted:', this.iCreateUpdateForm.value);
            this.interviewService.createNewInterview(this.iCreateUpdateForm.value)
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

    onClickCancel(){
        this.iCreateUpdateForm.reset();
        this.router.navigate(['/iinterviews']);
        console.log('Form canceled');
    }

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];
    resultOutcomes = [
        { name: 'Selected', code: 'selected' },
        { name: 'Keep in hold', code: 'hold' },
        { name: 'Not selected', code: 'not-selected' },
        { name: 'Schedule another round after a week', code: 'reschedule'}
    ];
}


// c_firstname: this.c_firstname,
// c_lastname: this.c_lastname,
// c_email: this.c_email,
// c_visa: this.c_visa,
// c_certifications: this.c_certifications,

// r_name: this.r_name,
// r_email: this.r_email,
// ir_name: this.ir_name,
// i_position: this.i_position,
// i_doi: this.i_doi,
// i_toi: this.i_toi,

// i_frontend_skills: this.i_frontend_skills,
// i_backend_skills: this.i_backend_skills,
// i_cloud_skills: this.i_cloud_skills,
// i_linux_devops_skills: this.i_linux_devops_skills,
// i_overall_feedback: this.i_overall_feedback,
// i_candidate_behavior_skills: this.i_candidate_behaviour_skills,
//
// i_frontend_skills_rating: this.i_frontend_skills_rating,
// i_backend_skills_rating: this.i_backend_skills_rating,
// i_cloud_skills_rating: this.i_cloud_skills_rating,
// i_linux_devops_skills_rating: this.i_linux_devops_rating,
// i_candidate_business_knowledge_rating: this.i_candidate_business_knowledge_rating,
//
// i_top_three_skills: this.i_top_three_skills,
// i_final_result: this.i_final_result


// "dateOfInterview": this.i_doi,
//     "timeOfInterview" : this.i_toi,
//     "recruiterName" : this.r_name,
//     "recruiterEmail": this.r_email,
//     "interviewerName": this.ir_name,
//
//     "candidateFirstName" : this.c_firstname,
//     "candidateLastName": this.c_lastname,
//     "candidateEmail": this.c_email,
//     "candidateVisaStatus" : this.c_visa,
//     "candidateCertifications" : this.c_certifications,
//
//     "candidateFrontendSkills": this.i_frontend_skills,
//     "candidateFrontendSkillsRating": this.i_frontend_skills_rating,
//     "candidateBackendSkills": this.i_backend_skills,
//     "candidateBackendSkillsRating": this.i_backend_skills_rating,
//     "candidateCloudSkills": this.i_cloud_skills,
//     "candidateCloudSkillsRating": this.i_cloud_skills_rating,
//     "candidateLinuxDevOpsSkills": this.i_linux_devops_skills,
//     "candidateLinuxDevOpsSkillsRating": this.i_linux_devops_rating,
//     "candidateBusinessKnowledgeRating": this.i_candidate_business_knowledge_rating,
//
//     "behavioralFeedback": this.i_candidate_behaviour_skills,
//     "overallTechnicalFeedback" : this.i_overall_feedback,
//     "candidateTopThreeSkills": this.i_top_three_skills,
//     "interviewForPosition":  this.i_position,
//     "interviewStatus": this.i_final_result
