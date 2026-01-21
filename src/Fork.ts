import { IOutput } from "./Output";
import LogItem from "./LogItem";

export default class Fork implements IOutput {
  constructor(private outputs: IOutput[]) {
  }

  log(item: LogItem) {
    this.outputs.forEach(output => output.log(item));
  }
}