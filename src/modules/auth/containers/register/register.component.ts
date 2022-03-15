import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormMOdel} from './register.modal';
import { ApiService } from '@app/shared/api.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    formvalue!:FormGroup;
    formDatas:FormMOdel = new FormMOdel();

    constructor( private formbuilder :FormBuilder ,private Api:ApiService,private router:Router) {}
    ngOnInit():void {
        this.formvalue = this.formbuilder.group({
            id:0,
            LastName:[''],
            FirstName:[''],
            EmailAddress:[''],
            Password:[''],
            Confirm_Password:[''],
        });
    }
    postuserData() {
        this.formDatas.FirstName = this.formvalue.value.FirstName;
        this.formDatas.EmailAddress = this.formvalue.value.EmailAddress;
        this.formDatas.id = this.formvalue.value.id;
        this.formDatas.LastName = this.formvalue.value.LastName;
        this.formDatas.Password = this.formvalue.value.Password;
        this.formDatas.Confirm_Password = this.formvalue.value.Confirm_Password;
    
        this.Api.postData(this.formDatas).subscribe(
          (res) => {
            this.formvalue.reset();
            let status = res.msg;
            alert(status)
            this.router.navigate(['/dashboard'])
          },
          (err:HttpErrorResponse)=>{
            let error = err.error.msg;
            alert(error)
            }
        );
      }
    }

