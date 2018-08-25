import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

// Creating custom token
//export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  // data will be passed in the constructor from the calling component
  // constructor(@Inject(DIALOG_DATA) data: any) { console.log('Data ' + data);
  //  }
constructor(@Inject(MAT_DIALOG_DATA) data: any) { console.log('Data ' + JSON.stringify(data));
 }

  ngOnInit() {
  }

}
