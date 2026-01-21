import Delog from "./Delog";
import LogItem, { LogType } from "./LogItem";

export default class Log {
  constructor(private _category: string, public logger?: Delog) {
  }

  private get isDisabled() {
    return this.logger === undefined;
  }

  private _log(type: LogType, args: any[]): LogItem | undefined {
    if (this.isDisabled) {
      return;
    }
    const item: LogItem = new LogItem(new Date(), this._category, type, args);
    this.logger?.send(item);
    return item;
  }

  public log(...args: any[]):  LogItem | undefined {
    return this._log('log', args);
  }

  public trace(...args: any[]): LogItem | undefined {
    if (this.isDisabled) {
      return;
    }
    return this._log('trace', args);
  }

  public debug(...args: any[]): LogItem | undefined {
    return this._log('debug', args);
  }

  public info(...args: any[]):  LogItem | undefined {
    return this._log('info', args);
  }

  public warn(...args: any[]):  LogItem | undefined {
    return this._log('warn', args);
  }

  public error(...args: any[]):  LogItem | undefined {
    return this._log('error', args);
  }

  public assert(condition: boolean, ...args: any[]):  LogItem | undefined {
    if (this.isDisabled) {
      return;
    }
    if (!condition) {
      return this._log('assert', args);
    }
  }

  public fault(...args: any[]):  LogItem | undefined {
    return this._log('fault', args);
  }
}