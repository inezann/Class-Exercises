javascript = () => {
    var str = "javascript";
    for (var i = 0; i <= str.length; i++) {
      for (var j = 0; j < i; j++) {
        document.write(str[j]);
      }
      document.write("<br>");
    }
  }