import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ExamRegistrationComponent} from './components/student/exam-registration/exam-registration.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {StudentDashboardComponent} from './components/student/student-dashboard/student-dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AdminSidebarComponent} from './components/admin/admin-sidebar/admin-sidebar.component';
import {AdminAddExamComponent} from './components/admin/admin-add-exam/admin-add-exam.component';
import {AdminAddUserComponent} from './components/admin/admin-add-user/admin-add-user.component';
import {AdminCurrentStatusComponent} from './components/admin/admin-current-status/admin-current-status.component';
import {FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {ValidateService} from "./services/validate.service";
import {CourseService} from "./services/course.service";
import {StatusService} from "./services/status.service";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'student/register-exam', component: ExamRegistrationComponent},
  {path: 'student/dashboard', component: StudentDashboardComponent},
  {path: 'student/register-exam', component: ExamRegistrationComponent},
  {path: 'admin/dashboard', component: AdminDashboardComponent},
  {path: 'admin/add-exam', component: AdminAddExamComponent, canActivate: []},
  {path: 'admin/add-user', component: AdminAddUserComponent, canActivate: []},
  {path: 'admin/add-current-status', component: AdminCurrentStatusComponent, canActivate: []},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ExamRegistrationComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    AdminSidebarComponent,
    AdminAddExamComponent,
    AdminAddUserComponent,
    AdminCurrentStatusComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
  ],
  providers: [AuthService, ValidateService, FlashMessagesService, CourseService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
