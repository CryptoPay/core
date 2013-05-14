function updateBtcPrice(){
    document.getElementById('btc').innerHTML = '1';
}
updateBtcPrice();

$.getJSON('https://data.mtgox.com/api/2/BTCUSD/money/ticker', function(data) {
    console.log(data);
    var obj = jQuery.parseJSON(data);
    
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(obj[key]);
        }
    }
//    alert(obj);
});

$.get("sampleGet.php", function(data) {
  alert("Data Loaded: " + data);
});
/*
$.ajax({
  url: "sampleGet.php",
  cache: false
}).done(function( html ) {
  $("#results").append(html);
});
*/