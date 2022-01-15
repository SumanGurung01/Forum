import { Component, OnInit } from '@angular/core';
import { SendService } from '../send.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userinfo : any

  constructor(private send:SendService,) { }

  ngOnInit(): void {
    this.userinfo = this.send.sendUserInfo()
    //console.log("Profile received in Profile:",this.userinfo)
  }

}
