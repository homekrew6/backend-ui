import { debug } from 'util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MaterialService } from '../../../services/material.service';
import { ServiceService } from '../../../services/service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  is_disable=false;
  is_active = true;
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
  constructor(private fb: FormBuilder, private router: Router, private srvc: MaterialService, private serviceService: ServiceService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'price': [null, Validators.required],
      'file': [],
      'is_active': true
      
    });
   }

  ngOnInit() {
  }

  goToList()
  {
    this.router.navigate(['materials']);
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
  public addMaterial(data){
    this.is_disable=true;
    data.is_active=this.is_active;

    if(data.file)
    {
      this.serviceService.addServiceWithFile(data.file).subscribe((res) => {
        if (res && res.type == 'success') {
          data.image = res.url;
          delete data.file;
          this.srvc.addMaterial(data).subscribe((success) => {
            this.is_disable = false;
            this.router.navigate(['materials']);
          }, (err) => {
            this.is_disable = false;
            alert("Please try again later.");
          })
        }
      }, (error) => {
        this.is_disable = false;
        alert("Please try again later.");
      })
    }
    else
    {
      delete data.file;
      this.srvc.addMaterial(data).subscribe((success) => {
        this.is_disable = false;
        this.router.navigate(['materials']);
      }, (err) => {
        this.is_disable = false;
        alert("Please try again later.");
      })
    }
    
    
    
    
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
 }

}
