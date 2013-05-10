function updateBtcPrice(){
    document.getElementById('btc').innerHTML = '1';
}
updateBtcPrice();

$.getJSON('https://data.mtgox.com/api/2/BTCUSD/money/ticker', function(data) {
    //alert(data);
    var obj = jQuery.parseJSON(data);
    
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(obj[key]);
        }
    }
//    alert(obj);
});