import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/model/Role.model';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  roles: Role | undefined;
  

  apiurl: string = 'http://localhost:8081/users/api';

  constructor(private userService: UserService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.chargerUsers();
  }

  chargerUsers() {
    this.userService.listeUser().subscribe(prods => {
      this.users = prods;

    });
  }
  deleteUser(id: number) {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      this.authService.deleteUser(id).subscribe(
        data => {
          console.log(data);
          // Remove the deleted user from the users array
          this.users = this.users.filter(user => user.id !== id);
        },
        err => {
          console.log(err);
        }
      );
    }
  }



}


