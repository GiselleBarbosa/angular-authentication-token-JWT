import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private userService = inject(UserService);
  private router = inject(Router);

  public user$ = this.userService.user$;

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
