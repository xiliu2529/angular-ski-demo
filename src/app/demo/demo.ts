import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* ===== Angular Material ===== */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    FormsModule,

    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './demo.html',
  styleUrls: ['./demo.css']
})
export class Demo {

  // 这些是给你后面练习双向绑定 / 表单用的
  city = '';
  weatherType = '';
  showHumidity = false;
  showWind = false;
  timeType = 'day';
  notify = false;
  date: Date | null = null;

}
