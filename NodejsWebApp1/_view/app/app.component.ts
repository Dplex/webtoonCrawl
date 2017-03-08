import { Component } from '@angular/core';

@Component({
    selector: 'nodejsapp',
    template: '<h1>Hello {{name}}</h1>\
    <hr class="colored">\
    <p>ALl of sample</p>',

})

export class AppComponent {
    name = "오여사";
    title = "hihi";
}