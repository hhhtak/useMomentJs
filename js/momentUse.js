window.onload = function(){

  const guessTimeZone = moment.tz.guess();
  console.log("guess", guessTimeZone);

  const rfc = "2019-12-12T11:30:22+09:00";
  const unixTimeStamp = 1396821803;
  const utc = "2019-12-02T13:00:12+00:00";
  const utcz = "2019-12-02T13:00:12Z";

  console.log("rfc:", moment.tz(rfc, guessTimeZone).format());
  console.log("rfc:", moment.tz(rfc, guessTimeZone).utc().format());
  console.log("rfc:", moment.utc(rfc).tz(guessTimeZone).format());

  console.log("unixTimeStamp:", moment.tz(unixTimeStamp, guessTimeZone).format());
  console.log("unixTimeStamp:", moment.tz(unixTimeStamp, guessTimeZone).utc().format());
  console.log("unixTimeStamp:", moment.utc(unixTimeStamp).tz(guessTimeZone).format());

  console.log("utc:", moment.tz(utc, guessTimeZone).format());
  console.log("utc:", moment.tz(utc, guessTimeZone).utc().format());
  console.log("utc:", moment.utc(utc).tz(guessTimeZone).format());

  console.log("utcz:", moment.tz(utcz, guessTimeZone).format());
  console.log("utcz:", moment.tz(utcz, guessTimeZone).utc().format());
  console.log("utcz:", moment.utc(utcz).tz(guessTimeZone).format());

  const now = moment.utc();
  console.log(now.toDate()); // Dateオブジェクトが返される

  // 文字列からも生成できるし
  const shougatsu = moment.utc('2015-01-01');
  console.log(shougatsu.toString()); // "Thu Jan 01 2015 00:00:00 GMT+0900"

  // もちろんDateオブジェクトからも生成できる
  const kodomonohi = moment.utc(new Date('2015-05-05'));
  console.log(kodomonohi.toString()); // "Tue May 05 2015 09:00:00 GMT+0900"

  const tokyo = moment.tz(now.toDate(), guessTimeZone).format();
  console.log(tokyo.toString()); // "Tue May 05 2015 09:00:00 GMT+0900"
  let elm = $('<div class="text"><p>' + tokyo.toString() + '</p></div>');
  $(".moment").append(elm);
};