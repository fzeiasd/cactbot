import logDefinitions from '../../../../../resources/netlog_defs';

import LineEvent from './LineEvent';
import LogRepository from './LogRepository';

const fields = logDefinitions.ChangedPlayer.fields;

// Player change event
export class LineEvent0x02 extends LineEvent {
  public readonly id: string;
  public readonly name: string;

  constructor(repo: LogRepository, line: string, parts: string[]) {
    super(repo, line, parts);

    this.id = parts[fields.id]?.toUpperCase() ?? '';
    this.name = parts[fields.name] ?? '';

    this.convertedLine = this.prefix() + 'Changed primary player to ' + this.name + '.';
  }
}

export class LineEvent02 extends LineEvent0x02 {}
