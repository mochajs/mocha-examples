import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("ts-node/esm", pathToFileURL("./"));

export async function load(url, context, nextLoad) {
  if (url.endsWith(".ts")) {
    console.log("Loaded with custom loader");
    await new Promise((resolve) => setTimeout(resolve, 1));
  }
  return nextLoad(url, context);
}
