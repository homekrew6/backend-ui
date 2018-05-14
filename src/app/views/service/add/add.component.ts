import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ServiceService } from '../../../services/service.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
//import { BsModalService } from 'ngx-bootstrap/modal';
//import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DrawingManager } from '@ngui/map';
declare var jquery :any;
declare var $:any;


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild(DrawingManager) drawingManager: DrawingManager;
  rForm: FormGroup;
  error: string;
  verticalList = [];
  executionMethodList = [];
  currencyList = [];
  zoneList = [];
  selectedMapZone: any;
  firstCord: any;
  is_reoccur_able = false;
  is_active = true;
  is_disable = false;
  IsshowFeaturesField = false;
  IsShowDescField = false;
  features: any = [];

  constructor(private fb: FormBuilder, private router: Router, private serviceService: ServiceService) {
    this.rForm = fb.group({
      'name': [],
      'verticalId': [],
      'icon_class': '',
      'color_code': '',
      'currencyId': [],
      'cost_per_hour': [],
      'time_interval': [],
      'min_charge': [],
      'is_reoccur_able': '',
      'execution_method': [],
      'min_no_workers': '',
      'min_no_dedicated_workers': [],
      'zoneCostPerHour': '',
      'zoneTimeInterval': '',
      'zoneMinCharge': '',
      'zoneIsReOccurable': '',
      'zones': [],
      'file': [],
      'file1': [],
      'is_active': '',
      'search': [],
      'featuresName': [],
      'iconName': [],
      'featureDesc': []
      // ,
      // 'commission':[]


    });
    this.rForm.controls['verticalId'].setValue('');
  }

  ngOnInit() {
    $('form').on('focus', 'input[type=number]', function (e) {
      $(this).on('mousewheel.disableScroll', function (e) {
        e.preventDefault()
      });
    });
    $('form').on('blur', 'input[type=number]', function (e) {
      $(this).off('mousewheel.disableScroll')
    });
    this.getAllVertical();
    this.getAllZone();
    this.getAllExecutionMethod();
    this.getAllCurrencies();
    this.rForm.controls['currencyId'].setValue('');
    this.rForm.controls['execution_method'].setValue(0);
    this.rForm.controls['is_reoccur_able'].setValue(false);
  }

  public addService(service) {
    if (service.file1) {
      delete service.zoneCostPerHour;
      delete service.zoneTimeInterval;
      delete service.zoneMinCharge;
      //console.log(service);
      //console.log(service.file.name)
      let addServiceObj = {
        name: service.name,
        verticalId: service.verticalId,
        color_code: service.color_code,
        cost_per_hour: service.cost_per_hour,
        currencyId: service.currencyId,
        execution_method: service.execution_method,
        icon_class: service.icon_class,
        is_reoccur_able: this.is_reoccur_able,
        min_charge: service.min_charge,
        min_no_dedicated_workers: service.min_no_dedicated_workers,
        min_no_workers: service.min_no_workers,
        time_interval: service.time_interval,
        banner_image: '',
        cover_image: '',
        is_active: this.is_active,
        features:this.features
        // ,
        // commission: service.commission
      }
      this.is_disable = true;
      if (service.file) {
        let imgDetails = {
          name: service.file.name,
          type: service.file.type
        }
        //console.log(addServiceObj);

        this.serviceService.addServiceWithFile(service.file).subscribe(res => {
          console.log(res);
          if (res) {
            //console.log(res);
            if (res.type == 'success') {
              addServiceObj.banner_image = res.url;
              this.serviceService.addServiceWithFile(service.file1).subscribe((res1) => {
                if (res1) {
                  if (res1.type == 'success') {
                    addServiceObj.cover_image = res1.url;
                    this.saveServiecOnly(service, addServiceObj);
                  }
                }
              })
              //this.saveServiecOnly(service,addServiceObj);
            }
            // var xhr = new XMLHttpRequest()
            // xhr.open("PUT", res.service.signed_request)
            // xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*');
            // xhr.setRequestHeader( 'Access-Control-Allow-Headers', '*');
            // xhr.setRequestHeader('x-amz-acl', 'public-read')
            // xhr.onload = function() {
            //   if (xhr.status === 200) {
            //     //done()
            //   }
            // }

            // xhr.send(service.file)
            // addServiceObj.banner_image = res.service.url;
            // this.saveServiecOnly(service,addServiceObj);
          } else {
            this.is_disable = false;
            this.error = "Error Occured, please try again"
          }



        }, err => {
          this.is_disable = false;
          this.error = "Error Occured, please try again"
        })
      } else {
        // delete addServiceObj.banner_image;
        // this.serviceService.addServiceWithFile(service.file1).subscribe((res1) => {
        //   if (res1) {
        //     if (res1.type == 'success') {
        //       addServiceObj.cover_image = res1.url;
        //       this.saveServiecOnly(service, addServiceObj);
        //     }
        //   }
        // })
        this.is_disable=false;
        this.error = "Please add icon image.";
        window.scrollTo(0, 0);
        //this.saveServiecOnly(service, addServiceObj);
      }
    }
    else {
      this.is_disable = false;
      this.error = "Please add cover image.";
      window.scrollTo(0, 0);
    }



  }

  goToList() {
    this.router.navigate(['service']);
  }

  showFeatures() {
    this.IsshowFeaturesField = true;
  }

  public saveServiecOnly(service, addServiceObj) {
    this.serviceService.addService(addServiceObj).subscribe(resService => {
      if (resService.id) {

        for (let i = 0; i < service.zones.length; i++) {
          if (service.zones[i].selected) {
            let addServiceZoneObj = {
              zoneId: service.zones[i].id,
              serviceId: resService.id,
              cost_per_hour: service.zones[i].cost_per_hour,
              time_interval: service.zones[i].time_interval,
              min_charge: service.zones[i].min_charge,
              is_reoccur_able: service.zones[i].is_reoccur_able
            }
            this.serviceService.addServiceZone(addServiceZoneObj).subscribe(res1 => {


            }, err => {

            })
          }

          if (i >= service.zones.length - 1) {
            this.is_disable = false;
            this.router.navigate(['/service']);
          } else {
            this.is_disable = false;
            this.error = "Error Occured, please try again"
          }

        }


      }
    }, err => {
      this.is_disable = false;
      this.error = "Error Occured, please try again"
    })
  }

  public getAllVertical() {
    this.serviceService.getAllVertical().subscribe(res => {
      //console.log(res);
      this.verticalList = res;
    })
  }
  public getAllExecutionMethod() {
    this.serviceService.getAllExexutionMethod().subscribe(res => {
      //console.log(res);
      this.executionMethodList = res;
    })
  }
  public getAllCurrencies() {
    this.serviceService.getAllCurrencies().subscribe(res => {
      this.currencyList = res;
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
  public fileChangeListener1($event) {
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
    this.rForm.controls['file1'].setValue(fd);

    myReader.readAsDataURL(file);

  }

  public fileChangeListener2($event) {
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
   

    myReader.readAsDataURL(file);
    this.serviceService.addServiceWithFile(fd).subscribe((res)=>{
      if(res && res.type==='success')
      {
        this.rForm.controls['iconName'].setValue(res.url);
      }
    })

  }

  public getAllZone() {
    this.serviceService.getAllZone().subscribe(res => {
      //console.log(res);
      for (let i = 0; i < res.length; i++) {
        res[i].selected = false;
        res[i].cost_per_hour = '';
        res[i].time_interval = '';
        res[i].min_charge = '';
        res[i].is_reoccur_able = false;


      }
      console.log(res)
      this.zoneList = res;
      this.rForm.controls['zones'].setValue(this.zoneList);
    })
  }

  public changeReoccurable($e: any) {
    this.is_reoccur_able = !this.is_reoccur_able;

  }

  public showMap(selectedZone, primaryModal) {
    console.log(selectedZone);
    this.selectedMapZone = selectedZone.fencing;
    this.firstCord = selectedZone.fencing[0].lat + ', ' + selectedZone.fencing[0].lng;
    primaryModal.show();
  }

  public changeIsActive($e: any) {
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

  showDescriptionField() {
    if (this.rForm.value.featuresName) {
      const data = { name: this.rForm.value.featuresName, icon: this.rForm.value.iconName ? this.rForm.value.iconName : '', desc:'' };
      this.features.push(data);
      this.error = "";
      this.IsShowDescField = true;
    }
    else {
      this.error = "Please enter feature Name first.";
      window.scrollTo(0, 0);
    }

  }

  saveDesc() {
    if (this.rForm.value.featureDesc) {
      this.features.map((feature) => {
        if (feature.name === this.rForm.value.featuresName) {
          feature.desc=this.rForm.value.featureDesc;
        }
      });
      this.IsShowDescField=false;
      this.IsshowFeaturesField=false;
      this.rForm.controls['verticalId'].setValue(this.rForm.controls['verticalId'].value);
      this.rForm.controls['name'].setValue(this.rForm.controls['name'].value);
      this.rForm.controls['icon_class'].setValue(this.rForm.controls['icon_class'].value);
      this.rForm.controls['color_code'].setValue(this.rForm.controls['color_code'].value);
      this.rForm.controls['currencyId'].setValue(this.rForm.controls['currencyId'].value);
      this.rForm.controls['cost_per_hour'].setValue(this.rForm.controls['cost_per_hour'].value);
      this.rForm.controls['time_interval'].setValue(this.rForm.controls['time_interval'].value);
      this.rForm.controls['min_charge'].setValue(this.rForm.controls['min_charge'].value);
      this.rForm.controls['is_reoccur_able'].setValue(this.rForm.controls['is_reoccur_able'].value);
      this.rForm.controls['execution_method'].setValue(this.rForm.controls['execution_method'].value);
      this.rForm.controls['min_no_workers'].setValue(this.rForm.controls['min_no_workers'].value);

      this.rForm.controls['min_no_dedicated_workers'].setValue(this.rForm.controls['min_no_dedicated_workers'].value);
      this.rForm.controls['zoneCostPerHour'].setValue(this.rForm.controls['zoneCostPerHour'].value);
      this.rForm.controls['zoneTimeInterval'].setValue(this.rForm.controls['zoneTimeInterval'].value);
      this.rForm.controls['zoneMinCharge'].setValue(this.rForm.controls['zoneMinCharge'].value);
      this.rForm.controls['zoneIsReOccurable'].setValue(this.rForm.controls['zoneIsReOccurable'].value);
      this.rForm.controls['zones'].setValue(this.rForm.controls['zones'].value);
      this.rForm.controls['file'].setValue(this.rForm.controls['file'].value);
      this.rForm.controls['file1'].setValue(this.rForm.controls['file1'].value);
      this.rForm.controls['is_active'].setValue(this.rForm.controls['is_active'].value);
      this.rForm.controls['search'].setValue(this.rForm.controls['search'].value);
      this.rForm.controls['featuresName'].setValue('');
      this.rForm.controls['iconName'].setValue('');
      this.rForm.controls['featureDesc'].setValue('');
    }
    else {
      this.error = "Please enter feature description first.";
      window.scrollTo(0, 0);
    }
  }

}
