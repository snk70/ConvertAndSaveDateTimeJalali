// import {JalaliDateTime} from 'jalali-date-time';
import {Button} from 'react-native';


// // Default configuration
// const config = {
//   timezone: 'Asia/Tehran',
//   locale: 'en',
//   fullTextFormat: 'W, D N Y H:I:S',
//   titleFormat: 'W, D N Y',
//   dateFormat: 'Y-M-D',
//   timeFormat: 'H:I:S',
// };

function MyDate() {
  // const jalali = JalaliDateTime(config);

  return (
    <Button
      title="Click"
      onPress={() => {
        const current = new Date();
        console.log('First:', current);
        current.setDate(current.getDate() + 60);
        // console.log('Last:', current);

        console.log(new Intl.DateTimeFormat('fa-IR').format(current));
      }}
    />
  );
}

export default MyDate;
