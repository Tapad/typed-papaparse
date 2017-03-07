import test = require('blue-tape');

import papaparse = require('papaparse');

let noHeaderWithoutDownload0: papaparse.ParseResultWithoutHeader = papaparse.parse('test');
let noHeaderWithoutDownload1: papaparse.ParseResultWithoutHeader = papaparse.parse('test', {
  header: false
});
let noHeaderWithoutDownload2: papaparse.ParseResultWithoutHeader = papaparse.parse('test', {
  download: false
});
let noHeaderWithoutDownload3: papaparse.ParseResultWithoutHeader = papaparse.parse('test', {
  header: false,
  download: false
});

let noHeaderWithDownload0: void = papaparse.parse('test', {
  download: true
});
let noHeaderWithDownload1: void = papaparse.parse('test', {
  header: false,
  download: true
});

let headerWithoutDownload0: papaparse.ParseResultWithHeader<any> = papaparse.parse('test', {
  header: true
});
let headerWithoutDownload1: papaparse.ParseResultWithHeader<any> = papaparse.parse('test', {
  header: true,
  download: false
});

let headerWithDownload: void = papaparse.parse('test', {
  header: true,
  download: true
});
