
import Log from './Log';
import Console from './Console';
import { IOutput } from './Output';
import LogItem from "./LogItem";

export default class Delog extends Log {

  public static disabled = new Delog('', undefined);

  public constructor(category = 'DELOG', private output: IOutput | undefined = new Console()) {
    super(category);
    this.logger = this;
  }

  public category(name: string): Log {
    return new Log(name, this);
  }

  // @internal
  send(item: LogItem) {
    this.output?.log(item);
  }
}
