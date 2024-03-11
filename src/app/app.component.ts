import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { remult } from 'remult';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(protected auth: AuthService) { }
  title = 'remult-angular-router-auth';
  remult = remult;
}
