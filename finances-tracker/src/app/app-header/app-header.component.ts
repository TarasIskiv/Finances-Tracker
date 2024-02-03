import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent 
{
  @Input() public income: number = 0;
  @Input() public outcome: number = 0;

}
