import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SkiResorts } from './ski-resorts/ski-resorts';
import { SkiPricing } from './ski-pricing/ski-pricing';
import { OrderHistory } from './order-history/order-history';
import {Demo } from './demo/demo';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ski-resorts', component: SkiResorts },
  { path: 'ski-pricing', component: SkiPricing },
  { path: 'order-history', component: OrderHistory },
  { path: 'demo', component: Demo }
];
