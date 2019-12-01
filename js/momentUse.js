window.onload = function(){

  const guessTimeZone = moment.tz.guess();
  console.log("guess", guessTimeZone);

  const now = moment.utc();
  console.log(now.toDate()); // Dateオブジェクトが返される

  // 文字列からも生成できるし
  const shougatsu = moment.utc('2015-01-01');
  console.log(shougatsu.toString()); // "Thu Jan 01 2015 00:00:00 GMT+0900"

  // もちろんDateオブジェクトからも生成できる
  const kodomonohi = moment.utc(new Date('2015-05-05'));
  console.log(kodomonohi.toString()); // "Tue May 05 2015 09:00:00 GMT+0900"

  const tokyo = moment.tz(now.toDate(), guessTimeZone).format("YYYY-MM-DD h:mm:ss");
  console.log(tokyo.toString()); // "Tue May 05 2015 09:00:00 GMT+0900"
  let elm = $('<div class="text"><p>' + tokyo.toString() + '</p></div>');
  $(".moment").append(elm);
};