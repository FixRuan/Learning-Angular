import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "Ruan Pablo";
  userData = {
    email: "ruangoio01@gmail.com",
    role: "admin"
  };

  title = 'angular';
}
