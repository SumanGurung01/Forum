import { Component, OnInit } from '@angular/core';
import { SendService } from '../send.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createacc',
  templateUrl: './createacc.component.html',
  styleUrls: ['./createacc.component.css']
})
export class CreateaccComponent implements OnInit {

  email:any
  password:any
  username:any

  constructor(private send:SendService, private router:Router) { }

  ngOnInit(): void {
  }

  getValues(data:any){
    if(data.email != "" || data.password != "" || data.username != ""){
      
      this.email = data.email;
      this.password = data.password;
      this.username = data.username;
      //console.log("Data Received in Login",data)  

      this.send.adduser('createacc',data).subscribe((response:any)=>{  
        alert(response.message);
        if(response.status==1){
          this.router.navigate(['/login'])
        }
      });
      
    }else{
      alert("All field Required")
    }
  }

}
