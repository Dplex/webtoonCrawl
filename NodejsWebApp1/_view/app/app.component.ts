import { Component, AfterViewInit } from '@angular/core';
import '../vitality/vendor/owl-carousel/owl.carousel';

declare var hey: any;
declare var test: any;
export class webtoon implements AfterViewInit {
    ngAfterViewInit(): void {
        var s = document.createElement('script')
        s.type = "text/javascript";
        s.innerHTML = "console.log('done')";
        s.src = "../vitality/vendor/owl-carousel/owl.carousel.js";
        document.body.appendChild(s);
    }
    id: number;
    day: String;
    name: String;
    imgsrc: String;
    
}

@Component({
    selector: 'nodejsapp',
    templateUrl: "_view/app/app.component.html",

})

export class AppComponent {
    name = "오여사";
    title = "hihi";
}