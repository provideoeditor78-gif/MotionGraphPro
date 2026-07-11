export interface Point {
  x: number;
  y: number;
}

export interface CameraState {
  zoom: number;
  offsetX: number;
  offsetY: number;
}

export interface GridOptions {
  spacing: number;
  subdivisions: number;
}

export interface ViewportSize {
  width: number;
  height: number;
}