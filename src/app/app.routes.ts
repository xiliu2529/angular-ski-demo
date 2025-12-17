import { Routes } from '@angular/router';
import { SkiResorts } from './ski-resorts/ski-resorts';
import { SkiPricing } from './ski-pricing/ski-pricing';
import { OrderHistory } from './order-history/order-history';

export const routes: Routes = [
  { path: 'ski-resorts', component: SkiResorts },
  { path: 'ski-pricing', component: SkiPricing },
  { path: 'order-history', component: OrderHistory },
  { path: '', redirectTo: '/ski-resorts', pathMatch: 'full' }
];
