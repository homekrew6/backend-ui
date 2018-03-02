import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SliderService } from '../../../services/slider.service';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;  
  is_active = true;
  is_disable = false;
  typeList=[{item:'user',value:'User'},{item:'worker',value:'Worker'}];
  constructor(private fb: FormBuilder, private router: Router, private sliderService: SliderService, private serviceService: ServiceService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'type': '',
      'image_url': '',
      'is_active': '',
      'file':[],
      'description':''
      
    });
   }

  ngOnInit() {
    this.rForm.controls['type'].setValue('');
  }

  public addSlider(slider){
    
    slider.is_active = this.is_active;  
    this.is_disable = true;
    if(slider.file){
      
    this.serviceService.addServiceWithFile(slider.file).subscribe(res=>{
          
          if(res){
            
            if(res.type == 'success'){
              slider.image_url = res.url;
              delete slider.file;
              this.sliderService.addSlider(slider).subscribe(res=>{
                this.is_disable = false;
                this.router.navigate(['/slider']);
              },err=>{
                this.is_disable = false;
                this.error = "Error Occured, please try again"
              })
            }            
          }else{
            this.is_disable = false;
            this.error = "Error Occured, please try again"
          }
          
    
     
    },err=>{
      this.is_disable = false;
      this.error = "Error Occured, please try again"
    })
    }else{
      this.sliderService.addSlider(slider).subscribe(res=>{
      
        this.router.navigate(['/slider']);
      },err=>{
        this.error = "Error Occured, please try again"
      })
    }
    
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
 }

 public fileChangeListener($event) {
  console.log($event);
  
  const image: any = new Image();
  let file: File = $event.target.files[0];
  const myReader: FileReader = new FileReader();
  const that = this;
  myReader.onloadend = function (loadEvent: any) {
    image.src = loadEvent.target.result;
    
  };   
  const fd = new FormData();
  fd.append('file', file);        
  this.rForm.controls['file'].setValue(fd);
  
  myReader.readAsDataURL(file);
  
}

}
