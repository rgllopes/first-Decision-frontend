import { UserService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListUsersComponent implements OnInit {

  public listUsers: Array<User> = [];

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.listAll().subscribe(
      res =>{this.listUsers = res}
    )
  }
}
