import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendService {
  
  userinfo : any = {}

  selectedque : any

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000";

  adduser(path:String , data:any){   // add new user   
    //console.log("DataReceived in Service from create account:",data);
    return this.http.post(`${this.url}/${path}`,data);
  }
 
  addQuestion(path:String,data:any){   //add new question
    //console.log("Data Received in service from post question",data)
    return this.http.post(`${this.url}/${path}`,data);
  }

  login(path:String,data:any){   // check login credentials
    //console.log("Data Received in Service:",data);
    return this.http.post(`${this.url}/${path}`,data);
  }

  toService(data:any){   //getdata from home and store in service
      //console.log("Profile Received in service:",data);
      this.userinfo = data;   
  }

  sendUserInfo(){   //send data from service to profile
      //console.log("Sending User Data")
      return this.userinfo;
  }

  toPostAnswer(){  //send data from service to post answer
    //console.log("Sending Data to Post Answer")
    return this.selectedque;
  }

  selectedQuestion(data:any){
    //console.log("Selected Question",data)
    this.selectedque = data
    //console.log("selected question",this.selectedque)
  }

  getAllQuestion(path:String){   // get all question from database
    return this.http.get(`${this.url}/${path}`);
  }

  postAnswer(path:String,data:any){
    //console.log("Selected Question in service",data)
    return this.http.post(`${this.url}/${path}`,data);
  }

  deleteQue(path:String,data:any){
      //console.log("Delete question in service",data)
      return this.http.post(`${this.url}/${path}`,data);
  }
}

