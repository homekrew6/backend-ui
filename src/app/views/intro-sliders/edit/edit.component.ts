import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SliderService } from '../../../services/slider.service';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  sliderId: any;
  is_active = true;
  is_disable = false;
  typeList=[{item:'user',value:'User'},{item:'worker',value:'Worker'}];
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private sliderService: SliderService, private serviceService: ServiceService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'type': [],
      'image_url': '',
      'is_active': '',
      'description':'',
      'file':[]
    });
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.sliderId = params['id'];        
        this.getIndividualSlider(this.sliderId);
    });
  }
  goToList()
  {
    this.router.navigate(['slider']);
  }
  public editSlider(slider){   
    slider.is_active = this.is_active;
    this.is_disable = true;
    if(slider.file){      
      this.serviceService.addServiceWithFile(slider.file).subscribe(res=>{            
            if(res){              
              if(res.type == 'success'){
                slider.image_url = res.url;
                delete slider.file;
                this.sliderService.editSlider(slider,this.sliderId).subscribe(res=>{
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
        delete slider.file;
        this.sliderService.editSlider(slider,this.sliderId).subscribe(res=>{   
          this.is_disable = false;   
          this.router.navigate(['/slider']);
        },err=>{
          this.is_disable = false;
          this.error = "Error Occured, please try again"
        })
      }
    
  }

  public getIndividualSlider(Id){
    this.sliderService.getIndividualSlider(Id).subscribe(res=>{
      
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['type'].setValue(res.type);    
      this.rForm.controls['description'].setValue(res.description); 
      this.rForm.controls['image_url'].setValue(res.image_url);  
      
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);      
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
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
