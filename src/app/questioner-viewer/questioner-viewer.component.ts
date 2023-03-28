import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Question } from './hero.interface';
import { QUESTIONS } from './questions';

@Component({
  selector: 'app-questioner-viewer',
  templateUrl: './questioner-viewer.component.html',
  styleUrls: ['./questioner-viewer.component.scss']
})
export class QuestionerViewerComponent implements OnInit{

  questions = QUESTIONS
 

  ngOnInit(): void {
    this.pagedQuestions = this.questions.slice(this.currentPage * this.questionsPerPage, (this.currentPage + 1) * this.questionsPerPage);
  }

  submit(){
    alert('Thanks for answering.')
  }

  totalQuestions = 5; // Set the total number of questions
  questionsPerPage = 5; // Set the number of questions per page
  currentPage = 0; // Initialize the current page to 0
  pageSizeOptions = [5]; // Add possible page sizes to the paginator
  pagedQuestions: Question[] = []; // Create a pagedQuestions array to store the current questions
  
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.questionsPerPage = event.pageSize;
    this.pagedQuestions = this.questions.slice(this.currentPage * this.questionsPerPage, (this.currentPage + 1) * this.questionsPerPage);
  }

  


}
