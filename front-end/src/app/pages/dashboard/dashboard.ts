import { Component } from '@angular/core';
import { RecentMissions } from './components/recent-missions';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { StatsWidget } from './components/stats/statswidget.component.';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RevenueStreamWidget, RecentMissions],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12">
                <app-recent-missions />
            </div>
            <div class="col-span-12">
                <app-revenue-stream-widget />
            </div>
        </div>
    `
})
export class Dashboard {}
