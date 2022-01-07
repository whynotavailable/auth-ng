import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      this.authService.getUserStuff()
        .subscribe(stuff => {
          this.userData = JSON.stringify(stuff, null, '  ');
        })
  }

}
