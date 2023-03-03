import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  constructor(private http: HttpClient, private router: Router){}

  signupForm = {
    email: '',
    password: ''
  }
  error = '';

  signin(){
    let a = this.http.post("http://localhost:8080/login/",
    {"user":this.signupForm.email,"pwd":this.signupForm.password},{responseType:'json'}).subscribe((response:any) =>{
      console.log(response)
      if (response['data']="账号或密码错误!"){
        this.error = response['data']
      }
      if (response['data']="successful"){
        // this.error = ''
        window.localStorage.setItem("auth_name",response['zhuname'])
        this.router.navigate(['/contacts'])
      }
    })
  }

}
