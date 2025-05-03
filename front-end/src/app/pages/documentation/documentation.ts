import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-documentation',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonModule, CardModule, TableModule, DividerModule],
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss']
})
export class Documentation {
}
