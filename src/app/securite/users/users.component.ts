import { Component, OnInit } from '@angular/core';
import { Link, MyResponse } from 'src/app/shared/models/response';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  currentUrl: string | null = null;
  links: Link[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.userService.all(this.currentUrl).subscribe((res: MyResponse) => {
      this.users = res.data;
      this.links = res.links as Link[];
    });
  }
  paginate(url: any) {
    this.currentUrl = url;
    this.refresh();
  }

  onDelete(user: User) {
    this.userService.remove(user.id).subscribe({
      next: (res: MyResponse) => {},
    });
  }
}
