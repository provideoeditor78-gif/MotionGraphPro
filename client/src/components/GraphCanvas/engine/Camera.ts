import { CameraState } from "./types";

export default class Camera {

  private state: CameraState;

  constructor() {
    this.state = {
      zoom: 1,
      offsetX: 0,
      offsetY: 0,
    };
  }

  public getState(): CameraState {
    return this.state;
  }

  public zoomIn(step = 0.1) {
    this.state.zoom += step;
  }

  public zoomOut(step = 0.1) {
    this.state.zoom = Math.max(0.2, this.state.zoom - step);
  }

  public pan(dx: number, dy: number) {
    this.state.offsetX += dx;
    this.state.offsetY += dy;
  }

  public reset() {
    this.state = {
      zoom: 1,
      offsetX: 0,
      offsetY: 0,
    };
  }
}