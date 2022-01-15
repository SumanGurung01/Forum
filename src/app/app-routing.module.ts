import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateaccComponent } from './createacc/createacc.component';
import { ProfileComponent } from './profile/profile.component';
import { RoomComponent } from './room/room.component';
import { QuestionComponent } from './question/question.component';
import { PostquestionComponent } from './postquestion/postquestion.component';
import { PostanswerComponent } from './postanswer/postanswer.component';


const routes: Routes = [
  {path:'home',component:HomeComponent,
                children:[
                            {path:'profile',component:ProfileComponent},
                            {path:'room',component:RoomComponent,
                                          children:[
                                                      {path:'postquestion',component:PostquestionComponent},
                                                      {path:'viewquestion',component:QuestionComponent,children:[
                                                                                                                  {path:'addanswer',component:PostanswerComponent}
                                                                                                                ]},
                                                      {path:'',redirectTo:'viewquestion',pathMatch:'full'}
                                                    ]
                            },
                            {path:'',redirectTo:'room',pathMatch:'full'},
                          ]
  },

  {path:'createacc', component:CreateaccComponent},
  
  {path:'login', component:LoginComponent},
  
  {path:'',redirectTo:'login',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
