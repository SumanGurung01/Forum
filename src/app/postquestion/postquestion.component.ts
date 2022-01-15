import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendService } from '../send.service';


@Component({
  selector: 'app-postquestion',
  templateUrl: './postquestion.component.html',
  styleUrls: ['./postquestion.component.css']
})
export class PostquestionComponent implements OnInit {
  userinfo:any
  constructor(private router:Router,private send:SendService) { }

  question : any

  ngOnInit(): void {
    this.userinfo = this.send.sendUserInfo()
  }

  data : any 
  
  getQuestion(userquestion:any){

    //console.log(userquestion)
    this.question = userquestion;
    this.data = {userinfo:this.userinfo,question:this.question};
    this.send.addQuestion('addquestion',this.data).subscribe((response:any)=>{   // send question to server
        if(response.status==1){
          alert("Question Posted")
        }else{
          console.log(response.message)
        }
    });
    
  }

}
