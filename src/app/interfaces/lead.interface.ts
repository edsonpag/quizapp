import { FormDataQuiz } from "./form-data.interface";
import { Question } from "./question.interface";
import { Result } from "./results.interface";

export interface Lead {
    id: string,
    formDataQuiz: FormDataQuiz,
    results: Result[],
    ageRange: string,
    questions: Question[],
    startedPlayingTheVideo: boolean,
    vslWatchTimeInSeconds: number,
    checkout: boolean
}