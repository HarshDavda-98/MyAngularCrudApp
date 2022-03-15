import {
    // ChangeDetectionStrategy,
    // ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    OnDestroy,
    // QueryList,
    // ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/shared/api.service';
// import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { Country } from '@modules/tables/models';
import { CountryService } from '@modules/tables/services';
import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs';

@Component({
    selector: 'sb-ng-bootstrap-table',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ng-bootstrap-table.component.html',
    styleUrls: ['ng-bootstrap-table.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit {
    @Input() pageSize = 4;

    // countries$!: Observable<any>;  
    // subscribe!:Subscription;
    crudlist!:any;
    countries!:any;
    // total$!: Observable<number>;
    // sortedColumn!: string;
    // sortedDirection!: string;

    // @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        // public countryService: CountryService,
        // private changeDetectorRef: ChangeDetectorRef,
        private Api :ApiService,
         private route:Router
    ) {}
    ngOnInit() {
  
        // this.countryService.pageSize = this.pageSize;
        // this.countries$ = this.countryService.countries$;
        // this.total$ = this.countryService.total$;
        this.getCrudData();
    }
    getCrudData(){
        this.Api.GetCrudDetails().subscribe(
          (res)=>{
            this.crudlist = res;
          },
          (err) => {
            console.log('for get data', err);
          }
        )
      }
      DeleteData(_id:any){
        this.Api.DeleteCrudData(_id).subscribe(
          res =>{
            alert(res.Msg); 
            setTimeout(() => {
              alert("Updated")
              this.getCrudData();
            }, 1000);
          },
          err =>{
            alert(err.error.Msg);
          }
        )
      }  
      EditData(country:any){
        this.Api.setList(country);
        sessionStorage.setItem('status','true');
        this.route.navigate(['CrudForm']);
      }
}
