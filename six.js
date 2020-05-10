text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log(text_truncate('javascript is a scripting language.'))
console.log(text_truncate('javascript is a scripting language.',19))
console.log(text_truncate('javascript is a scripting language.',15,'!!'))