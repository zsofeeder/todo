import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessage: string;

  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params.name;
  }

  invokeBackendServiceWithParam() {
    this.service.invokeWelcomeWithParam(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error));
  }

  invokeBackendService() {
    this.service.invokeWelcome().subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfullResponse(response) {
    this.welcomeMessage = response.name;
  }

  handleErrorResponse(error) {
    console.log(error.error);
    this.welcomeMessage = error.error.message;
  }
}
