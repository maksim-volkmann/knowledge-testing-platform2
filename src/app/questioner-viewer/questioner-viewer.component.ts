import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export interface Question {
  id: number;
  type: 'single' | 'multiple' | 'free-form';
  text: string;
  options?: string[];
  answer?: string | string[];
}

@Component({
  selector: 'app-questioner-viewer',
  templateUrl: './questioner-viewer.component.html',
  styleUrls: ['./questioner-viewer.component.scss']
})
export class QuestionerViewerComponent {

  submit(){
    alert('Thanks for answering.')
  }

  questions: Question[] = [
    {
      id: 1,
      type: 'multiple',
      text: 'What colors are on the flag of the United States?',
      options: ['Red, white, and blue', 'Green and yellow', 'Black and white', 'Purple and pink'],
    },
    {
      id: 2,
      type: 'single',
      text: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    },
    {
      id: 3,
      type: 'multiple',
      text: 'Which of the following are primary colors?',
      options: ['Red', 'Green', 'Blue', 'Yellow'],
    },
    {
      id: 4,
      type: 'single',
      text: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'],
    },
    {
      id: 5,
      type: 'free-form',
      text: 'What is your favorite type of music?',
      answer: '',
    },
    {
      id: 6,
      type: 'single',
      text: 'What is the name of the largest ocean on Earth?',
      options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    },
    {
      id: 7,
      type: 'multiple',
      text: 'Which of the following are programming languages?',
      options: ['Java', 'HTML', 'C++', 'CSS', 'Python'],
    },
    {
      id: 8,
      type: 'single',
      text: 'What is the highest mountain in the world?',
      options: ['Mount Everest', 'Mount Kilimanjaro', 'Mount Fuji', 'Mount McKinley'],
    },
    {
      id: 9,
      type: 'free-form',
      text: 'What is your favorite food and why?',
      answer: '',
    },
    {
      id: 10,
      type: 'multiple',
      text: 'Which of the following are types of fruit?',
      options: ['Tomato', 'Banana', 'Carrot', 'Grape'],
    },
  ];



}
