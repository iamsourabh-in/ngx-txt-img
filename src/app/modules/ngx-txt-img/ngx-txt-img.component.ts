import { Component, ViewChild, Input } from '@angular/core';
import { CanvasContext2DType } from './extendedTypes';

@Component({
  selector: 'app-ngx-txt-img',
  templateUrl: './ngx-txt-img.component.html',
  styleUrls: ['./ngx-txt-img.component.css']
})
export class NgxTxtImgComponent {

  @Input('width') canvasW: number = 200;
  @Input('height') canvasH: number = 200;
  @Input('action') action: string = "TEXT";
  @Input('content') content: string = "Hello World";
  @Input('tcolor') tcolor: string = "White";
  @Input('tfont') tfont: string = "30px Comic Sans MS";
  @Input('tbackground') tbackground: string = "Black";
  @Input('align') align: string = "Center";
  @Input('top-margin') topMargin: number = 100;
  @Input('left-margin') leftMargin: number = 50;
  @Input('line-height') lineHeight: number = 30;
  @Input('filter') filter: string = '';

  _rectColor: string = "#FF0000";
  _backgroundImage: HTMLImageElement = null;

  @ViewChild("myCanvas") myCanvas;

  context: CanvasContext2DType;

  constructor() {

  }

  // Initialize Canvas to Fit Text
  ngAfterViewInit() {

    let canvas = this.myCanvas.nativeElement;

    // Check if the background is an Image or Color
    if (this.tbackground.indexOf("http") > -1) {
      this._backgroundImage = new Image();
      this._backgroundImage.src = this.tbackground;
    }
    // Assigning width and height to Canvas
    canvas.height = this.canvasH;
    canvas.width = this.canvasW;

    this.context = canvas.getContext("2d");
    this.tick();
  }


  tick() {
    // Actually I want to call only when data changes
    requestAnimationFrame(() => {
      this.tick()
    });

    var ctx = this.context;
    ctx.clearRect(0, 0, this.canvasW, this.canvasH);
    this.startDrawing();

  }

  startDrawing() {
    if (this.action == "DRAW")
      this.drawShape();
    else
      this.drawText();
  }

  drawShape() {
    switch (this.content) {
      case "CIRCLE":
        var ctx = this.context;
        ctx.beginPath();
        ctx.arc(95, 50, 40, 50, 2 * Math.PI);
        ctx.stroke();
        break;
    }
  }

  drawText() {
    var ctx = this.context;
    if (this._backgroundImage != null)
      ctx.drawImage(this._backgroundImage, 0, 0);
    else {
      ctx.fillStyle = this.tbackground;
      ctx.fillRect(0, 0, this.canvasW, this.canvasH);
    }
    ctx.font = this.tfont;
    ctx.textAlign = this.align;

    this.wrapText(ctx, this.content, this.leftMargin, this.topMargin, this.canvasW - (this.leftMargin * 2), this.lineHeight);
    ctx.filter = this.filter;

  }


  wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillStyle = this.tcolor;
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillStyle = this.tcolor;
    context.fillText(line, x, y);
  }

}
