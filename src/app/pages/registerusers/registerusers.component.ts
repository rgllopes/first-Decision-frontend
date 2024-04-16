import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterUserService } from './registerusers.service';
import { passwordMatches } from 'src/validators/passwordMetch';


@Component({
  selector: 'app-registerusers',
  templateUrl: './registerusers.component.html',
  styleUrls: ['./registerusers.component.css']
})
export class RegisterUsersComponent implements OnInit {
  registerUserForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ]),
  },
  [passwordMatches("password", "confirmPassword")]
);

  submitted = false;

  constructor(
    private registerUserService:RegisterUserService,
    private toast:ToastrService ) {
    }

    ngOnInit(): void { }

    get userName() {
      return this.registerUserForm.get('userName')
    }

    get email() {
      return this.registerUserForm.get('email')
    }
    get password() {
      return this.registerUserForm.get('password')
    }

    get confirmPassword() {
      return this.registerUserForm.get('confirmPassword')
    }

  public onSubmit(){
    this.submitted = true;
    const { userName, email, password, confirmPassword} = this.registerUserForm.value;
    this.registerUserService.registerUser(userName, email, password, confirmPassword).subscribe(
        res => {
          this.toast.success("Usuário registrado com sucesso!");
          this.registerUserForm.reset();
        },
        err => {
          this.toast.error(err);
        }
    )
  }
}
