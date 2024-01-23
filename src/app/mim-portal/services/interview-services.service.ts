import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Interviews} from "../models/interviews";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterviewServicesService {

    backendEndpoint = "http://localhost:3000";
    private selectedInterview: string = '';

    constructor(private http: HttpClient) { }

    setSelectedInterview(interview: string){
        this.selectedInterview = interview;
    }

    getSelectedInterview(): string {
        return this.selectedInterview;
    }

    getListOfAllInterviews(){
        return this.http.get<Interviews[]>(`${this.backendEndpoint}/apis/interviews`);
    }

    getInterviewDetails(interviewId: string) {
        const response = this.http.get<Interviews>(`${this.backendEndpoint}/apis/interviews/${interviewId}`);
        return response;
    }

    createNewInterview(iCreateInterviewFromData: any): Observable<any>{
        console.log("new interview object before settng headers: ", iCreateInterviewFromData)

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        console.log("This is from server, submitted data: ", iCreateInterviewFromData);

        const newInterviewObject = {
            "dateOfInterview": iCreateInterviewFromData.i_doi,
            "timeOfInterview" : iCreateInterviewFromData.i_toi,
            "recruiterName" : iCreateInterviewFromData.r_name,
            "recruiterEmail": iCreateInterviewFromData.r_email,
            "interviewerName": iCreateInterviewFromData.ir_name,
            "candidateFirstName" : iCreateInterviewFromData.c_firstname,
            "candidateLastName": iCreateInterviewFromData.c_lastname,
            "candidateEmail": iCreateInterviewFromData.c_email,
            "candidateVisaStatus" : iCreateInterviewFromData.c_visa,
            "candidateCertifications" : iCreateInterviewFromData.c_certifications,
            "candidateFrontendSkills": iCreateInterviewFromData.i_frontend_skills,
            "candidateFrontendSkillsRating": iCreateInterviewFromData.i_frontend_skills_rating,
            "candidateBackendSkills": iCreateInterviewFromData.i_backend_skills,
            "candidateBackendSkillsRating": iCreateInterviewFromData.i_backend_skills_rating,
            "candidateCloudSkills": iCreateInterviewFromData.i_cloud_skills,
            "candidateCloudSkillsRating": iCreateInterviewFromData.i_cloud_skills_rating,
            "candidateLinuxDevOpsSkills": iCreateInterviewFromData.i_linux_devops_skills,
            "candidateLinuxDevOpsSkillsRating": iCreateInterviewFromData.i_linux_devops_skills_rating,
            "candidateBusinessKnowledgeRating": iCreateInterviewFromData.i_candidate_business_knowledge_rating,
            "behavioralFeedback": iCreateInterviewFromData.i_candidate_behavior_skills,
            "overallTechnicalFeedback" : iCreateInterviewFromData.i_overall_feedback,
            "candidateTopThreeSkills": iCreateInterviewFromData.i_top_three_skills,
            "interviewForPosition":  iCreateInterviewFromData.i_position,
            "interviewStatus": iCreateInterviewFromData.i_final_result
        }

        console.log("New interview object: ",newInterviewObject);

        return this.http.post<Interviews>(`${this.backendEndpoint}/apis/interviews/interview`, newInterviewObject, {headers});
    }

    updateCurrentInterview(iCreateInterviewFromData: any){
       console.log("This is the data to service from update form: ", iCreateInterviewFromData);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        const newInterviewObjectToUpdate = {
            "dateOfInterview": iCreateInterviewFromData.i_doi,
            "timeOfInterview" : iCreateInterviewFromData.i_toi,
            "recruiterName" : iCreateInterviewFromData.r_name,
            "recruiterEmail": iCreateInterviewFromData.r_email,
            "interviewerName": iCreateInterviewFromData.ir_name,
            "candidateFirstName" : iCreateInterviewFromData.c_firstname,
            "candidateLastName": iCreateInterviewFromData.c_lastname,
            "candidateEmail": iCreateInterviewFromData.c_email,
            "candidateVisaStatus" : iCreateInterviewFromData.c_visa,
            "candidateCertifications" : iCreateInterviewFromData.c_certifications,
            "candidateFrontendSkills": iCreateInterviewFromData.i_frontend_skills,
            "candidateFrontendSkillsRating": iCreateInterviewFromData.i_frontend_skills_rating,
            "candidateBackendSkills": iCreateInterviewFromData.i_backend_skills,
            "candidateBackendSkillsRating": iCreateInterviewFromData.i_backend_skills_rating,
            "candidateCloudSkills": iCreateInterviewFromData.i_cloud_skills,
            "candidateCloudSkillsRating": iCreateInterviewFromData.i_cloud_skills_rating,
            "candidateLinuxDevOpsSkills": iCreateInterviewFromData.i_linux_devops_skills,
            "candidateLinuxDevOpsSkillsRating": iCreateInterviewFromData.i_linux_devops_skills_rating,
            "candidateBusinessKnowledgeRating": iCreateInterviewFromData.i_candidate_business_knowledge_rating,
            "behavioralFeedback": iCreateInterviewFromData.i_candidate_behavior_skills,
            "overallTechnicalFeedback" : iCreateInterviewFromData.i_overall_feedback,
            "candidateTopThreeSkills": iCreateInterviewFromData.i_top_three_skills,
            "interviewForPosition":  iCreateInterviewFromData.i_position,
            "interviewStatus": iCreateInterviewFromData.i_final_result
        }

        return this.http.put<Interviews>(`${this.backendEndpoint}/apis/interviews/${iCreateInterviewFromData._id}`, newInterviewObjectToUpdate, {headers});
    }
}
