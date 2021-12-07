import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names:any;
  title = 'products';
  products: any;
  selectedProduct:any;
  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.products = data;
      this.names = this.products.p_name;
      console.log("fhbdfnkjfn",this. names);

    })
      }
      submit(){

      }
      onChange(){
        
      }
}
