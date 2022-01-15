import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendService } from '../send.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  allQuestion : any;

  constructor(private send:SendService,private router:Router) { }

  ngOnInit(): void {
    this.send.getAllQuestion('allquestion').subscribe((response:any)=>{
      //console.log('Got responce from services from service for all question:',response)
      this.allQuestion = response;
    })
  }

}
