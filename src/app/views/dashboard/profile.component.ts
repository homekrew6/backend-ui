import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from './../../services/role.service';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'profile.component.html'
})
export class AdminProfileComponent implements OnInit {
    rForm: FormGroup;
    roleTypeLit: any = [];
    controlEnabled = true;
    errorMessage: any;
    successMessage: any;
    userDetails: any;
    IsShow = false;
    is_disable = false;
    IsResetPassword = false;
    IsOtpChecking = false;
    email: any;
    is_active = true;
    constructor(private authService: AuthService, private fb: FormBuilder, private roleSrvc: RoleService,
        private router: Router, private service: ServiceService) {
        this.rForm = fb.group({
            'name': [null, Validators.required],
            'phone': [null, Validators.required],
            'username': '',
            'password': [null],
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'is_active': [true],
            'role': [''],
            'zoneId': [''],
            'file': [],
            'image': [],
            'resetEmail': [],
            'otp': []
        });
    }

    goToList() {
        this.router.navigate(['/dashboard']);
    }
    ngOnInit() {
        if (localStorage.getItem("role") == "admin") {
            this.IsShow = false;
        }
        else {
            this.IsShow = true;
        }
        const self=this;
        this.authService.getIndividualAgent(localStorage.getItem("userId")).subscribe((res) => {
            if (res.response.type == "Success") {
                this.userDetails = res.response.message;
                this.rForm.controls['name'].setValue(self.userDetails.name);
                this.rForm.controls['phone'].setValue(self.userDetails.phone);
                this.rForm.controls['username'].setValue(self.userDetails.username);
                this.rForm.controls['password'].setValue(self.userDetails.password);
                this.rForm.controls['email'].setValue(self.userDetails.email);
                this.is_active = self.userDetails.is_active;
                this.rForm.controls['is_active'].setValue(self.userDetails.is_active);   
                this.rForm.controls['role'].setValue(self.userDetails.role);
                this.rForm.controls['zoneId'].setValue(self.userDetails.zoneId);
                this.rForm.controls['image'].setValue(self.userDetails.image ? self.userDetails.image : '');
                this.rForm.controls['resetEmail'].setValue('');
                this.rForm.controls['file'].setValue([]);
            }
            else {
                this.errorMessage = "Please try again later.";
                window.scrollTo(0, 0);
            }
            console.log(res)
        })
        this.roleSrvc.getRoleTypes().subscribe((roles) => {
            let finalList = [];
            roles.map((item) => {
                if (item.is_active == true) {
                    finalList.push(item);
                }

            })
            this.roleTypeLit = finalList;
        })
    }

    emailCheck() {
        this.IsResetPassword = true;
    }
    public editAgent(admin) {
        if (this.IsResetPassword == false) {
            delete admin.resetEmail;
            delete admin.otp;
            this.errorMessage = '';
            console.log(admin);
            this.is_disable = true;
            const self = this;
            if (admin.file.length==undefined) {
                this.service.addServiceWithFile(admin.file).subscribe((success) => {
                    if (success.type == "success") {
                        admin.image = success.url;
                        self.userDetails.image = success.url;
                        self.authService.editAgent(admin, self.userDetails.id).subscribe(res => {
                            //console.log(res);
                            //this.router.navigate(['/dashboard']);
                            self.successMessage = "Saved successfully.";
                            self.is_disable = false;
                            window.scrollTo(0, 0);
                        }, err => {
                            self.is_disable = false;
                            self.errorMessage = "Error Occured, please try again"
                            window.scrollTo(0, 0);
                        })
                    }

                })
            }
            else {
                self.authService.editAgent(admin, self.userDetails.id).subscribe(res => {
                    //console.log(res);
                    //this.router.navigate(['/dashboard']);
                    self.successMessage = "Saved successfully.";
                    self.is_disable = false;
                    window.scrollTo(0, 0);
                }, err => {
                    self.is_disable = false;
                    self.errorMessage = "Error Occured, please try again"
                    window.scrollTo(0, 0);
                })
            }

        }
        else {
            if (this.IsResetPassword == true && this.IsOtpChecking == false) {
                if (admin.resetEmail) {
                    this.is_disable = true;
                    const data = { email: admin.resetEmail };
                    this.authService.emailChecking(data).subscribe((res) => {
                        if (res) {
                            this.authService.adminReset({ email: admin.resetEmail }).subscribe((res1) => {
                                this.is_disable = false;
                                this.IsOtpChecking = true;
                            })
                        }
                    }, (error) => {
                        this.is_disable = false;
                        this.errorMessage = "Email does not exists.";
                        window.scrollTo(0, 0);
                    })
                }
                else {
                    this.is_disable = false;
                    this.errorMessage = "Please give an email to reset."
                    window.scrollTo(0, 0);
                }
            }
            else {
                if (admin.otp) {
                    if (admin.password) {
                        this.is_disable = true;
                        this.errorMessage = "";
                        this.authService.otpChecking({ otp: admin.otp }).subscribe((res) => {
                            this.authService.resetPassword({ accessToken: res.response.access_token, newPassword: admin.password }).subscribe((res1) => {
                                this.successMessage = "Password changed successfully.";
                                window.scrollTo(0, 0);
                            })
                        }, (error) => {
                            this.is_disable = false;
                            this.errorMessage = "Otp does not match.";
                            window.scrollTo(0, 0);
                        })
                    }
                    else {
                        this.is_disable = false;
                        this.errorMessage = "Please enter password.";
                        window.scrollTo(0, 0);
                    }
                }
                else {
                    this.is_disable = false;
                    this.errorMessage = "Please enter the otp sent in your email.";
                    window.scrollTo(0, 0);
                }
            }

        }


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
