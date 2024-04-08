// your-component.component.ts
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'main-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  animations: [
    trigger('showText', [
      state('true', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0 }), animate('0.5s 1s')])
    ]),
    trigger('animate', [
      state('true', style({ transform: 'scaleX(1)' })),
      transition('void => *', [style({ transform: 'scaleX(0)' }), animate('1s cubic-bezier(1, 0, 0, 5, 1)')])
    ])
  ]
})

export class MainComponent {

  constructor() {
    // const typedElement = select('.typed');

    // if (typedElement) {
    //   let typedStringsAttribute = typedElement.getAttribute('data-typed-items');
    //   let typedStrings = typedStringsAttribute.split(',');

    //   new Typed('.typed', {
    //     strings: typedStrings,
    //     loop: true,
    //     typeSpeed: 100,
    //     backSpeed: 50,
    //     backDelay: 2000
    //   });
    // }

  }

}
