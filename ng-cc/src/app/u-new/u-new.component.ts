import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-new',
  templateUrl: './u-new.component.html',
  styleUrls: ['./u-new.component.scss']
})
export class UNewComponent {
  constructor(private http: HttpClient, private router: Router){}

  forms = {
    name: '',
    email: '',
    phone: ''
  }

  smb(){
    console.log(this.forms)
    // this.http.post('xxx',this.forms)
    this.router.navigate(['/contacts'])
  }
}
