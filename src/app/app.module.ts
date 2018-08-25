import { CourseService } from './course.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import {MatCheckboxModule , MatRadioModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';
// import { EditCourseComponent, DIALOG_DATA } from './edit-course/edit-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MatComponentsModule } from './mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents:[
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [
    CourseService,
    {provide: CourseService, useClass: CourseService}
    // MAT_DIALOG_DATA has already been defined as a dependency using the "MatDialogModule"
    // {provide: DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
