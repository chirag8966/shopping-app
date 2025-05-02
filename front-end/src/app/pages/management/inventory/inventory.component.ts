import { Component } from '@angular/core';
import { RecentMissions } from '../../dashboard/components/recent-missions';

@Component({
  selector: 'app-inventory',
  imports: [RecentMissions],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {

}
