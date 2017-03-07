import {
  ParseConfigWithHeader, ParseConfigWithoutHeader, ParseDownloadConfigWithHeader,
  ParseDownloadConfigWithoutHeader, ParseResultWithHeader, ParseResultWithoutHeader,
  UnparseConfig, UnparseData
} from './interfaces';

export {
  ParseConfigWithHeader, ParseConfigWithoutHeader, ParseDownloadConfigWithHeader,
  ParseDownloadConfigWithoutHeader, ParseError, Parser, ParseResultMetaWithHeader,
  ParseResultMetaWithoutHeader, ParseResultWithHeader, ParseResultWithoutHeader,
  UnparseConfig, UnparseData
} from './interfaces';

/**
 * Parse a csv string without headers.
 */
export function parse(csvString: string, config?: ParseConfigWithoutHeader): ParseResultWithoutHeader;

/**
 * Parse a url without headers.
 */
export function parse(url: string, config: ParseDownloadConfigWithoutHeader): void;

/**
 * Parse a csv file without headers.
 */
export function parse(file: File, config?: ParseConfigWithoutHeader): ParseResultWithoutHeader;

/**
 * Parse a csv string with headers.
 */
export function parse<T>(csvString: string, config: ParseConfigWithHeader<T>): ParseResultWithHeader<T>;

/**
 * Parse a url with headers.
 */
export function parse<T>(url: string, config: ParseDownloadConfigWithHeader<T>): void;

/**
 * Parse a csv file with headers.
 */
export function parse<T>(file: File, config: ParseConfigWithHeader<T>): ParseResultWithHeader<T>;

/**
 * Unparse an array of objects to correct delimited text strings.
 */
export function unparse(data: object[], config?: UnparseConfig): string;

/**
 * Unparse an array of arrays to correct delimited text strings.
 */
export function unparse(data: any[][], config?: UnparseConfig): string;

/**
 * Unparse a data object to correct delimited text strings.
 */
export function unparse(data: UnparseData, config?: UnparseConfig): string;

/**
 * An array of characters that are not allowed as delimiters.
 */
export const BAD_DELIMITERS: string[];

/**
 * The true delimiter. Invisible. ASCII code 30. Should be doing the job we strangely rely upon
 * commas and tabs for.
 */
export const RECORD_SEP: '\x1e';

/**
 * Also sometimes used as a delimiting character. ASCII code 31.
 */
export const UNIT_SEP: '\x1f';

/**
 * Whether or not the browser supports HTML5 Web Workers. If false, `worker: true` will have no effect.
 */
export const WORKERS_SUPPORTED: boolean;

/**
 * The relative path to Papa Parse.
 * This is automatically detected when Papa Parse is loaded synchronously.
 * However, if you load Papa Parse asynchronously (e.g. with RequireJS),
 * you need to set this variable manually in order to use Web Workers.
 * (In those cases, this variable is not read-only and you should set it!)
 */
export let SCRIPT_PATH: string;

/**
 * The size in bytes of each file chunk. Used when streaming files obtained from the DOM
 * that exist on the local computer. Default 10 MB.
 */
export let LocalChunkSize: number;

/**
 * Same as LocalChunkSize, but for downloading files from remote locations. Default 5 MB.
 */
export let RemoteChunkSize: number;

/**
 * The delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
 */
export let DefaultDelimiter: string;
