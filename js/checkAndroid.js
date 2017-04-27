/* 簡易ブラウザ判定クラス　Android標準ブラウザ　*/
Browser = function() {
  this.ua = window.navigator.userAgent.toLowerCase();
}

Browser.prototype.getNameSPBrowser = function() { // iOS or Android or other
  var ua = this.ua;
  if (ua.indexOf('android') != -1) {
    return "android";
  } else if (ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1 || ua.indexOf('ipod') != -1) {
    return "ios";
  }
  return "otherBrowser";
}

Browser.prototype.getNameAndBrowser = function() { //Android default or Chrome
  var ua = this.ua;
  //例外
  if (ua.indexOf('501lv') > 0 || ua.indexOf('503hw') > 0 || ua.indexOf('4.4.2; so-05f') > 0) {
    return 'modernBrowser';
  }

  //判定メイン処理
  if (ua.indexOf('linux; u;') > 0 || ua.indexOf('version/4.') > 0 || ua.indexOf('version/3.') > 0 || ua.indexOf('version/2.0') > 0 || ua.indexOf('version/1.') > 0 || ua.indexOf('samsungbrowser') > 0) {
    return 'defaultBrowser';
  }
  return 'modernBrowser';
}

Browser.prototype.checkAndroidWebkit = function() { //Android webkit 判定 4.3- or 4.4+
  if (typeof window.orientation != "undefined" && typeof(EventSource) == "undefined") {
    return 'andWebkit';
  }
  return 'notAndWebkit';
}
