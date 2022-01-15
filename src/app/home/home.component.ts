import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SendService } from '../send.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userinfo:any

  constructor(private route:ActivatedRoute,private router:Router,private send:SendService) { }

  ngOnInit(): void {
    this.route.params.subscribe((received:any)=>{
      //console.log(received)
      this.userinfo = received
    })

    this.send.toService(this.userinfo)   //send userinfo to service so that all component can use userinfo

  }

}
