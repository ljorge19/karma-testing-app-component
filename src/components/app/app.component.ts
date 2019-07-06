import { Component } from '@angular/core';



@Component({
    selector: 'dynamic-form-app',
    template: require('./app.component.html')
})
export class AppComponent {
    forms: FormData[] = null;
    selectedForm: FormData = null;

    constructor() {
        
        
    }
}