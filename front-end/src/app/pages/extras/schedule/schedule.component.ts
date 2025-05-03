import { Component, inject, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
import { AgendaService, DayService, MonthAgendaService, MonthService, ScheduleModule, TimelineMonthService, TimelineViewsService, View, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ScheduleModule],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  isStylesLoaded = false;
  private rendererFactory = inject(RendererFactory2);
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
  public selectedDate: Date = new Date();
  public currentView: View = 'Month';

  ngOnInit(): void {
    this.loadSyncfusionStyles();
  }

  private loadSyncfusionStyles(): void {
    const linkId = 'syncfusion-theme';
    
    // Check if already loaded
    if (document.getElementById(linkId)) {
      this.isStylesLoaded = true;
      return;
    }

    // Create link element using Angular's Renderer2
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'id', linkId);
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', 'syncfusion.css');
    this.renderer.setAttribute(link, 'type', 'text/css');
    
    // Listen for load event to set isStylesLoaded
    this.renderer.listen(link, 'load', () => {
      this.isStylesLoaded = true;
    });
    
    // Append to head
    this.renderer.appendChild(document.head, link);
    
    // Fallback timeout in case the load event doesn't fire
    if (!this.isStylesLoaded) {
    setTimeout(() => {
        this.isStylesLoaded = true;
      }, 1000);
    }
  }
}
