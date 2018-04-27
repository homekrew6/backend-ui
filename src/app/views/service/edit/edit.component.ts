import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ServiceService } from '../../../services/service.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { DrawingManager } from '@ngui/map';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild(DrawingManager) drawingManager: DrawingManager;
  rForm: FormGroup;
  error: string;
  verticalList = [];
  executionMethodList = [];
  currencyList = [];
  zoneList = [];
  selectedMapZone: any;
  firstCord: any;
  serviceId: any;
  is_reoccur_able = false;
  serviceZone = [];
  is_active = true;
  is_disable = false;
  features: any = [];
  IsshowFeaturesField = false;
  IsShowDescField = false;
  editFeatureId: any;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private serviceService: ServiceService) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'verticalId': [null, Validators.required],
      'icon_class': '',
      'color_code': '',
      'currencyId': [null, Validators.required],
      'cost_per_hour': [null, Validators.required],
      'time_interval': [null, Validators.required],
      'min_charge': [null, Validators.required],
      'is_reoccur_able': '',
      'execution_method': [null, Validators.required],
      'min_no_workers': '',
      'min_no_dedicated_workers': [],
      'zoneCostPerHour': '',
      'zoneTimeInterval': '',
      'zoneMinCharge': '',
      'zoneIsReOccurable': '',
      'zones': [],
      'id': '',
      'banner_image': '',
      'cover_image': '',
      'file': [],
      'is_active': '',
      'search': [],
      'file1': [],
      'featuresName': [],
      'iconName': [],
      'featureDesc': []
      // ,
      // 'commission':[]

    });
    //this.rForm.controls['verticalId'].setValue('');
  }

  goToList()
  {
    this.router.navigate(['service']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.serviceId = params['id'];
      this.getIndividualService(this.serviceId);
    });
    this.getAllVertical();
    //this.getAllZone();
    this.getAllExecutionMethod();
    this.getAllCurrencies();
  }
  showDescriptionField() {
    if (this.rForm.value.featuresName) {
      const data = { name: this.rForm.value.featuresName, icon: this.rForm.value.iconName ? this.rForm.value.iconName : '', desc: '' };
      if (this.features) {
        this.features.push(data);
      }
      else {
        this.features = [];
        this.features.push(data);
      }

      this.error = "";
      this.IsShowDescField = true;
    }
    else {
      this.error = "Please enter feature Name first.";
      window.scrollTo(0, 0);
    }

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
    this.serviceService.addServiceWithFile(fd).subscribe((res) => {
      if (res && res.type === 'success') {
        this.rForm.controls['iconName'].setValue(res.url);
      }
    })

  }

  saveDesc() {
    if (this.rForm.value.featureDesc) {
      this.features.map((feature) => {
        if (feature.name === this.rForm.value.featuresName) {
          feature.desc = this.rForm.value.featureDesc;
        }
      });
      this.IsShowDescField = false;
      this.IsshowFeaturesField = false;
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

  editFeatures(id) {
    if (this.features[id]) {
      this.rForm.controls['featuresName'].setValue(this.features[id].name);
      this.rForm.controls['featureDesc'].setValue(this.features[id].desc);
      this.rForm.controls['iconName'].setValue(this.features[id].icon);
      this.IsShowDescField = true;
      this.IsshowFeaturesField = true;
      this.editFeatureId = id;
    }
  }

  public editService(service) {
    
    console.log(service);
    if (service.file1) {
      const addServiceObj = {
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
        banner_image: service.banner_image,
        cover_image: service.cover_image,
        is_active: this.is_active,
        features: this.features
        // ,
        // commission: service.commission
      }
      this.is_disable = true;
      if (service.file) {
        const imgDetails = {
          name: service.file.name,
          type: service.file.type
        }
        //console.log(addServiceObj);
        if (typeof (service.file) !== 'string') {
          this.serviceService.addServiceWithFile(service.file).subscribe(res => {
            //console.log(res);
            if (res) {
              if (res.type == 'success') {
                addServiceObj.banner_image = res.url;
                if (typeof (service.file1) != 'string') {
                  this.serviceService.addServiceWithFile(service.file1).subscribe((res1) => {
                    if (res1.type == 'success') {
                      addServiceObj.cover_image = res1.url;
                      this.saveServiecOnly(service, addServiceObj);

                    }
                  })
                }
                else {
                  this.saveServiecOnly(service, addServiceObj);
                }

                //this.saveServiecOnly(service,addServiceObj);
              }
              // var xhr = new XMLHttpRequest()
              // xhr.open("PUT", res.service.signed_request)
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
        }
        else {
          if (typeof (service.file1) != 'string') {
            this.serviceService.addServiceWithFile(service.file1).subscribe((res1) => {
              if (res1.type == 'success') {
                addServiceObj.cover_image = res1.url;
                this.saveServiecOnly(service, addServiceObj);

              }
            })
          }
          else {
            this.saveServiecOnly(service, addServiceObj);
          }
        }

      } else {
        if (typeof (service.file1) != 'string') {
          this.serviceService.addServiceWithFile(service.file1).subscribe((res1) => {
            if (res1) {
              if (res1.type == "success") {
                addServiceObj.cover_image = res1.url;
                this.saveServiecOnly(service, addServiceObj);
              }
            }
          })
        }
        else {
          this.saveServiecOnly(service, addServiceObj);
        }

        //delete addServiceObj.banner_image;

      }
    }
    else {
      this.error = "Please add cover image.";
      window.scrollTo(0, 0);
    }



  }




  deleteFeature(id) {

    const confirmMessage = confirm('Do you want to delete?')
    if (confirmMessage) {
      this.features.splice(id, 1);
    }
  }

  public saveServiecOnly(service, addServiceObj) {
    this.serviceService.editService(addServiceObj, this.serviceId).subscribe(res => {
      //console.log(res);      
      if (res.id) {
        this.serviceService.deleteServiceRelatedZone(this.serviceId).subscribe(res2 => {
          for (let i = 0; i < this.zoneList.length; i++) {
            if (this.zoneList[i].selected) {
              let addServiceZoneObj = {
                zoneId: this.zoneList[i].id,
                serviceId: res.id,
                cost_per_hour: this.zoneList[i].cost_per_hour,
                time_interval: this.zoneList[i].time_interval,
                min_charge: this.zoneList[i].min_charge,
                is_reoccur_able: this.zoneList[i].is_reoccur_able
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
        }, err => {
          this.is_disable = false;
          this.error = "Error Occured, please try again"
        })



      }

    }, err => {
      this.is_disable = false;
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualService(Id) {

    this.serviceService.getIndividualService(Id).subscribe(res => {
      //console.log(res);
      if (res.serviceZones.length > 0) {
        for (let i = 0; i < res.serviceZones.length; i++) {
          this.serviceZone.push(res.serviceZones[i].zoneId)
        }
        //console.log(this.serviceZone);
      }
      this.serviceService.getAllZone().subscribe(resZone => {


        // resZone.map((res,key)=>{
        //   if(this.serviceZone.indexOf(res.id) >= 0){
        //     res.selected = true;
        //     res.cost_per_hour = 1+'';
        //     res.time_interval = 2+'';
        //     res.min_charge = 10+'';
        //     res.is_reoccur_able = false;
        //   }else{
        //     res.selected = false;
        //     res.cost_per_hour = 1+'';
        //     res.time_interval = 1+'';
        //     res.min_charge = 1+'';
        //     res.is_reoccur_able = false;
        //   }
        // });
        for (let j = 0; j < resZone.length; j++) {
          if (this.serviceZone.indexOf(resZone[j].id) >= 0) {
            let pos = this.serviceZone.indexOf(resZone[j].id);
            //console.log(res.serviceZones[pos]);
            console.log(j, 'a')
            resZone[j].selected = true;

            resZone[j].cost_per_hour = res.serviceZones[pos].cost_per_hour;
            resZone[j].time_interval = res.serviceZones[pos].time_interval;
            resZone[j].min_charge = res.serviceZones[pos].min_charge;
            resZone[j].is_reoccur_able = res.serviceZones[pos].is_reoccur_able;
          } else {
            console.log(j, 'b')
            resZone[j].selected = false;
            resZone[j].cost_per_hour = '';
            resZone[j].time_interval = '';
            resZone[j].min_charge = '';
            resZone[j].is_reoccur_able = false;
          }
        }

        this.zoneList = resZone;
        console.log(this.zoneList)
        this.rForm.controls['zones'].setValue(this.zoneList);
        //this.rForm.controls['zoneCostPerHour'].setValue(1);
        //this.rForm.controls['zoneTimeInterval'].setValue(1);
        //this.rForm.controls['zoneMinCharge'].setValue(1);
      })
      this.rForm.controls['name'].setValue(res.name);
      this.rForm.controls['verticalId'].setValue(res.verticalId);
      this.rForm.controls['color_code'].setValue(res.color_code);
      this.rForm.controls['cost_per_hour'].setValue(res.cost_per_hour);
      this.rForm.controls['currencyId'].setValue(res.currencyId);
      this.rForm.controls['execution_method'].setValue(res.execution_method);
      this.rForm.controls['icon_class'].setValue(res.icon_class);
      this.rForm.controls['is_reoccur_able'].setValue(res.is_reoccur_able);
      this.rForm.controls['min_charge'].setValue(res.min_charge);
      this.rForm.controls['min_no_dedicated_workers'].setValue(res.min_no_dedicated_workers);
      // this.rForm.controls['commission'].setValue(res.commission ? '' :res. commission);
      this.rForm.controls['min_no_workers'].setValue(res.min_no_workers);
      this.rForm.controls['time_interval'].setValue(res.time_interval);
      this.rForm.controls['banner_image'].setValue(res.banner_image);
      this.rForm.controls['cover_image'].setValue(res.cover_image);
      this.is_reoccur_able = res.is_reoccur_able;
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);
      this.rForm.controls['file1'].setValue(res.cover_image);
      this.rForm.controls['file'].setValue(res.banner_image);
      this.features = res.features;

    }, err => {
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

  // public fileChangeListener($event) {
  //   //console.log($event);

  //   const image: any = new Image();
  //   const file: File = $event.target.files[0];
  //   this.rForm.controls['file'].setValue(file);
  //   const myReader: FileReader = new FileReader();
  //   const that = this;
  //   myReader.onloadend = function (loadEvent: any) {
  //     image.src = loadEvent.target.result;
  //     //console.log(image);

  //   };
  //   myReader.readAsDataURL(file);
  //   //console.log(myReader);
  // }

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

  showFeatures() {
    this.IsshowFeaturesField = true;
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
}
