import { Component, Input } from '@angular/core';
import { Month } from '../models/month.enum';
import { FormControl } from '@angular/forms';

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
