import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  contact = 'Introduzca Medio';

  items = ['Facebook', 'Instagram', 'Twitter'];

  constructor() { }

  ngOnInit(): void {
  }

}
