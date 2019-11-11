import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  emailUrl = 'https://5z6rc5p27i.execute-api.us-west-2.amazonaws.com/default';

  sendEmail(sender, name, comments) {
    const body = {
      sender,
      name,
      comments
    };

    return this.http.post(this.emailUrl, body);
  }
}
