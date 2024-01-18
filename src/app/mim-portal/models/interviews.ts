import {Time} from "@angular/common";

export interface Interviews {
    dateOfInterview: Date,
    timeOfInterview: Time,
    recruiterName: string,
    recruiterEmail: string,
    candidateFirstName: string,
    candidateLastName: string,
    candidateEmail: string,
    candidateCertifications: string,
    candidateCloudSkills: string,
    candidateCloudSkillsRating: number,
    candidateBackendSkills: string,
    candidateBackendSkillsRating: number,
    candidateLinuxDevOpsSkills: string,
    candidateLinuxDevOpsSkillsRating: number,
    behavioralFeedback: string,
    overallTechnicalFeedback: string,
    candidateTopThreeSkills: string,
    interviewForPosition: string,
    interviewStatus: string,
    id: string,
}
