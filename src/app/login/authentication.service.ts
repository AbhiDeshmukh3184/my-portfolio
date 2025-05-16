import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { JwtResponse } from 'src/app/models/jwt-response';
import { JwtRequest } from 'src/app/models/jwt-request';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    baseUrl = environment.Base_URL;
    currentUserSubject: any;
    currentUser: any;
    redirectUrl: string
    config: any;

    constructor(private http: HttpClient,
        private ngxUiLoaderService: NgxUiLoaderService,
        private router: Router) {
        this.config = this.ngxUiLoaderService.getDefaultConfig();
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    login(username: string, password: string): Observable<JwtResponse> {
        let jwtRequest: JwtRequest = { eMailId: username, password: password };

        return this.http.post<JwtResponse>(this.baseUrl + 'LoginAdmin/VerifyAdminLogin_V_1_0_1', jwtRequest, { withCredentials: true }).pipe(
            tap((resp: JwtResponse) => this.setSession(resp)),
            shareReplay()
        );
    }

    private setSession(authResult) {
        const expiresAt = authResult.expirationDate;
        sessionStorage.setItem('currentUser', JSON.stringify(authResult.data))
        this.currentUserSubject.next(JSON.parse(sessionStorage.getItem('currentUser')));
    }

    public get currentUserValue(): any {
        // return this.currentUserSubject.value;
        return JSON.parse(sessionStorage.getItem('currentUser'));
    }

    isLoggedIn() {
        if (sessionStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }

    logout() {
        sessionStorage.clear()
        localStorage.clear()
        this.router.navigate(['./login'])
    }

    SendOTP(MobileNo): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'OTP/SendOTP', { "mobileNumber": MobileNo }, { observe: 'response' })
    }

    SendOTPs(MobileNo): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'OTP/SendOTP', { "mobileNumber": MobileNo }, { observe: 'response', withCredentials: true })
    }

    verifyCustomerIfexist(MobileNo): Observable<any> {
        return this.http.get(this.baseUrl + `Aggregation/VerifyCustomerIfexist_V_1_0_1/${MobileNo}`, { withCredentials: true })
    }

    ResendOTP(MobileNo): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'OTP/ResendOTP', { "mobileNumber": MobileNo }, { observe: 'response', withCredentials: true })
    }

    VerifyOTP(obj): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'OTP/VerifyOTP', { "mobileNumber": obj.mobile, "otp": obj.otp }, { observe: 'response' })
    }

    VerifyOTPs(obj): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'OTP/VerifyOTP', { "mobileNumber": obj.mobileNumber, "otp": obj.otp }, { observe: 'response', withCredentials: true })
    }


    updatePassword(obj): Observable<any> {
        return this.http.put<any>(this.baseUrl + 'LoginAdmin/ResetPassword_V_1_0_1', { "mobileNumber": obj.idAggregatorData, "password": obj.password }, { observe: 'response', withCredentials: true })
    }

    updatePasswords(obj): Observable<any> {
        return this.http.put<any>(this.baseUrl + 'LoginAdmin/ResetPassword_V_1_0_2', obj, { observe: 'response' })
    }

    resendMOU(data): Observable<any> {
        return this.http.put(this.baseUrl + 'Aggregation/ResendMOU', { "idAggregatorData": data })
    }

    //
    getLanguages(): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'TranslateCode/GetAllTranslateCodes', { withCredentials: true })
    }

}
