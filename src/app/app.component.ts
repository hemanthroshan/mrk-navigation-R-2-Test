import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task';
  listData:any;
  constructor(public http: HttpClient){}
  ngOnInit(){    
    this.loadData('') 
  }
  loadData(pn:any){
    if(pn === '') pn=1;
    this.http.get('https://reqres.in/api/users?page='+pn).subscribe((res:any) => {
      if(res['data'].length)
      { 
        this.listData = res['data']
      }
    })    
  }
}
