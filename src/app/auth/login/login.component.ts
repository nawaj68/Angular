import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  responceData: any;
  logInFrom!: FormGroup;
  errormessage: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    //private toster: ToastrService
  ) {}

  ngOnInit(): void {
    this.logInFrom = this.fb.group({
      email: [''],
      password: [''],
      rememberMe:[true]
    });
  }

  getcontrol(name: any) {
    return this.logInFrom.get(name);
  }

  onsubmit() {
    debugger
    if (this.logInFrom.valid) {
      this.authService.proceedLogin(this.logInFrom.value).subscribe(
        (result) => {

          console.log(result);
          if (result != null) {
          
            
            this.responceData = result;
            localStorage.setItem('token', this.responceData.access_token);
            this.router.navigate(['/', 'deshboard']);
            //this.toster.success(result.message);
          }
        },
        (err:any) => {
          console.log('error')
        //   this.errormessage = err.console.error.errors;
        //   if (err.error.errors.email) {
        //    //this.toster.error(err.error.errors.email);
        //    console.log('email')
        //   }
        //  if (err.error.errors.password) {
        //    //this.toster.error(err.error.errors.password);
        //    console.log('password')
        //  }
         //console.log('error',err)
        }
      );
    }

  }
  logout(): void {
    this.authService.logout();
  }
}
