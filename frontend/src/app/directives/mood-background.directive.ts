import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMoodBackground]'
})
export class MoodBackgroundDirective {
  @Input() moodBackgroundColor: string='';

  constructor(
    private el: ElementRef,
  ) {
    console.log(this.moodBackgroundColor);
    this.el.nativeElement.style.background='yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.moodBackgroundColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('');
  }

  private changeBackgroundColor(back: string) {
    this.el.nativeElement.style.background=back;
  }

}
