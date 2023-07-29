import { Category } from "../enums/category.enum"

export interface Question {
    id: number,
    text: string,
    answers: {text: string, description: string, selected: boolean}[],
    showAlert: boolean
    category: Category
}