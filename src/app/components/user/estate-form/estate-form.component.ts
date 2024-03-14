import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestsService } from '../../../services/requests.service';
import {environment} from "../../../../config"
@Component({
  selector: 'app-estate-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './estate-form.component.html',
  styleUrl: './estate-form.component.scss'
})
export class EstateFormComponent {
  realEstateForm: FormGroup;
  imgURL: any = "/assets/imgs/add.png";
  formData = new FormData();
  constructor(private fb: FormBuilder,private request: RequestsService,) {
    
    this.realEstateForm = this.fb.group({
      typeAction: ['', Validators.required],
      realEstateType: ['', Validators.required],
      landType: ['', Validators.required],
      roomsCount: [0, Validators.required],
      area: [0, Validators.required],
      dateConstruction: ['', Validators.required],
      estateStatus: [false,],
      description: ['',],
      viewsCount: [0, Validators.required],
      img: ['', Validators.required],
    });
  }

  onSubmit(){
    delete this.realEstateForm.value.img;
    for(const i of Object.keys(this.realEstateForm.value)){
      if(i != null){
        this.formData.set(i, this.realEstateForm.value[i])
      }
    }
    this.request.sendPostRequest(`${environment.apiUrl}/real-estate`,this.formData).subscribe(data=>{
      console.log(data)
    })
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (!file)
      return;
    var reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.formData.set('image', file);
      this.imgURL = reader.result; 
    }
  }
}
