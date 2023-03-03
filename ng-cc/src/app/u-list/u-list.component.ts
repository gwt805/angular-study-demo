import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-list',
  templateUrl: './u-list.component.html',
  styleUrls: ['./u-list.component.scss']
})
export class UListComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient){}
  ngOnInit(){}

  delete(id:number){
    console.log(id)

    if(!window.confirm("确定要删除嘛!")){
      return
    }
    // this.http.delete('xxx',id)
    // 重新获取数据
  }
}
