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
    if(localStorage.getItem('version')){
      if(localStorage.getItem('version') !== this.version){
        this.auth.logout()
        return
      }else{
       localStorage.setItem('version',this.version)
      }
    } 
    
    localStorage.setItem('version',this.version)

    //
    var lan = localStorage.getItem('language')
    localStorage.setItem('language', lan || 'EN')

    this.trasnlateservice.setDefaultLang(lan || 'EN')
    this.trasnlateservice.use(lan || 'EN')
  }    

}
