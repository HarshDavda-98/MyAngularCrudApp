import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginFormMOdel } from './login.modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '@app/shared/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginformvalue!: FormGroup;
    loginData: LoginFormMOdel = new LoginFormMOdel();
    constructor(private formbuilder: FormBuilder, private Api: ApiService, private router: Router) { }
    ngOnInit() {
        this.loginformvalue = this.formbuilder.group({
            id: 0,
            LastName: [''],
            FirstName: [''],
            EmailAddress: [''],
            Password: [''],
            Confirm_Password: [''],
        })
    }
    LoginNowPost(data: any) {
        this.loginData.EmailAddress = this.loginformvalue.value.EmailAddress;
        this.loginData.Password = this.loginformvalue.value.Password;

        this.Api.postDataLogin(this.loginData).subscribe(
            (res) => {
                sessionStorage.setItem("Auth", 'true');
                this.loginformvalue.reset();

                // alert(res.msg);
                this.router.navigate(['/dashboard'])
            },
            (err: HttpErrorResponse) => {
                alert(err.error.msg)
                console.log(err.error.msg)
            });
    }
}
