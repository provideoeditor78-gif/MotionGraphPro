import { useEffect, useRef } from "react";

import Renderer from "../engine/Renderer";

export function useCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new Renderer(canvasRef.current);

    const resize = () => {
      renderer.resize(
        canvasRef.current!.clientWidth,
        canvasRef.current!.clientHeight
      );

      renderer.clear();
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return canvasRef;
}