const prefix: string = "legacy";

export = function legacyMessage(name: string): string {
  return `${prefix}: ${name}`;
};
