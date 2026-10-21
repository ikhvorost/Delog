
import Log from './Log';
import Console from './Console';
import { IOutput } from './Output';
import LogItem from "./LogItem";

export default class Delog extends Log {

  public static disabled = new Delog('', null);

  public constructor(category = 'DELOG', private output: IOutput | null = new Console()) {
    super(category);
    this.logger = output ? this : undefined;
  }

  public category(name: string): Log {
    return new Log(name, this);
  }

  // @internal
  send(item: LogItem) {
    this.output?.log(item);
  }
}
