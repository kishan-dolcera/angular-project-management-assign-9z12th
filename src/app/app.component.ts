import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Project Management';

  model = {ProjectName:"",CustomerName:"",Location:""};
  headers = ["ProjectName", "CustomerName", "Location"];
  rows =         [
                   {ProjectName:" ",CustomerName:" ",Location:" "}
                   ];
  deleteRow(x){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.rows.splice(x, 1 );
  }   
}
  
  onUpdate(formObj) {
    let values = formObj.value;
    console.log(values);
    let obj: any = {
      ProjectName: values.ProjectName,
      CustomerName: values.CustomerName,
      Location: values.Location
    };

    this.rows.push(obj);
    formObj.reset();

  }

  constructor() { }

  ngOnInit() {
  }
 trackById(index: number, data: any): string {
    return data.code;
}

}
