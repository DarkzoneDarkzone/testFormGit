import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  public profile: {
    number: number,
    name: string,
    lastname: string,
    telephone: string,
    email: string,
    address: string
  }

  
  constructor(public fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.profile = {
      number: 10,
      name: "Anothai",
      lastname: "Yuenyao",
      telephone: '0935587962',
      email: "anothai.y@gmail.com",
      address: '30/1 m.5 Chonnabot, Khonkaen, 40180'
    }
  }

}
