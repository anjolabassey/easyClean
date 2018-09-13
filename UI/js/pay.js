var email;
var amount;
var cardNo;
var cvv;
var expiryDate;
var expiryMonth;
var expiryYear;
var pin;


$("#pay").click(function(event) {
    event.preventDefault();

    email = $("#email").val();
    amount = $("#amount").val();
    cardNo = $("#cardnumber").val();
    cvv = $("#cvv").val();
    expiryDate = new Date($("#expirydate").val());
    expiryMonth = expiryDate.getMonth() + 1;
    expiryYear = expiryDate.getFullYear().toString()[2] + expiryDate.getFullYear().toString()[3];
    pin = $("#pin").val();
    
    $.ajax({
        url: "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/hosted/pay",
        type: "POST",
        header: {
            "Content-Type": "application/json"
        },
        data: {
            "PBFPubKey":"FLWPUBK-f54d8d24292e377a71620bd82a8bb17c-X",
            "cardno": cardNo,
            "cvv": cvv,
            "expirymonth": expiryMonth,
            "expiryyear": expiryYear,
            "currency": "NGN",
            "country": "NG",
            "amount": amount,
            "email": email,
            "txRef": "MC-" + Date.now(),
            "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment"
        },
        success: function(result) {
            console.log(result);
        },
        error: function(error) {
            console.log(error);
    
        }
    });
});


