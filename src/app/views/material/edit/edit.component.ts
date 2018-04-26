import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MaterialService } from '../../../services/material.service';
import { ServiceService } from '../../../services/service.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  materialId: any;
  is_active = true;
  is_disable=false;
  public editorOptions: Object = {
    placeholderText: 'Content',
    heightMin:'250px',
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }
  }
  content: string;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private srvc: MaterialService,
    private serviceService: ServiceService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'price': [null, Validators.required],
      'file': [],
      'is_active': true,
      'image':[null]
    });
   }
  goToList() {
    this.router.navigate(['materials']);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.materialId = params['id'];        
      this.getIndividualMaterial(this.materialId);
    });
  }

  public editMaterial(data){
    this.is_disable=true;   
    data.is_active = this.is_active;
    if(typeof(data.file)=='string')
    {
      delete data.file;
      this.srvc.editMaterial(data, this.materialId).subscribe(res => {
        this.router.navigate(['/materials']);
      }, err => {
        this.is_disable = false;   
        window.scrollTo(0,0);
        this.error = "Error Occured, please try again"
      })
    }
    else if (typeof (data.file) == 'object')
    {
      this.serviceService.addServiceWithFile(data.file).subscribe((success)=>{
        if (success && success.type == 'success'){
          data.image = success.url;
          delete data.file;
          this.srvc.editMaterial(data, this.materialId).subscribe(res => {
            this.router.navigate(['/materials']);
          }, err => {
            this.is_disable = false;
            window.scrollTo(0, 0);
            this.error = "Error Occured, please try again"
          })
        }
      },(erroe)=>{
        this.is_disable = false;
        window.scrollTo(0, 0);
        this.error = "Error Occured, please try again"
      })
    }
    
    
  }

  public getIndividualMaterial(Id){
    this.srvc.getIndividualMaterial(Id).subscribe(res=>{
      
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['price'].setValue(res.price);
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);  
      this.rForm.controls['file'].setValue(res.image?res.image:'');
      this.rForm.controls['image'].setValue(res.image ? res.image : '');    
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
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
  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }
 
  

}
