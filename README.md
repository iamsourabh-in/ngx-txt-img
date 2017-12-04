# ngx-txt-img

![Alt text](https://github.com/codeRusty/ngx-txt-img/blob/master/src/assets/download.png)

The AngularJS Component was developed for a reason where it was really important to render image instead of text on the fly.

You can also use this package to convert from text to image and then save it.


## Installation

To install this library, run:

```bash
$ npm install ngx-txt-img --save
```

## Consuming library

You can import your library in any Angular application by running:

```bash
$ npm install ngx-txt-img
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgxTxtImgModule } from './modules/ngx-txt-img/ngx-txt-img.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxTxtImgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-txt-img 
  width = 300 
  height = 300 
  tbackground="Green" 
  left-margin=70 
  tcolor="Yellow" 
  action="TEXT" 
  filter= "blur(1px)grayscale(20)"
  content="Nice to see this text wrapped as Image" 
  tfont="30px Times New Roman">
</ngx-txt-img>
```

## Component 

selector : ngx-txt-img


## Configurable options available 

| Key                 | Default Value               | Use                                                                 |
| --------------------|:----------------------------| :-------------------------------------------------------------------|
| height: number      | default:200                 | any number                                                          |
| width : number      | default:200                 | any number                                                          |
| action : string     | default: TEXT               | TEXT                                                                |
| align: string       | default: Center             | Center, left, right                                                 |
| content : string    | default: Hello World        | .....any text....                                                   |
| left-margin:number  | default: 50                 | 50                                                                  |
| top-margin : number | default: 50                 | margin from top for text content                                    |
| line-height:number  | default: 30                 | 50                                                                  |
| tbackground:string  | default: Black              | (color/URL) color string or a URL of an Image                       |
| tcolor : string     | default: Black              | Color of the Text                                                   |
| tfont : string      | default: 30px Comic Sans MS | Font of the Text                                                    |
| filter: string      | default: ''                 | 'blur(5px)grayscale(20)' | All Css filters supported                |




## Issues

Please report bugs and issues [here](https://github.com/codeRusty/ngx-txt-img/issues).


## Docs

Get a complete detail [here](https://coderusty.github.io/ngx-txt-img/)


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Change log

### v0.2.1

- Working filters


## License

MIT © [Sourabh Rustagi](mailto:sourabh.rustagi@hotmail.com)
