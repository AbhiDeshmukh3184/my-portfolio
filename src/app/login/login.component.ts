import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/common/animations/fadein.animation';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { takeWhile } from 'rxjs/operators';
import { CustomValidators } from './custom-validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation]
})

export class LoginComponent implements OnInit, OnDestroy {
  isAlive: boolean = true;
  loginForm: FormGroup;
  otpforms: FormGroup;
  loginStatus: any;
  ipAddress: any;
  loginError: string;
  submitted: boolean;
  currentUser: any;
  forgetPassWordForm: FormGroup
  forgetPasswordform: boolean = false;
  loginFormdisplay: boolean = true;
  isPauUser: boolean = false;
  submittedTopForm: boolean;
  dialcode: any = '91';
  MobileNo: any;
  optSentSuccessfully: boolean;
  btnName: string = 'Send OTP';
  showResendTOP: boolean;
  hidesendOTP: boolean = true;
  showsubmitButton: boolean;
  submittedOTP: boolean;
  passWordform: boolean;
  passWordForm: FormGroup
  submittedPassWordForm: boolean;
  formSubmitted: boolean;
  form: any;
  disabled: boolean;
  idAggregatorData: any;
  verifyCustomerData: any;
  environment: string;
  routingForm: boolean = false;
  disableMobileno: boolean;
  maskedMobile: any;
  loggedMobileno: any;
  showResendOTPfrapu: boolean = false;
  displayTimer: boolean = false;
  display: any;
  mobileShow: boolean = false;
  resendOtp: boolean = false;
  otpsent: boolean = false;

  constructor(private fb: FormBuilder,
    private tostr: ToastrService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private ngxservice: NgxUiLoaderService,
  ) {

    this.environment = environment.environmentName;

    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }


  ngOnInit() {
    sessionStorage.removeItem('currentUser')
    sessionStorage.clear()
    this.form = this.fb.group({
      'username': [{ value: "abhi", disabled: true }, Validators.compose([Validators.required])],
      'password': [{ value: "abhi", disabled: true }, Validators.compose([Validators.required])]
    });
  }






  get f() {
    return this.loginForm.controls
  }

  login() {
    this.router.navigate(['portfolio/profile'])
  }

  ngOnDestroy(): void {
    this.isAlive = false
  }

}
