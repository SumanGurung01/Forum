import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendService } from '../send.service';

@Component({  
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  allQuestion : any;
  userinfo : any
  question : any
  questioner : any
  id : any

  constructor(private send:SendService,private router:Router) { }

  ngOnInit(): void {
    this.userinfo = this.send.sendUserInfo()   // get userinfo
    this.send.getAllQuestion('allquestion').subscribe((response:any)=>{
      //console.log('Got responce from services from service for all question:',response)
      this.allQuestion = response;   //getall question from database
    })
  }

  addans(event:any): void {   // add answer to a question
    this.id = event.currentTarget.id   // get id of button (add button) clicked
    this.question = document.getElementById(`q${this.id}`)?.innerHTML  //get its corrosponding question and questioner
    this.questioner = document.getElementById(`qnr${this.id}`)?.innerHTML
    //console.log(this.question,this.questioner)
    this.send.selectedQuestion({question:this.question,questioner:this.questioner})   // send to serber
  }


  deleteque(event:any){
    this.id = event.currentTarget.id
    this.question = document.getElementById(`q${this.id}`)?.innerHTML
    this.questioner = document.getElementById(`qnr${this.id}`)?.innerHTML
    if(this.userinfo.username==this.questioner){   // if the questioner and deleter is same then only allow to delete
      //console.log({question:this.question,questioner:this.questioner})
      this.send.deleteQue('deletequestion',{question:this.question,questioner:this.questioner}).subscribe((response:any)=>{
        alert(response.message)
      })
    }else{
      alert("You Cannot Delete this question. Only Admin and the User who ask this question can delete this question")
    }
    
  }

}
