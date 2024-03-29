import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuHidden: boolean = false;
  query: string = '';
  onSubmit() {
    console.log(this.query);
    this.query = '';
  }
  toggleMenuView() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
