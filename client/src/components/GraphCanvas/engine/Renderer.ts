export default class Renderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Unable to create Canvas 2D Context.");
    }

    this.ctx = context;
  }

  public resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  public clear() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }

  public getContext() {
    return this.ctx;
  }
}