function getRank(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName();
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName();
  
  var dataRange = sheet.getRange(3, 10, 39, 1).getValues();　//J3~J41
  var lastRow = sheet.getRange(4, 13, sheet.getLastRow(), 1).getValues();　//M列
  var datalastrow = lastRow.filter(String).length;　//M列のデータが含まれているセルの長さ
  var data = [];
  var data2 = [];
  
  /*
  セルの情報は[　行[列]　行[列]　行[列]]というように格納されています。
  
  【1行目のデータ】 を 【5列分】 取得した場合は 
  [[data,data,data,data,data]] となります。
  
  【A列のデータ】 を 【5行分】 取得した場合は 
  [[data],[data],[data],[data],[data]]となります。
  
  【A~C列のデータ】 を 【4行分】 取得した場合は 
  [[data,data,data],[data,data,data],[data,data,data],[data,data,data]]となります
  */
  
  for(var i = 0; i <= 39; i += 7){
    data.push(dataRange[i][0]);
    data.push(dataRange[i+1][0]);
    data.push(dataRange[i+2][0]);
    data.push(dataRange[i+3][0]);
    }
  
  data2.push(data)
  var sss = sheet2.getRange(datalastrow+4, 13, 1, 24).setValues(data2)
}