import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Project Management';
  submitted = false;
  add=false;
  isEdit = false;
  selectedIndex = null;

  model = {ProjectName:"",CustomerName:"",Location:""};
  headers = ["ProjectName", "CustomerName", "Location"];
  rows =         [
                   {ProjectName:"Amazing Petcare ",CustomerName:"Peter ",Location:"South Africa "},
                   {ProjectName:"Share the world ",CustomerName:"Clever ",Location:"California "}
                   ];
  deleteRow(x){
   this.rows.splice(x, 1 );  
}

onEdit(index) {
    this.selectedIndex = index;
    let data = this.rows[index];
    console.log(data);
    this.model.ProjectName = data.ProjectName;
    this.model.CustomerName = data.CustomerName;
    this.model.Location = data.Location;
    this.add = true;
    this.isEdit = true;
  }

  onUpdate(formObj) {
    if (!this.isEdit){
    this.submitted = true;
    let values = formObj.value;
    console.log(values);
    let obj: any = {
      ProjectName: values.ProjectName,
      CustomerName: values.CustomerName,
      Location: values.Location
    };

    this.rows.push(obj);
    formObj.reset();
    this.add=false;
    }else{
      this.rows.splice(this.selectedIndex, 1, { ...formObj.value });
      this.selectedIndex = null;
      this.isEdit = false;
      this.add = false;
    }

  }
  onReset() {
    this.submitted = false;
    this.add= false
    }

  open(){
    this.add =true;
  }
  constructor() { }

  ngOnInit() {
  }
 

}
