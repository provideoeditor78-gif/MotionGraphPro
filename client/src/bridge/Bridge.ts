export class Bridge {
  /**
   * Check if Adobe CEP is available.
   */
  static isCEPAvailable(): boolean {
    return typeof (window as any).CSInterface !== "undefined";
  }

  /**
   * Execute ExtendScript function.
   */
  static evalScript(script: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.isCEPAvailable()) {
        reject("CSInterface is not available.");
        return;
      }

      const cs = new (window as any).CSInterface();

      cs.evalScript(script, (result: string) => {
        resolve(result);
      });
    });
  }

  /**
   * Get host application information.
   */
  static getHostEnvironment() {
    if (!this.isCEPAvailable()) {
      return null;
    }

    const cs = new (window as any).CSInterface();
    return cs.getHostEnvironment();
  }
}