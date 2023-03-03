import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(){
    const zhuname = window.localStorage.getItem("auth_name");
    if (!zhuname || zhuname=='undefined') {
      this.router.navigate(['/'])
      return false
    }
    else{
      return true
    }
  }
}
