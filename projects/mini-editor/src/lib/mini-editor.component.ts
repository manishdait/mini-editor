import { Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MiniEditorFonts, MiniEditorIcons, MiniEditorStyles } from './types/mini-editor.type';

@Component({
  selector: 'mini-editor',
  imports: [FontAwesomeModule],
  templateUrl: './mini-editor.component.html',
  styleUrl: './mini-editor.component.css'
})
export class MiniEditorComponent {
  protected icons: Record<string, IconDefinition> = MiniEditorIcons;
  protected styles: string[] = MiniEditorStyles;
  protected fonts: string[] = MiniEditorFonts;
  protected sizes: number[] = [];

  @ViewChild('textContent') protected textContent!:ElementRef;
  @Input('focusHighlightColor') highlightColor: string = '#ddd';

  @HostBinding('style.--focus-highlight-style')
  get focusHighlightStyle() {
    return this.highlightColor;
  }

  constructor () {
    for (var i = 1; i <= 7; i++) {
      this.sizes.push(i);
    }
  }

  private execute(command: string, arg: string) {
    if (!arg || arg == '') {
      document.execCommand(command);
    }
    else {
      document.execCommand(command, false, arg);
      if (arg == '<p>') {
        var ele: HTMLElement = window.getSelection()?.focusNode?.parentNode as HTMLElement;
        ele.style.margin = '0px';
        ele.style.padding = '0px';
      }
    }
  }

  protected modify(command: string) {
    this.execute(command, '');
  }

  protected redo() {
    this.execute('redo', '')
  }

  protected undo() {
    this.execute('undo', '')
  }

  protected link(command: string) {
    if (command == 'unlink') {
      this.execute(command, '');
      return;
    }
    var url = prompt("Enter url");
    if (url){
      this.execute(command, url);
    }
  }

  protected list(command: string) {
    this.execute(command, '');
  }

  protected align(command: string) {
    this.execute(command, '');
  }

  protected indent(command: string) {
    this.execute(command, '');
  }

  protected color(color: string) {
    console.log(color);
    
    this.execute('foreColor', color);
  }

  protected changeStyle(style: string) {
    const map: Record<string, string> = {
      'Heading 1' : '<h1>',
      'Heading 2' : '<h2>',
      'Heading 3' : '<h3>',
      'Heading 4' : '<h4>'
    };

    var tag: string = map[style] || '<p>';
    this.execute('formatBlock', tag);
  }

  protected changeSize(size: string) {
    this.execute('fontSize', size)
  }

  get content() {
    return this.textContent.nativeElement.innerHTML;
  }

  public reset() {
    this.textContent.nativeElement.innerHTML = '';
  }
}
