import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {environment} from "../../../../config"
import { RequestsService } from '../../../services/requests.service';
@Component({
  selector: 'app-regLog',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './regLog.component.html',
  styleUrl: './regLog.component.scss'
})
export class regLogComponent {
  regForm: FormGroup;
  loginForm: FormGroup;
  notSubmitedReg = true
  subError = false
  passwordLatin = false
  passwordUpperCase = false
  passwordSymbols = false
  passwordCompare = false
  passwordLength = false
  showform = "reg"
  subErrorText = ""
  constructor(private fb: FormBuilder, private request:RequestsService) {
    this.regForm = this.fb.group({
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required,]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(8),
      ]]
    });
    this.loginForm = this.fb.group({
      user: ['', [Validators.required,]],
      password: ['', [Validators.required]]
    });
  }
  checkLatin(){
    const value: string = this.regForm.get("password")?.value;
    const hasLatin = /^[a-zA-Z@#$%^&*!()_]+$/.test(value);
    if (hasLatin) {
      this.passwordLatin = true
    }else{
      this.passwordLatin = false
    }
  }
  checkUpperCase(){
    const value: string = this.regForm.get("password")?.value;
    const hasUpperCase = /[A-Z]/.test(value);
    if (hasUpperCase) {
      this.passwordUpperCase = true
    }else{
      this.passwordUpperCase = false
    }
  }
  checkSymbols() {
    const value: string = this.regForm.get("password")?.value;
    const hasSpecialCharacter = /[@#$%^&*!()_]/.test(value);
    if (hasSpecialCharacter) {
      this.passwordSymbols = true
    }else{
      this.passwordSymbols = false
    }
  }
  checkLength() {
    const value: string = this.regForm.get("password")?.value;
    if (value.length >7) {
      this.passwordLength = true
    }else{
      this.passwordLength = false
    }

  }
  checkPasswords() {
      const password = this.regForm.get("password")?.value;
      const confirmPassword = this.regForm.get("confirmPassword")?.value;
      if(password != confirmPassword){
        this.passwordCompare = false
      }else{
        this.passwordCompare = true
      }
  }
  onSubReg(){
    this.notSubmitedReg = false
    this.request.sendPostRequest(environment.apiUrl+"/user", this.regForm.value).subscribe(
      (data)=>{
        this.notSubmitedReg = true
      },
      (error) => {
        this.notSubmitedReg = true
        if(error.status === 400) {
          this.subErrorText = error.error.message
        }
        this.subError = true
        setTimeout(() => {
          this.subError = false
        }, 1500);
      }
    )
  }
  onSubLogin(){

  }
}
