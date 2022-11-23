import {JalaliDateTime} from 'jalali-date-time';

// Default configuration
const config = {
  timezone: 'Asia/Tehran',
  locale: 'en',
  fullTextFormat: 'W, D N Y H:I:S',
  titleFormat: 'W, D N Y',
  dateFormat: 'Y-M-D',
  //   timeFormat: 'H:I:S',
  timeFormat: '',
};

function MyDate() {
  // Load modules
  //   const JalaliDateTime = require('jalali-date-time');
  const jalali = JalaliDateTime(config);
  console.log('Jalali Date Time:', `'${jalali.now().replace(' ', '')}'`);
//   console.log('Jalali Title:', `'${jalali.toTitle()}'`);

  console.log('object');
  return jalali;
}

export default MyDate;
