import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

interface States {
  name: string;
  code: string;
}

interface Hobbies {
  name: string;
  code: string;
}

interface Country {
  name: string;
  code: string;
}
interface Type {
  name:string;
  code:string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent  {
@Output() userData =new EventEmitter<any>; 
  userForm : FormGroup;
  value: number = 50;
  states: States[] | undefined;
  country: Country[] | undefined;
  addressType: Type[] | undefined;
  hobbies: Hobbies[] =[];
  selectedMulti:Hobbies[]=[];
storeUserData :any =[]


  constructor(private readonly formBuilder:FormBuilder,private readonly userService:UserService, private readonly router:Router){
    this.userForm =this.formBuilder.group(this.getUserFormAttributes())
  }

ngOnInit(){

  this.country = [
    { name: 'India', code: '1' },
    { name: 'Oman', code: '2' },
    { name: 'Qatar', code: '3' },
    { name: 'United States', code: '4' },
    { name: 'Yemen', code: '5' }
];

this.hobbies = [
  { name: 'Cricket', code: '1' },
  { name: 'FootBall', code: '2' },
  { name: 'Hockey', code: '3' },
  { name: 'BasketBall', code: '4' },
  { name: 'Kabaddi', code: '5' }
];

this.states = [
  { name: 'Andhra Pradesh', code: '1' },
  { name: 'Goa', code: '2' },
  { name: 'Karnataka', code: '3' },
  { name: 'Kerala', code: '4' },
  { name: 'Maharasta', code: '5' }
];
this.addressType=[
  { name: 'Company', code: '1' },
  { name: 'Home', code: '2' },
]
}

  getUserFormAttributes() {
    return {
        firstName: new FormControl(null, [
          Validators.required,
          
        ]),
        lastName: new FormControl(null, [
          Validators.required,
        ]),
        email: new FormControl(null, [
          
        ]),
        phoneNumber:new FormControl(null, [
          
        ]),
        ageSlider:new FormControl(null, [
          
        ]),
        selectedState:new FormControl(null, [
          
        ]),
        selectedCountry:new FormControl(null, [
          
        ]),
        addressType:new FormControl(null, [
          
        ]),
        address1:new FormControl(null, [
          
        ]),
        address2:new FormControl(null, [
          
        ]),
        tags:new FormControl(null, [
          
        ]),
        };
    }

createUser(){
  console.log(this.selectedMulti)
    let requestBody={
      photo: "",
      firstName : this.userForm.get('firstName')?.value,
      lastName: this.userForm.get('lastName')?.value,
      email : this.userForm.get('email')?.value,
     age : this.userForm.get('ageSlider')?.value ,
     phoneNo:this.userForm.get('phoneNumber')?.value,
     addressType : this.userForm.get('addressType')?.value,
     state : this.userForm.get('selectedState')?.value,
     country:this.userForm.get('selectedCountry')?.value,
     adderssFirst : this.userForm.get('address1')?.value,
     adderssSecond :this.userForm.get('address2')?.value,
     tags : this.userForm.get('tags')?.value
    }
    console.log(requestBody)
    // this.userService.postData(requestBody).subscribe({
    //   next:(response)=>{
    //     console.log(response);
    //   },error:(error)=>{
    //     console.log(error);
    //   }
    // })

this.storeUserData.push(requestBody);
console.log(this.storeUserData);
this.userData.emit(requestBody);

  }


  getData(){
    this.userForm.reset();
    this.userService.getData().subscribe({
      next:(response)=>{
        console.log(response);
      },error:(error)=>{
        console.log(error);
      }
    })
  }
}