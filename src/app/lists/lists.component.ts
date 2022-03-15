import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/shared/api.service';

@Component({
  selector: 'sb-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  getcruddetails!:any;

  constructor(private Api :ApiService) { }

  ngOnInit(): void {
    this.getCrudData();
  }
  getCrudData(){
    this.Api.GetCrudDetails().subscribe(
      (res)=>{
        this.getcruddetails = res;
      },
      (err) => {
        console.log('for get data', err);
      }
    )
  }
  DeleteData(_id:any){
    confirm("Are you sure to delete the data....")
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
}
