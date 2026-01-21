import { IOutput } from "./Output";
import LogItem from "./LogItem";

export default class Filter implements IOutput {
  constructor(public isIncluded: (item: LogItem) => boolean){
  }

  log(item: LogItem) {
  }
}