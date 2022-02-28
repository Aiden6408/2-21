import { ProxyState } from "../AppState.js"
import { Question } from "../Models/QuestionsModel.js"


class QuestionsService {
    async getquestions() {
        const response = await axios.get('https://opentdb.com/api.php?amount=1')
        console.log('response data', response.data)

        let question = response.data.results.map(q => new Question(q))
        ProxyState.questions = question
    }

}

export const questionsService = new QuestionsService()