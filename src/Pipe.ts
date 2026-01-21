import { IOutput } from "./Output";
import LogItem from "./LogItem";
import Filter from "./Filter";

export default class Pipe implements IOutput {
  constructor(private outputs: IOutput[]) {
  }

  log(item: LogItem) {
    for (const output of this.outputs) {
      if (output instanceof Filter && output.isIncluded(item) == false) {
        break;
      }

      output.log(item);
    }
  }
}
