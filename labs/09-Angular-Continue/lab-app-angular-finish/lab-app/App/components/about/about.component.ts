import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
/** about component*/
export class AboutComponent implements OnInit
{
    /** about ctor */
    constructor() { }

    /** Called by Angular after about component initialized */
    ngOnInit(): void { }
}