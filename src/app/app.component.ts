import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isChecked = true;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  food2 = 'pizza-1';
  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);

  categories = [
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advanced'}
  ];
  // progress = 0;
  // timer;
  // constructor(){
  //   this.timer = setInterval(() => {
  //     this.progress++;
  //     if(this.progress == 100) 
  //       {clearInterval(this.timer);}
  //   }, 20);
  // }

  // simulate a call to a server
  isLoading = false;
  constructor(public dialog: MatDialog){
    this.isLoading = true;
    this.getCourse()
      .subscribe(x => this.isLoading = false);
  }

  getCourse(){
    return timer(2000); // after 2000ms, this Observable will emit a value
  }

  // editing a course -displaying a component inside the dialog
  openDialog(){
    this.dialog.open(EditCourseComponent, {
      data: {
        courseId: 1
      }
    })
    .afterClosed()
    .subscribe(result => console.log(result)
    );
  }



  selectCategory(category){
    console.log(category);
    this.categories
      .filter(c => c !== category) // filter() method creates an array that passes the test
      .forEach(c => c['selected'] = false);

      category.selected = !category.selected;
  }

  onChange($event){
    console.log($event);
  }


}
