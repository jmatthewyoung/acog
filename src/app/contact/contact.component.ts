import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmailService } from '../email.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService, private toastr: ToastrService) { }

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    comments: new FormControl('')
  });

  ngOnInit() {

  }

  onSubmit() {
    const formData = this.contactForm.value;
    this.emailService.sendEmail(formData.email, formData.name, formData.comments).subscribe((response) => {
      console.log(response);
    });
  }
}
