import { Component } from '@angular/core';
import { DataService } from './data.service';

export class Users{
  firstName:string='';
  lastName:string='';
  country:string='';
  pincode:number | undefined;
  address:string='';
  email:string='';
  mobileNo:number | undefined;

  constructor(firstName:string, lastName:string,country:string,pincode:number,address:string,email:string,mobileNo:number){
this.firstName=firstName;
this.lastName=lastName;
this.country=country;
this.pincode=pincode;
this.address=address;
this.email=email;
this.mobileNo=mobileNo;
  }
}
export class hello{
  firstname:string='';
  lastname:string='';
  dob:number | undefined;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
})
export class AppComponent {
title = 'primeng';
number1:any;
number2:any;
number3:any;
addition:any;
substraction:any;
multiplication:any;
divide:any;
courseValue:string='';
isActive:boolean=true;
isAdd:boolean=false;
isAdd1:boolean=false;
show: boolean = false;
 getArray:any[]=[];
 button:any[]=[];
  ss:hello=new hello();
 helloArray:any[]=[];
 parentSelector:any;
 food:any[]=[
   
  {id:1,select:false,name:"biryani"},
   {id:2,select:true,name:"manchuria"},
  {id:3,select:true,name:"rice"}
 ];

 onChangeFood($event:any){

  const id = $event.target.value;
  const isChecked = $event.target.checked;

  this.food = this.food.map((d) => {
    if (d.id == id) {
      d.select = isChecked;
      this.parentSelector = false;
      return d;
    }
    if (id == -1) {
      d.select = this.parentSelector;
      return d;
    }
    return d;
  });
  console.log(this.food);
}
 
  onAdd(){
  // this.ss=new hello();
  this.helloArray.push(this.ss);
 }
 onSave(){

 }
array:any[]=[
  {
    name:"angular"
  },
  {
    name:"react"
  },
  {
    name:"vue"
  },
  {
    name:"js"
  },
];
array1:any[]=[];

onButton(){
this.button;
}


password() {
  this.show = !this.show ;
}


onChange1(value:any){
  this.array1.push(this.array);
  console.log(value);
  this.isActive=false;
}

add(){
this.isAdd=true;
this.isAdd1=false;
}

// arr1:any[] = [
//   { type: "A", value: "a" },
//   { type: "B", value: "b" },
//   { type: "C", value: "c" },
//   { type: "D", value: "d" },
//   { type: "E", value: "e" }
//   ];
//   arr2: any= [];
//   onCheckboxChecked(event:any, element:any) {

//     if (event.checked) {
  
//       this.arr2.push(element);
//     } else {
  
//       let index = this.arr2.indexOf(element);
//       if (index > -1) {
//         this.arr2.splice(index, 1);
//       }
//     }
//     console.log(JSON.stringify(this.arr2));
//   }
checkbox:any[]=["angular","react","vue","javascript"];
checkbox1:any[]=[];

onChange(){
this.checkbox1.push(this.checkbox);
console.log(this.checkbox1);
}


onCalculator(){
  
  if(this.addition){
    console.log(this.addition);
    this.number3=Number(this.number1)+Number(this.number2);
  }
 
 else if(this.substraction=="substraction"){
  console.log(this.substraction);
    this.number3=Number(this.number1)-Number(this.number2);
  }
  
 else if(this.multiplication=="multiplication"){
  console.log(this.multiplication);
    this.number3=Number(this.number1)*Number(this.number2);
  }
 else if(this.divide=="divide"){
  console.log(this.divide);
    this.number3=Number(this.number1)/Number(this.number2);
  }
}
constructor(private _service:DataService){
}

// public getAllRetireval(){
// this._service.getAll().subscribe(
// (response:any)=>{
//   this.getArray=response;
//   console.log(this.getArray);
// },
// (error:any)=>console.log(error)
//   )
// }
ngOnInit(): void {
  // this.getAllRetireval();
}
search(){

}
}

