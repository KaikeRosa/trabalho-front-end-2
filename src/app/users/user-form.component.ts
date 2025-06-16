
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  user: User = { id: 0, name: '', email: '' };
  editMode = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      const existingUser = this.userService.getUserById(+id);
      if (existingUser) {
        this.user = { ...existingUser };
        this.editMode = true;
      }
    }
  }

  onSubmit(): void {
    if (this.editMode) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.addUser(this.user);
    }
    this.router.navigate(['/users']);
  }
}
