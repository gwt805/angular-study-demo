import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.scss']
})
export class UEditComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient){}
  forms:any = {
    name: '',
    email: '',
    phone: ''
  }

  ngOnInit(){
    const id = this.route.snapshot.params['id']
    this.getById(id)
  }

  getById(id:number){
    console.log(id)
    // this.http.get(`xxx/${id}`).subscribe(res=>{
    //   this.forms = res
    // })
  }
  upd(){
    // this.http.put('xxx',this.forms)
    this.router.navigate(['/contacts'])
  }

}
