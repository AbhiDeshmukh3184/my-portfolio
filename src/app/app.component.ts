import { Component } from '@angular/core';
import packageJson from '../../package.json';
import { AuthenticationService } from './login/authentication.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public version: string = packageJson.version;
  //instantiating LogoutService at startup
  //yes I could also do this in the module with APP_INITIALIZER, but... why?
  constructor(
    public demoService: AuthenticationService,
    private auth : AuthenticationService,
    public trasnlateservice: TranslateService
  ) { 
  }
}
