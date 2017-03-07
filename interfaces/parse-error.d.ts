export type ParseErrorType = 'Quotes' | 'Delimiter' | 'FieldMismatch';
export type ParseErrorCode = 'MissingQuotes' | 'UndetectableDelimiter' | 'TooFewFields' | 'TooManyFields';

export interface ParseError {
  /**
   * A generalization of the error
   */
  type: ParseErrorType;

  /**
   * Standardized error code
   */
  code: ParseErrorCode;

  /**
   * Human-readable details
   */
  message: string;

  /**
   * Row index of parsed data where error is
   */
  row: number;
}
