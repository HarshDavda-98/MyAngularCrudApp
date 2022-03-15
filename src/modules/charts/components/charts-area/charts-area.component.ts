import { HttpErrorResponse } from '@angular/common/http';
import {
    // AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/shared/api.service';
import { FormMOdels } from './charts.modal';

@Component({
    selector: 'sb-charts-area',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-area.component.html',
    styleUrls: ['charts-area.component.scss'],
})
export class ChartsAreaComponent implements OnInit {
    // subscribe!:Subscription;
    edit:any;
    valuetoedit: any;
    formvalue!: FormGroup;
    FormCrud: FormMOdels = new FormMOdels();
    @ViewChild('myAreaChart') myAreaChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;

    constructor(private formbuilder: FormBuilder, private Api: ApiService, private activateRoute: ActivatedRoute) {
        this.activateRoute.params.subscribe(resid => {
            // console.log('idwe====>>',resid['id'])
        })
        this.edit= sessionStorage.getItem('status');

    }
    ngOnInit() {
        this.formvalue = this.formbuilder.group({ Name: [""], Email: [""], Phone: [] })
        this.Api.Subject_list.subscribe((data) => {
            this.valuetoedit = data;
            console.log(data);
            this.Edit();
            setTimeout(() => {
                this.ClickMe();
            }, 1000);
        });
    }
    Edit() {
        console.log(this.valuetoedit.Name)
        sessionStorage.setItem('Name', this.valuetoedit.Name);
        sessionStorage.setItem('Email', this.valuetoedit.Email);
        sessionStorage.setItem('Phone', this.valuetoedit.Phone);
        sessionStorage.setItem('Id', this.valuetoedit._id);
       
        // this.formvalue.setValue({
        //     Name: "Harsh",
        //     Email: "Harsh@gmail.com",
        //     Phone: 84515566561,
        // })
    }
    // ngOnDestroy(){
    //     this.subscribe.unsubscribe();
    // }
    ClickMe() {
        this.formvalue.setValue({
            Name: sessionStorage.getItem('Name'),
            Email: sessionStorage.getItem('Email'),
            Phone: sessionStorage.getItem('Phone'),

        })
    }
    postCrudData_to_API() {
        this.FormCrud.Name = this.formvalue.value.Name;
        this.FormCrud.Email = this.formvalue.value.Email;
        this.FormCrud.Phone = this.formvalue.value.Phone;
        this.Api.postCrudData(this.FormCrud).subscribe(
            (res) => {
                this.formvalue.reset();
                let status = res.Msg;
                alert(status)
                //   this.router.navigate(['/dashboard'])
            },
            (err: HttpErrorResponse) => {
                let error = err.error.Msg;
                alert(error)
            }
        );
    }
    EditByApi() {
        this.FormCrud.Name = this.formvalue.value.Name;
        this.FormCrud.Phone = this.formvalue.value.Mobile;
        this.FormCrud.Email = this.formvalue.value.Email;
        this.FormCrud._id = sessionStorage.getItem('Id');
        this.Api.putData(this.FormCrud, this.FormCrud._id).subscribe(
            (res) => {
                console.log("From the edit method", res);
                this.formvalue.reset();
                sessionStorage.setItem('Phone', "");
                sessionStorage.setItem('Email', "");
                sessionStorage.setItem('Name', "");
                sessionStorage.setItem('Id','');
                sessionStorage.setItem('status','false');

            }
        );
    }

}
