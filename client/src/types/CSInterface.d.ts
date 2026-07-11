declare class CSInterface {
  evalScript(
    script: string,
    callback: (result: string) => void
  ): void;

  getHostEnvironment(): any;
}

interface Window {
  CSInterface: typeof CSInterface;
}