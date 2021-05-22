import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http/http.service';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit() {}

  onSaveData() {
    this.http.storeData().subscribe((res: any) => {
      console.log('saveData', res);
    });
  }
}
