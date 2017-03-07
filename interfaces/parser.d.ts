export interface Parser {
  paused(): boolean;
  aborted(): boolean;

  parse(input: string, baseIndex?: number, ignoreLastRow?: boolean): { meta: { paused: boolean } };
  pause(): void;
  resume(): void;
  abort(): void;
}
