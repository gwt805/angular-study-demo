import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import axios from 'axios';

@Component({
  selector: 'app-signoup',
  templateUrl: './signoup.component.html',
  styleUrls: ['./signoup.component.scss']
})
export class SignoupComponent {
  constructor(private http: HttpClient, private router: Router){}

  signupForm = {
    email: '',
    password: ''
  }

  signup(){
    // let a = this.http.post("http://localhost:8080/login/",
    // {"user":this.signupForm.email,"pwd":this.signupForm.password},{responseType:'json'}).subscribe((response:any) =>{
    //   console.log(response)
    //   if (response['data']="successful"){
    //     window.localStorage.setItem("auth_name",response['zhuname'])
    //     // this.router.navigate(['/contacts'])
    //   }
    // })
  }
}
