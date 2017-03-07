import { ParseError } from './parse-error';
import { ParseResultMetaWithoutHeader, ParseResultMetaWithHeader } from './parse-result-meta';

interface BaseParseResult {
  data: any[];

  /**
   * An array of errors.
   */
  errors: ParseError[];

  meta: ParseResultMetaWithoutHeader | ParseResultMetaWithHeader<any>;
}

export interface ParseResultWithoutHeader extends BaseParseResult {
  /**
   * An array of arrays.
   */
  data: any[][];

  /**
   * Extra information about the parse, such as delimiter used, the newline sequence, whether the
   * process was aborted, etc. Properties in this object are not guaranteed to exist in all situations.
   */
  meta: ParseResultMetaWithoutHeader;
}

export interface ParseResultWithHeader<T> extends BaseParseResult {
  /**
   * An array of objects of data keyed by the field name.
   * If more fields are found on a row of data than in the header row, an extra field will appear in that
   * row called `__parsed_extra`. It contains an array of all data parsed from that row that extended
   * beyond the header row.
   */
  data: Array<T & { __parsed_extra?: any[] }>;

  /**
   * Extra information about the parse, such as delimiter used, the newline sequence, whether the
   * process was aborted, etc. Properties in this object are not guaranteed to exist in all situations.
   */
  meta: ParseResultMetaWithHeader<T>;
}
