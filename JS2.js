var dict={
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e",
    6:"f",
    7:"g",
    8:"h",
    9:"i",
    10:"j",
    11:"k",
    12:"l",
    13:"m",
    14:"n",
    15:"o",
    16:"p",
    17:"q",
    18:"r",
    19:"s",
    20:"t",
    21:"u",
    22:"v",
    23:"w",
    24:"x",
    25:"y",
    26:"z",
}
function digitalDecipher(eMessage, key){
  a=eMessage.length
  k=key.length 
  for(var i=0;i<(a-k);i+=1){
    key.push(key[i]);  
    return key;
  }
  var y = eMessage.map(function(item, index) {
    return item - key[index];
  })
  for(var n=y.keys();n<y.length;n+=1){
    p=y[n]
    var Words="";
    return Words.concat(dict[p]);
  }
  console.log(Words)
}

