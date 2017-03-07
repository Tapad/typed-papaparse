import { ParseResultWithHeader, ParseResultWithoutHeader } from './parse-result';
import { ParseError } from './parse-error';
import { Parser } from './parser';

interface BaseParseConfig {
  /**
   * The delimiting character. Leave blank to auto-detect. It can be a string or a function.
   * If string, it must be one of length 1. If a function, it must accept the input as first
   * parameter and it must return a string which will be used as delimiter. In both cases it
   * cannot be found in Papa.BAD_DELIMITERS.
   */
  delimiter?: string;

  /**
   * The newline sequence. Leave blank to auto-detect.
   * Must be one of `\r`, `\n`, or `\r\n`.
   */
  newline?: '\r' | '\n' | '\r\n';

  /**
   * The character used to quote fields. The quoting of all fields is not mandatory.
   * Any field which is not quoted will correctly read.
   */
  quoteChar?: string;

  header?: boolean;

  /**
   * If true, numeric and boolean data will be converted to their type instead of remaining
   * strings. Numeric data must conform to the definition of a decimal literal.
   * (European-formatted numbers must have commas and dots swapped.)
   */
  dynamicTyping?: boolean;

  /**
   * If > 0, only that many rows will be parsed.
   */
  preview?: number;

  /**
   * The encoding to use when opening local files. If specified, it must be a value supported
   * by the FileReader API.
   */
  encoding?: string;

  /**
   * Whether or not to use a worker thread. Using a worker will keep your page reactive, but
   * may be slightly slower. Web Workers also load the entire Javascript file, so be careful
   * when combining other libraries in the same file as Papa Parse.
   */
  worker?: boolean;

  /**
   * A string that indicates a comment (for example, "#" or "//"). When Papa encounters
   * a line starting with this string, it will skip the line.
   */
  comments?: boolean;

  download?: boolean;

  /**
   * If true, lines that are completely empty will be skipped. An empty line is defined to
   * be one which evaluates to empty string.
   */
  skipEmptyLines?: boolean;

  /**
   * Fast mode speeds up parsing significantly for large inputs. However, it only works when
   * the input has no quoted fields. Fast mode will automatically be enabled if no "
   * characters appear in the input. You can force fast mode either way by setting it to true
   * or false.
   */
  fastMode?: boolean;

  /**
   * A boolean value passed directly into XMLHttpRequest's "withCredentials" property.
   */
  withCredentials?: boolean;

  step?: (results: ParseResultWithHeader<any> | ParseResultWithoutHeader, parser: Parser) => void;
  complete?: (results: ParseResultWithHeader<any> | ParseResultWithoutHeader, file?: File) => void;
  error?: (error: ParseError, file?: File) => void;
  chunk?: (results: ParseResultWithHeader<any> | ParseResultWithoutHeader, parser: Parser) => void;
  beforeFirstChunk?: (chunk: string) => string | void;
}

interface BaseParseConfigWithoutHeader extends BaseParseConfig {
  header?: false;

  step?: (results: ParseResultWithoutHeader, parser: Parser) => void;
  complete?: (results: ParseResultWithoutHeader, file?: File) => void;
  error?: (error: ParseError, file?: File) => void;
  chunk?: (results: ParseResultWithoutHeader, parser: Parser) => void;
  beforeFirstChunk?: (chunk: string) => string | void;
}

export interface ParseConfigWithoutHeader extends BaseParseConfigWithoutHeader {
  download?: false;
}

export interface ParseDownloadConfigWithoutHeader extends BaseParseConfigWithoutHeader {
  /**
   * If true, this indicates that the string you passed as the first argument to parse() is actually a URL from which to download a file and parse its contents.
   */
  download: true;
}

interface BaseParseConfigWithHeader<T> extends BaseParseConfig {
  /**
   * If true, the first row of parsed data will be interpreted as field names. An array of
   * field names will be returned in meta, and each row of data will be an object of values
   * keyed by field name instead of a simple array. Rows with a different number of fields
   * from the header row will produce an error. Warning: Duplicate field names will overwrite
   * values in previous fields having the same name.
   */
  header: true;

  step?: (results: ParseResultWithHeader<T>, parser: Parser) => void;
  complete?: (results: ParseResultWithHeader<T>, file?: File) => void;
  error?: (error: ParseError, file?: File) => void;
  chunk?: (results: ParseResultWithHeader<T>, parser: Parser) => void;
  beforeFirstChunk?: (chunk: string) => string | void;
}

export interface ParseConfigWithHeader<T> extends BaseParseConfigWithHeader<T> {
  download?: false;
}

export interface ParseDownloadConfigWithHeader<T> extends BaseParseConfigWithHeader<T> {
  /**
   * If true, this indicates that the string you passed as the first argument to parse() is actually a URL from which to download a file and parse its contents.
   */
  download: true;
}
