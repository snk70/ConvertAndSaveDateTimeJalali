import {JalaliDateTime} from 'jalali-date-time';
import {Button} from 'react-native';

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
  // console.log('Jalali Date Time:', `'${jalali.now().replace(' ', '')}'`);

  return (
    <Button
      title="Click"
      onPress={() => {
        const current = new Date();
        console.log('First:', current);
        current.setDate(current.getDate()+60);
        console.log('Last:', current);
      }}
    />
  );
}

export default MyDate;
