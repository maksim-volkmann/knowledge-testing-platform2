import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export interface Question {
  id: number;
  text: string;
  answer: string[];
  correctAnswer: number;
}

@Component({
  selector: 'app-questioner-viewer',
  templateUrl: './questioner-viewer.component.html',
  styleUrls: ['./questioner-viewer.component.scss']
})
export class QuestionerViewerComponent {

  favoriteSeason: string = ''
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  questions: Question[] = [
    {
      id: 1,
      text: "What is the capital of France?",
      answer: ["London", "Paris", "Madrid", "Rome"],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "What is the tallest mountain in the world?",
      answer: ["Everest", "K2", "Kilimanjaro", "Denali"],
      correctAnswer: 0
    },
    {
      id: 3,
      text: "Who is the author of the Harry Potter series?",
      answer: ["J.K. Rowling", "Stephenie Meyer", "Suzanne Collins", "Veronica Roth"],
      correctAnswer: 0
    },
    {
      id: 4,
      text: "What is the largest animal in the world?",
      answer: ["Elephant", "Giraffe", "Blue whale", "Hippopotamus"],
      correctAnswer: 2
    },
    {
      id: 5,
      text: "What is the currency of Japan?",
      answer: ["Yen", "Dollar", "Pound", "Euro"],
      correctAnswer: 0
    },
    {
      id: 6,
      text: "What is the largest country in South America?",
      answer: ["Argentina", "Brazil", "Colombia", "Peru"],
      correctAnswer: 1
    },
    {
      id: 7,
      text: "Which planet in our solar system is the largest?",
      answer: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correctAnswer: 0
    },
    {
      id: 8,
      text: "Who is the current Prime Minister of Canada?",
      answer: ["Justin Trudeau", "Stephen Harper", "Jean Chrétien", "Paul Martin"],
      correctAnswer: 0
    },
    {
      id: 9,
      text: "What is the chemical symbol for gold?",
      answer: ["Ag", "Au", "Cu", "Fe"],
      correctAnswer: 1
    },
    {
      id: 10,
      text: "What is the world's largest desert?",
      answer: ["Sahara", "Arabian", "Gobi", "Kalahari"],
      correctAnswer: 0
    },
    {
      id: 11,
      text: "Which Shakespearean play features the character Ophelia?",
      answer: ["Hamlet", "Romeo and Juliet", "Macbeth", "Othello"],
      correctAnswer: 0
    },
    {
      id: 12,
      text: "What is the highest-grossing movie of all time?",
      answer: ["Avatar", "Titanic", "Avengers: Endgame", "Star Wars: The Force Awakens"],
      correctAnswer: 2
    },
    {
      id: 13,
      text: "What is the chemical symbol for water?",
      answer: ["O", "H2O", "CO2", "NaCl"],
      correctAnswer: 1
    },
    {
      id: 14,
      text: "What is the largest continent in the world?",
      answer: ["Africa", "North America", "Asia", "South America"],
      correctAnswer: 2
    },
    {
      id: 15,
      text: "Who painted the famous artwork 'The Starry Night'?",
      answer:  ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: 0
    },
    {
      id: 16,
      text: "What is the largest ocean in the world?",
      answer: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: 3
    },
    {
      id: 17,
      text: "Which country gifted the Statue of Liberty to the United States?",
      answer: ["France", "Italy", "England", "Spain"],
      correctAnswer: 0
    },
    {
      id: 18,
      text: "Which planet in our solar system is known as the 'Red Planet'?",
      answer: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    },
    {
      id: 19,
      text: "Who directed the movie 'Jaws'?",
      answer: ["Steven Spielberg", "Martin Scorsese", "Francis Ford Coppola", "Alfred Hitchcock"],
      correctAnswer: 0
    },
    {
      id: 20,
      text: "What is the largest state in the United States by area?",
      answer: ["California", "Texas", "Alaska", "Montana"],
      correctAnswer: 2
    }
  ];



}
