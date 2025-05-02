import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { registerLicense } from '@syncfusion/ej2-base';
import { environment } from './environments/environment';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {


    ngOnInit(): void {
        registerLicense(environment.syncfusionLicense)
    }
}
