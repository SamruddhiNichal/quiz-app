import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions = [
    {
      question: 'What is 2 + 2?',
      options: ['1', '2', '3', '4'],
      correctOption: '4',
      selectedOption: null as string | null,
      isCorrect: null as boolean | null
    },
      {
        question: 'What is the capital of France?',
        options: ['Madrid', 'Rome', 'Paris', 'Berlin'],
        correctOption: 'Paris',
        selectedOption: null as string | null,
        isCorrect: null as boolean | null
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        correctOption: 'Mars',
        selectedOption: null as string | null,
        isCorrect: null as boolean | null
      },
      {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'O2', 'CH4'],
        correctOption: 'H2O',
        selectedOption: null as string | null,
        isCorrect: null as boolean | null
      },
      {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
        correctOption: 'William Shakespeare',
        selectedOption: null as string | null,
        isCorrect: null as boolean | null
      },
      {
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Kilimanjaro', 'Mount Everest', 'Mount McKinley', 'Mount Fuji'],
        correctOption: 'Mount Everest',
        selectedOption: null as string | null,
        isCorrect: null as boolean | null
      }
    ];
    

  currentQuestionIndex = 0;
  score = 0;
  quizFinished = false;
  
  showLeaderboard = false;

  constructor(private router: Router) {}
  onSelect(option: string) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
  
    if (currentQuestion.selectedOption === null) {
      currentQuestion.selectedOption = option;
  
      if (option === currentQuestion.correctOption) {
        currentQuestion.isCorrect = true;
        this.score++;
      } else {
        currentQuestion.isCorrect = false;
      }
  
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.quizFinished = true;
      }
    }
    
  }

  showLeaderboardAndRestart() {
    this.showLeaderboard = true;
    this.restartQuiz();
  }
 
  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizFinished = false;
  
    this.questions.forEach(question => {
      question.selectedOption = null;
      question.isCorrect = null;
    });
  
    this.router.navigate(['/leaderboard']); 
  }
  
  isOptionCorrect(option: string): boolean {
    return this.questions[this.currentQuestionIndex].correctOption === option &&
           this.questions[this.currentQuestionIndex].selectedOption === option;
  }
  
  isOptionIncorrect(option: string): boolean {
    return this.questions[this.currentQuestionIndex].correctOption !== option &&
           this.questions[this.currentQuestionIndex].selectedOption === option;
  }
  
  
  
  
  
}
