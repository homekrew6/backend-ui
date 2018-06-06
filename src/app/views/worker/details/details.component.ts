import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { WorkerService } from '../../../services/worker.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  error: string;
  is_active = true;
  workerId: any;
  skillsList = [];
  IsEditSkills = false;
  IsEditZone = false;
  IsShowSkillBUtton = false;
  IsShowTimingButton = false;
  jobList = [];
  IsShowZoneButton = false;
  serviceList = [];
  selectedSkills = [];
  workerZonesList = [];
  finalTimingData = [];
  selectedZones = [];
  IsEditTiming = false;
  timingData = [];
  zoneList = [];
  data = {
    "workerId": '',
    "data": [{
      "id": 1,
      "time": "8 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 2,
      "time": "9 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 3,
      "time": "10 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 4,
      "time": "11 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 5,
      "time": "12 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 6,
      "time": "1 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 7,
      "time": "2 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 8,
      "time": "3 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 9,
      "time": "4 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 10,
      "time": "5 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 11,
      "time": "6 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 12,
      "time": "7 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 13,
      "time": "8 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 14,
      "time": "9 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 15,
      "time": "10 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 16,
      "time": "11 pm",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 17,
      "time": "12 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 18,
      "time": "1 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 19,
      "time": "2 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 20,
      "time": "3 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 21,
      "time": "4 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 22,
      "time": "5 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 23,
      "time": "6 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    },
    {
      "id": 24,
      "time": "7 am",
      "sun": false,
      "mon": false,
      "tue": false,
      "wed": false,
      "thu": false,
      "fri": false,
      "sat": false
    }
    ]
  };
  editTimingData = [{ daysName: [{ name: "Sun" }, { name: "Mon" }, { name: "Tue" }, { name: "Wed" }, { name: "Thu" }, { name: "Fri" }, { name: "Sat" }] },
  {
    timingArray: [{ name: "8 am" }, { name: "9 am" }, { name: "10 am" }, { name: "11 am" }, { name: "12 pm" }, { name: "1 pm" }, { name: "2 pm" }, { name: "3 pm" },
    { name: "4 pm" }, { name: "5 pm" }, { name: "6 pm" }, { name: "7 pm" }, { name: "8 pm" }]
  }];
  settings = {
    columns: {
      service: {
        title: 'Service',
        valuePrepareFunction: (cell, row) => { return row.service ? row.service.name : '' }
      },
      customer: {
        title: 'Customer',
        valuePrepareFunction: (cell, row) => { return row.customer ? row.customer.name : '' }
      },
      price: {
        title: 'Price'
      },
      zone: {
        title: 'Zone',
        valuePrepareFunction: (cell, row) => { return row.zone ? row.zone.name : '' }
      },
      postedDate: {
        title: 'Job Date',
        valuePrepareFunction: (cell, row) => { const raw = new Date(row.postedDate); const formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy HH:mm:ss'); return formatted; }
      },
      status: {
        title: 'Status'
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'delete',
          title: '<i class="fa fa-trash" ></i>',
        }

      ],
    },
    attr: {
      class: 'table table-bordered'
    },


  };
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private workerService: WorkerService) {


  }
  checkUncheckSkills(item) {
    if (item.IsSelected) {
      this.selectedSkills.push(item);
    }
    else {
      let index;
      for (let i = 0; i < this.selectedSkills.length; i++) {
        if (this.selectedSkills[i].id == item.id) {
          index = i;
          break;
        }
      }

      this.selectedSkills = this.selectedSkills.slice(0, index);

    }
  }
  checkUncheckZone(item) {
    if (item.IsSelected) {
      this.selectedZones.push(item);
    }
    else {
      let index;
      for (let i = 0; i < this.selectedZones.length; i++) {
        if (this.selectedZones[i].id == item.id) {
          index = i;
          break;
        }
      }

      this.selectedZones = this.selectedZones.slice(0, index);

    }
  }
  saveZone() {
    let zoneIds = [];
    this.selectedZones.map((item) => {
      zoneIds.push(item.id);
    })
    const data = { workerId: this.workerId, zoneIds: zoneIds };
    this.workerService.saveWorkerZone(data).subscribe((res) => {
      this.IsShowZoneButton = false;
      this.IsEditZone = !this.IsEditZone;
      this.workerService.getWorkerZoneById(this.workerId).subscribe((workerZone) => {
        this.workerZonesList = workerZone;
      }, (err1) => {
        console.log(err1);
      })
    })

  }
  saveSkills() {
    let serviceIds = [];
    this.selectedSkills.map((item) => {
      serviceIds.push(item.id);
    })
    const data = { workerId: this.workerId, serviceIds: serviceIds };
    this.workerService.saveWorkerSkills(data).subscribe((res) => {
      this.IsShowSkillBUtton = false;
      this.IsEditSkills = !this.IsEditSkills;
      this.workerService.getWorkerSkillsById(this.workerId).subscribe((skills) => {
        this.skillsList = skills;
      }, (err1) => {
        console.log(err1);
      })
    })
  }
  goToList() {
    this.router.navigate(['worker']);
  }
  editSkills() {
    this.IsShowSkillBUtton = true;
    this.IsEditSkills = !this.IsEditSkills;
  }

  editTiming() {
    this.IsEditTiming = !this.IsEditTiming;
    if (this.timingData["timings"])
    {
      setTimeout(() => {
        for (let i = 0; i < this.timingData["timings"].length; i++) {
          this.showSelectedTiming(this.timingData["timings"][i].time, i);
        }
      }, 200)
    }
    

    this.IsShowTimingButton = true;

  }
  cancelZone() {
    this.IsShowZoneButton = false;
    this.IsEditZone = !this.IsEditZone;
  }
  editZone() {
    this.IsShowZoneButton = true;
    this.IsEditZone = !this.IsEditZone;
  }
  cancelSkills() {
    this.IsShowSkillBUtton = false;
    this.IsEditSkills = !this.IsEditSkills;
  }
  cancelTime() {
    this.IsShowTimingButton = false;
    this.IsEditTiming = !this.IsEditTiming;
  }
  private getTimeAmPm(day, DataWeek, key) {
    const day_status = DataWeek[day];
    let CommaValue;
    if (key !== 24) {
      CommaValue = ",";
    } else {
      CommaValue = "";
    }

    const timing = DataWeek.time + CommaValue;
    if (day_status === true) {
      return timing;
    }
  }

  private getVailableTimingList() {
    this.workerService.getAvailableTimingList(this.workerId).subscribe((res) => {
      if (res.length && res.length > 0) {
        this.timingData = res[0];
        for(let k=0;k<this.timingData["timings"].length;k++)
        {
        if(this.timingData["timings"][k]["sun"])
        {
          this.data.data[k].sun=true;
        }
        else if (this.timingData["timings"][k]["mon"]) {
          this.data.data[k].mon = true;
        }
        else if(this.timingData["timings"][k]["tue"])
        {
          this.data.data[k].tue=true;
        }
        else if(this.timingData["timings"][k]["wed"])
        {
          this.data.data[k].wed=true;
        }
        else if(this.timingData["timings"][k]["thu"])
        {
          this.data.data[k].thu=true;
        }
        else if(this.timingData["timings"][k]["fri"])
        {
          this.data.data[k].fri=true;
        }
        else if (this.timingData["timings"][k]["sat"]) {
          this.data.data[k].sat = true;
        }

        }
        let finalData = [{ dayName: "Sunday", day: 'sun', timing: '' }, { dayName: "Monday", day: 'mon', timing: '' }, { dayName: "Tuesday", day: 'tue', timing: '' },
        { dayName: "Wednesday", day: 'wed', timing: '' }, { dayName: "Thursday", day: 'thu', timing: '' }, { dayName: "Friday", day: 'fri', timing: '' }, { dayName: 'Saturday', day: 'sat', timing: '' }];

        for (let j = 0; j < finalData.length; j++) {
          for (let i = 0; i < this.timingData["timings"].length; i++) {
            let timing = this.getTimeAmPm(finalData[j].day, this.timingData["timings"][i], i);
            if (timing) {
              if (finalData[j].timing) {
                finalData[j].timing = finalData[j].timing + timing;
              }
              else {
                finalData[j].timing = timing;
              }
              
            }
          }
        }
        this.finalTimingData = finalData;

      }


    })
  }
  private showSelectedTiming(time, index) {
    switch (time) {
      case "8 am":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check1')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check14')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check27')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check40')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check53')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check66')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check79')["checked"] = true;
        }
        break;
      case "9 am":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check2')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check15')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check28')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check41')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check54')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check67')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check80')["checked"] = true;
        }
        break;
      case "10 am":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check3')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check16')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check29')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check42')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check55')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check68')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check81')["checked"] = true;
        }
        break;
      case "11 am":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check4')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check17')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check30')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check43')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check56')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check69')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check82')["checked"] = true;
        }
        break;
      case "12 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check5')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check18')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check31')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check44')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check57')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check70')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check83')["checked"] = true;
        }
        break;
      case "1 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check6')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check19')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check32')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check45')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check58')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check71')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check84')["checked"] = true;
        }
        break;
      case "2 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check7')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check20')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check33')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check46')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check59')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check72')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check85')["checked"] = true;
        }
        break;
      case "2 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check7')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check20')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check33')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check46')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check59')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check72')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check85')["checked"] = true;
        }
        break;
      case "3 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check8')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check21')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check34')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check47')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check60')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check73')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check86')["checked"] = true;
        }
        break;

      case "4 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check9')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check22')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check35')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check48')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check61')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check74')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check87')["checked"] = true;
        }
        break;
      case "5 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check10')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check23')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check36')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check49')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check62')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check75')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check88')["checked"] = true;
        }
        break;
      case "6 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check11')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check24')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check37')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check50')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check63')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check76')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check89')["checked"] = true;
        }
        break;
      case "7 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check12')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check25')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check38')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check51')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check64')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check77')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check90')["checked"] = true;
        }
        break;
      case "8 pm":
        if (this.timingData["timings"][index]["sun"]) {
          document.getElementById('check13')["checked"] = true;
        }
         if (this.timingData["timings"][index]["mon"]) {
          document.getElementById('check26')["checked"] = true;
        }
         if (this.timingData["timings"][index]["tue"]) {
          document.getElementById('check39')["checked"] = true;
        }
         if (this.timingData["timings"][index]["wed"]) {
          document.getElementById('check52')["checked"] = true;
        }
         if (this.timingData["timings"][index]["thu"]) {
          document.getElementById('check65')["checked"] = true;
        }
         if (this.timingData["timings"][index]["fri"]) {
          document.getElementById('check78')["checked"] = true;
        }
         if (this.timingData["timings"][index]["sat"]) {
          document.getElementById('check91')["checked"] = true;
        }
        break;

      default:
        break;
    }
  }

  getCheckBoxValue(event, day, time) {
    console.log(this.data);
    const checkBoxValue = document.getElementById(event)["checked"];
    for (let i = 0; i < this.data.data.length; i++) {
      if (this.data.data[i].time == time) {
        this.data.data[i][day] = checkBoxValue;
        break;
      }
    }
  }
  ngOnInit() {
    this.workerService.getSkillsList().subscribe((res) => {
      res.map((item) => {
        item.IsSelected = false;
      })
      this.serviceList = res;
      this.workerService.getZoneList().subscribe((zones) => {
        zones.map((item) => {
          item.IsSelected = false;
        });
        this.zoneList = zones;
        this.activatedRoute.params.subscribe((params: Params) => {
          this.workerId = params['id'];
          this.data.workerId = this.workerId;
          this.getVailableTimingList();
          this.workerService.getJobListingById(this.workerId).subscribe((jobs) => {
            this.jobList = jobs;
          })
          this.workerService.getWorkerZoneById(this.workerId).subscribe((workerZone) => {
            this.workerZonesList = workerZone;
            for (let i = 0; i < this.workerZonesList.length; i++) {
              if (this.workerZonesList[i].zone) {
                this.workerZonesList[i].zone.IsSelected = true;
                this.selectedZones.push(this.workerZonesList[i].zone);
                for (let j = 0; j < this.zoneList.length; j++) {
                  if (this.zoneList[j].id == this.workerZonesList[i].zone.id) {
                    this.zoneList[j].IsSelected = true;
                  }
                }
              }

            }
          })
          this.workerService.getWorkerSkillsById(this.workerId).subscribe((skills) => {
            this.skillsList = skills;
            for (let i = 0; i < this.skillsList.length; i++) {
              if (this.skillsList[i].service) {
                this.skillsList[i].service.IsSelected = true;
                this.selectedSkills.push(this.skillsList[i].service);
                for (let j = 0; j < this.serviceList.length; j++) {
                  if (this.serviceList[j].id == this.skillsList[i].service.id) {
                    this.serviceList[j].IsSelected = true;
                  }
                }
              }

            }


          }, (err1) => {
            console.log(err1);
          })
          // this.getIndividualWorker(this.workerId);
        });
      })

    })

  }

  public addWorker(worker) {
    worker.is_active = this.is_active;
    this.workerService.addWorker(worker).subscribe(res => {
      //console.log(res);
      this.router.navigate(['/worker']);
    }, err => {
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any) {
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

  saveTime() {
    if (this.timingData["timings"]) {
      this.timingData["timings"]=this.data.data;
      this.workerService.editWorkerTiming(this.timingData).subscribe((res) => {
        this.IsShowTimingButton = false;
        this.IsEditTiming = !this.IsEditTiming;
        this.getVailableTimingList();
      }, (error) => {
        console.log(error);
        this.error = "Please try again later.";
        window.scrollTo(0, 0);
      })
    }
    else {
     const data={"timings":this.data.data, "workerId":this.data.workerId};
      this.workerService.addWorkerTiming(data).subscribe((res) => {
        this.IsShowTimingButton = false;
        this.IsEditTiming = !this.IsEditTiming;
        this.getVailableTimingList();
      }, (error) => {
        console.log(error);
        this.error = "Please try again later.";
        window.scrollTo(0, 0);
      })
    }
  }

}
