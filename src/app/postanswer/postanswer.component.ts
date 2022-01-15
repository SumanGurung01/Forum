import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendService } from '../send.service';

@Component({
  selector: 'app-postanswer',
  templateUrl: './postanswer.component.html',
  styleUrls: ['./postanswer.component.css']
})
export class PostanswerComponent implements OnInit {

  answer :any

  userinfo : any
  question : any

  constructor(private send:SendService,private router:Router) { }

  ngOnInit(): void {
      this.userinfo = this.send.sendUserInfo()
      this.question = this.send.toPostAnswer()
      //console.log("i got question",this.question)
  }

  getAnswer(data:any){
      //console.log(data.ans)
      this.answer = {question:this.question.question,questioner:this.question.questioner,ans:data.ans,answerer:this.userinfo.username}
      //console.log(this.answer)
      this.send.postAnswer('addans',this.answer).subscribe((response:any)=>{   //send question and answer with questioner and answerer to server
        if(response.status==1){
            alert(response.message)
        }
      })
  }

}
