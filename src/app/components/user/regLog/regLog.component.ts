import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  @Output() correctSub: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() hideForms: EventEmitter<void> = new EventEmitter<void>();
  @Input() showform = "log"
  regForm: FormGroup;
  authForm: FormGroup;
  submitedReg = false
  submitedAuth = false
  regMessage = false
  autMessage = false
  passwordLatin = false
  passwordUpperCase = false
  passwordSymbols = false
  passwordCompare = false
  passwordLength = false
  regMessageText = "ok"
  authMessageText = "ok"
  constructor(
    private fb: FormBuilder,
    private request:RequestsService,
    private router:Router,
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
    ) {
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
    this.authForm = this.fb.group({
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
    this.submitedReg = true
    this.request.sendPostRequest(environment.apiUrl+"/user", this.regForm.value).subscribe(
      (data)=>{
        this.submitedReg = false
      },
      (error) => {
        this.submitedReg = false
        if(error.status === 400) {
          this.regMessageText = error.error.message
        }
        this.regMessage = true
        setTimeout(() => {
          this.regMessage = false
        }, 2500);
      }
    )
  }
  onSubLogin(){
    this.submitedAuth = true
    this.request.sendPostRequest(environment.apiUrl+"/user/auth/login", this.authForm.value).subscribe(
      (data)=>{
        this.submitedAuth = false
        this.router.navigate(["/user/dashboard"])
        this.correctSub.emit(true);
      },
      (error) => {
        this.submitedAuth = false
        if(error.status === 400) {
          this.authMessageText = error.error.message
        }
        this.autMessage = true
        setTimeout(() => {
          this.autMessage = false
        }, 2500);
      }
    )
  }
  hide() {
    this.hideForms.emit()
  }
}
