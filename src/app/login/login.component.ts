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

    this.otpforms = fb.group({
      mobilenumber: [''],
      otp: ['']
    })

    this.forgetPassWordForm = fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[6-9][0-9]{9}$')]],
      otp: ['']
    })

    this.passWordForm = fb.group({
      password: [null, Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
        Validators.minLength(8)
      ])],
      confirmPassword: [null, Validators.compose([Validators.required])]
    }, {
      validator: CustomValidators.passwordMatchValidator
    })
  }


  ngOnInit() {
    sessionStorage.removeItem('currentUser')
    sessionStorage.clear()
    this.form = this.fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
  }


  onlyNumber(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }

  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  get f() {
    return this.loginForm.controls
  }

  get f2() {
    return this.forgetPassWordForm.controls
  }

  get f3() {
    return this.passWordForm.controls
  }




  navigate(tab) {
    if (tab == 'procurement') {
      var redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : 'procurement/home';
    } else if (tab == 'inventory') {
      redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : 'inventory/company';
    } else {
      redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : 'sale/auction';
    }
    var url = redirect.toLowerCase()
    this.router.navigate([url]);
  }

  forgetPassword() {
    this.loginFormdisplay = false
    this.forgetPasswordform = true
    this.showResendTOP = false
    this.forgetPassWordForm.reset()
  }


  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; control
    const confirmPassword: string = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }
  ngOnDestroy(): void {
    this.isAlive = false
  }

  // <-- Language dropdown-->
  isPopupOpen: boolean = false;
  allLanguages: any;
  language: string;


  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

 



  //language

}
