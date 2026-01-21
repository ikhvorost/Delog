import { IOutput } from "./Output";
import LogItem, { LogType } from "./LogItem";


export default class Console implements IOutput {

  log(item: LogItem) {
    let type = item.type;
    if (type == 'assert' || type == 'fault') {
      type = 'error';
    }
    console[type].apply(console, [item.toString()]);
  }
}