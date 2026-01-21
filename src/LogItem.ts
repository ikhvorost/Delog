export type LogType = 'log' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'assert' | 'fault';

export default class LogItem {
  private static icon = {
    log: '💬',
    trace: '#️⃣',
    debug: '▶️',
    info: '✅',
    warn: '⚠️',
    error: '❌',
    assert: '🅰️',
    fault: '🆘',
  };

  private static padStart(n: number, maxLength = 2) {
    return String(n).padStart(maxLength, '0');
  }

  private static time(date: Date): string {
    const hours = this.padStart(date.getHours());
    const mins = this.padStart(date.getMinutes());
    const secs = this.padStart(date.getSeconds());
    const ms = this.padStart(date.getMilliseconds(), 3);
    return `${hours}:${mins}:${secs}.${ms}`;
  }

  private static isObject(o: any) {
    return o && typeof o === 'object' && !Array.isArray(o) && o !== null;
  }

  private static stringify(item: any, separator = " "): string {
    if (Array.isArray(item)) {
      return item.map(item => LogItem.stringify(item, ",")).join(separator);
    }
    else if (LogItem.isObject(item)) {
      return JSON.stringify(item);
    }
    return item;
  }

  constructor(public readonly time: Date, 
    public readonly category: string, 
    public readonly type: LogType, 
    //public readonly level: number,
    public readonly args: any[]) {
  }

  public get message(): string {
    return LogItem.stringify(this.args);
  }

  public toString(): string {
    const icon = LogItem.icon[this.type];
    return `• ${LogItem.time(this.time)} [${this.category}] ${icon} [${this.type.toUpperCase()}] ${this.message}`
  }
};