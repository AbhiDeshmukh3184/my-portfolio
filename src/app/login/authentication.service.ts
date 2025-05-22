import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    baseUrl = environment.Base_URL;
    currentUserSubject: any;
    authToken: any;
    redirectUrl: string
    config: any;

    constructor(private http: HttpClient,
        private ngxUiLoaderService: NgxUiLoaderService,
        private router: Router,
        private _tostr: ToastrService) {
        this.config = this.ngxUiLoaderService.getDefaultConfig();
    }


    setSession() {
        sessionStorage.setItem('authToken', environment.token)
        this.router.navigate(['portfolio/profile'])
        setTimeout(() => {
            this.logout()
            this._tostr.warning('Please login again', 'Session expired')
        }, 30*60*1000);
    }

    public get currentUserValue(): any {
        return JSON.parse(sessionStorage.getItem('authToken'));
    }

    isLoggedIn() {
        if (sessionStorage.getItem('authToken')) {
            return true;
        }
        return false;
    }

    logout() {
        sessionStorage.clear()
        localStorage.clear()
        this.router.navigate(['./login'])
    }



}
