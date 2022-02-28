import { ProxyState } from "../AppState.js"
import { Question } from "../Models/QuestionsModel.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"


function _drawquestion() {
    let template = ''
    ProxyState.questions.forEach(q => template += q.Template)
    document.getElementById('questions').innerHTML = template
}

export class QuestionsController {
    constructor() {

        ProxyState.on('questions', _drawquestion)
        this.getquestions()
    }




    async getquestions() {

        try {
            console.log('getting questions')
            await questionsService.getquestions()

        } catch (error) {
            console.log(error)
            Pop.toast(error.message, "error")

        }
    }
    newquestion() {
        questionsService.getquestions()
        _drawquestion
    }
}