import { Component } from '@angular/core';
import { RecentMissions } from '../../dashboard/components/recent-missions';

@Component({
  selector: 'app-myOrders',
  imports: [RecentMissions],
  templateUrl: './myOrders.component.html',
  styleUrl: './myOrders.component.scss'
})
export class myOrdersComponent {

}
