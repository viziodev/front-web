import { Component, OnInit } from '@angular/core';
import { MyResponse } from 'src/app/shared/models/response';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
     this.userService.all().subscribe((res:MyResponse)=>{
          this.users=res.data
     })
  }

}
