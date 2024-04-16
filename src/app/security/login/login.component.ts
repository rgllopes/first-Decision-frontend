import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private loginService:LoginService,
    private route:Router,
    private toast:ToastrService) {
    }

    ngOnInit(): void {}

    get userName() {
      return this.formLogin.get('userName')
    }
    get password() {
      return this.formLogin.get('password')
    }

  public onSubmit(){
    const {userName, password} = this.formLogin.value;
    this.loginService.login(userName, password).subscribe(
      res => {
        this.toast.success("Login efetuado com sucesso!");
        this.route.navigate(['']);
      },
      err => {
        this.toast.error(err);
      }
    )
  }
}
