import { Component, OnInit } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formData = {
    username: '',
    email: '',
    password: ''
  };
onSubmit() {
  
  console.log('Form submitted with data:', this.formData);
}

  constructor(private usrService:UserService) { }

  ngOnInit(): void {
  }

}
