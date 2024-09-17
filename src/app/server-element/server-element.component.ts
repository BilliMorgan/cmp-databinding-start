import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('Constructor has called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges >>>>>', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('Text Content>>>>>' + this.header.nativeElement.textContent);
    console.log(
      'Content of paragraph >>>>' + this.header.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(
      'Content of paragraph >>>>' + this.header.nativeElement.textContent
    );
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('Text Content>>>>>' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngAfterViewChecked');
  }
}
