# MiniEditor
A lightweight text editor component for Angular applications.

## Features

*   Basic text formatting (bold, italic, underline, strikethrough, superscript, subscript)
*   Ordered and unordered lists
*   Undo/redo functionality
*   Link creation and removal
*   Text alignment (left, center, right, justify)
*   Indentation
*   Color selection
*   Style selection (headings, paragraph)
*   Lightweight and easy to integrate

## Installation

```bash
npm install mini-editor
```

## Local Development and Installation

For local development and testing, follow the steps:

1. Build the library, This will create a `dist/mini-editor` folder.
   ```bash
    ng build mini-editor
   ```
2. Navigate to the dist folder
   ```bash
   cd dist/mini-editor
   ```
3. Package the library
   ```bash
   npm pack
   ```
4. In your test application's project
   ```bash
   npm install ../path/to/mini-editor-x.x.x.tgz
   ```

## Usage

*app.component.ts*
```ts
import { Component } from '@angular/core';
import { MiniEditorComponent } from 'mini-editor'

@Component({
  selector: 'app-root',
  imports: [MiniEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(MiniEditorComponent) miniEditor!: MiniEditorComponent;

  getContent() {
    const content = this.miniEditor.content;
    console.log(content);
  }
}
```

*app.component.html*
```html
<mini-editor #miniEditor></mini-editor>
```
