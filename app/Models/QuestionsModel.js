

export class Question {
    constructor(data) {
        this.question = data.question
        this.category = data.category
        this.difficulty = data.difficulty

    }

    get Template() {
        return `
        <div class="card my-5">
        <h5 class="card-header">Catagory: ${this.category}</h5>
        <div class="card-body">
          <h5 class="card-title">Difficulty: ${this.difficulty}</h5>
          <p class="card-text ">${this.question}</p>
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-primary">Answer</a>
            <a href="#" onclick="app.questionsController.newquestion()" class="btn btn-primary">New Question</a>



    
    `
    }
}