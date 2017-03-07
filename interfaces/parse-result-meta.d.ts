interface BaseParseResultMeta {
  /**
   * Delimiter used
   */
  delimiter: string;

  /**
   * Line break sequence used
   */
  linebreak: '\r' | '\n' | '\r\n';

  /**
   * Whether process was aborted
   */
  aborted: boolean;

  /**
   * Whether preview consumed all input
   */
  truncated: boolean;
}

export interface ParseResultMetaWithoutHeader extends BaseParseResultMeta {
}

export interface ParseResultMetaWithHeader<T> extends BaseParseResultMeta {
  /**
   * Array of field names
   */
  fields: (keyof T)[];
}
