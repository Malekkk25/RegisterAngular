import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
import { Role } from '../model/Role.model';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent {
  userRoleChecked: boolean = false;
  adminRoleChecked: boolean = false;
  oldUserRoleChecked: boolean = false;
  oldAdminRoleChecked: boolean = false;
  


  constructor(
    private authService: AuthService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router // Inject Router
  ) { }

  User!:User
  Users!:User[]
  roles:Role[] | undefined
  AllRoles!: Role[]; 
  Role!:Role
  aRole: Role| undefined;
  uRole:Role | undefined;
  RoleToRemove:Role = new Role();
  adminRole: Role| undefined;
  userRole:Role | undefined;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const username = params['username']; 
      if (username) {
        this.userService.GetUserByUsername(username).subscribe(user => {
          this.User = user;
          this.roles = user.roles; // Assuming 'user.roles' contains the roles array
          console.log(this.roles);
  
          if (this.roles) {
            // Check for the 'USER' role inside the subscribe block
            this.adminRole = this.roles.find(role => role.role === 'ADMIN');
            this.userRole = this.roles.find(role => role.role === 'USER');
            if (this.adminRole) {
              this.adminRoleChecked=true;
              this.oldAdminRoleChecked=true;
            } else {
              console.log('ADMIN role not found.');
            }
            if (this.userRole) {
              this.userRoleChecked=true;
              this.oldUserRoleChecked=true;
            } else {
              console.log('USER role not found.');
            }
          } else {
            console.log('Roles array is undefined.');
          }
        });
      }
    });
    this.userService.ListOfRoles().subscribe(
      data => {
        this.AllRoles = data;
        
      },
      err => {
        console.log(err);
      }
    );
    
  }
  

  updateRoles() {
    this.aRole=this.AllRoles[0]
    this.uRole=this.AllRoles[1]
    console.log('Admin Role Checked:', this.adminRole);
    console.log('User Role Checked:', this.userRole);
    
  
    if (this.oldAdminRoleChecked !== this.adminRoleChecked) {
      
        if (!this.adminRoleChecked) {
          if (this.adminRole) {
          console.log('Removing Admin Role...');
          this.userService.removeRoleFromUser(this.User.username,this.adminRole).subscribe(() => {
            console.log('Admin Role removed successfully.');
            this.router.navigate(['users']);
          }, error => {
            console.error('Error removing Admin Role:', error);
          });}
        } else {
          if (this.aRole) {
          console.log('Adding Admin Role...');
          this.userService.AddRoleForUser(this.User.username, this.aRole).subscribe(() => {
            console.log('Admin Role added successfully.');
            this.router.navigate(['users']);
          }, error => {
            console.error('Error adding Admin Role:', error);
          });
        }
      }
    }
  
    if (this.oldUserRoleChecked !== this.userRoleChecked) {
      
        if (!this.userRoleChecked) {
          if (this.userRole) {
          console.log('Removing User Role...');
          this.userService.removeRoleFromUser(this.User.username, this.userRole).subscribe(() => {
            console.log('User Role removed successfully.');
            this.router.navigate(['users']);
          }, error => {
            console.error('Error removing User Role:', error);
          });
        }} else {
          if (this.uRole) {
          console.log('Adding User Role...');
          this.userService.AddRoleForUser(this.User.username, this.uRole).subscribe(() => {
            console.log('User Role added successfully.');
            this.router.navigate(['users']);
          }, error => {
            console.error('Error adding User Role:', error);
          });
        }
      }
    }
  }
  
}