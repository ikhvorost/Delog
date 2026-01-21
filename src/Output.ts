import LogItem from "./LogItem";

export interface IOutput {
  log(item: LogItem): void;
}

export default class Output implements IOutput {
  constructor(private callback: (item: LogItem) => void) {
  }

  log(item: LogItem) {
    this.callback(item);
  }
}