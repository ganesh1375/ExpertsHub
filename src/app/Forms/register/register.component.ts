import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidators } from '../Validators/password.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registerForm:FormGroup;

  get firstname(){
    return this.registerForm.get('firstname')
  }
  get lastname(){
    return this.registerForm.get('lastname')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword')
  }
  get register(){
    return this.registerForm;
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname :new FormControl(null,[Validators.required]),
      lastname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl('',[Validators.required])
    },{ validators: passwordValidators})
  }
  onSubmit(){
    console.log(this.registerForm.value);
    
  }

}
