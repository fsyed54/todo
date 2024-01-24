import { Component, OnInit } from '@angular/core';
import { ScrollResizableDirective } from "../../custom-diretives/scroll-resizable.directive";
import {FormBuilder, FormGroup, FormControl, Validators, NgForm, Form} from "@angular/forms";
import {Router} from "@angular/router";
import {InterviewServicesService} from "../../services/interview-services.service";
import {Interviews} from "../../models/interviews";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-iinterviews-cu',
  templateUrl: './iinterviews-cu.component.html',
  styleUrls: ['./iinterviews-cu.component.scss'],
    providers: [ScrollResizableDirective]
})
export class IinterviewsCuComponent implements OnInit {

    loading = false;
    display: boolean = false;
    interviewsList: Interviews[] = [];

    constructor(

        public interviewService: InterviewServicesService,
        private messageService: MessageService,
        public router: Router) { }


    ngOnInit(): void {

    }
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
