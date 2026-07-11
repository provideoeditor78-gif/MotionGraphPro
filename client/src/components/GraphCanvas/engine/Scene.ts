import type { Drawable } from "./Drawable";

export default class Scene {
  private objects: Drawable[] = [];

  public add(object: Drawable) {
    this.objects.push(object);
  }

  public render(ctx: CanvasRenderingContext2D) {
    for (const object of this.objects) {
      object.draw(ctx);
    }
  }

  public clear() {
    this.objects = [];
  }
}