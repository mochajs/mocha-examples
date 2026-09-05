export enum MessageKind {
  Greeting = "greeting",
}

export function formatMessage(name: string): string {
  return `${MessageKind.Greeting}: ${name}`;
}
