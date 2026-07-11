import type { CameraState, Point } from "./types";

export function worldToScreen(
  point: Point,
  camera: CameraState
): Point {
  return {
    x: point.x * camera.zoom + camera.offsetX,
    y: point.y * camera.zoom + camera.offsetY,
  };
}

export function screenToWorld(
  point: Point,
  camera: CameraState
): Point {
  return {
    x: (point.x - camera.offsetX) / camera.zoom,
    y: (point.y - camera.offsetY) / camera.zoom,
  };
}