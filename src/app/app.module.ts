import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateaccComponent } from './createacc/createacc.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { RoomComponent } from './room/room.component';
import { QuestionComponent } from './question/question.component';
import { PostquestionComponent } from './postquestion/postquestion.component';
import { PostanswerComponent } from './postanswer/postanswer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateaccComponent,
    HomeComponent,
    ProfileComponent,
    RoomComponent,
    QuestionComponent,
    PostquestionComponent,
    PostanswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
