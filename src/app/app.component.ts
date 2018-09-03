import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core';

const DEFAULT_PAGE = 'featureA';
const LOGIN_PAGE = 'login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';
  constructor(private translate: TranslateService, private router: Router, private authService: AuthService) {
      translate.setDefaultLang('en');

      // Listen form auth changes
      this.authService.authStatusChanged.subscribe((status) => {
        if (status.authenticated) {
          this.router.navigate([DEFAULT_PAGE]);          
        } else {
          this.router.navigate([LOGIN_PAGE]);
        }
        console.log(status);
      })
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }

}
