import { Component, OnInit } from '@angular/core';
import { SendService } from '../send.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : any
  password : any

  userinfo : any

  constructor(private send:SendService, private router:Router) { }

  ngOnInit(): void {
  }

  getValues(data:any){
    if(data.email != "" || data.password != ""){
      
      this.email = data.email;
      this.password = data.password;
      //console.log("Data Received in Login:",data) 

      this.send.login('login',data).subscribe((response:any)=>{
         if(response.status==1){
          //console.log("Response from Server to Login",response)
          this.userinfo = response.userinfo;
          this.router.navigate(['/home',this.userinfo])
         }else{
           alert(response.message)
         }
      })

    }else{
      alert("All field Required")
    }
  }

}
