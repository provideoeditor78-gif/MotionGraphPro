export default class Input {
  public mouseX = 0;
  public mouseY = 0;

  public update(x: number, y: number) {
    this.mouseX = x;
    this.mouseY = y;
  }
}