var email;
var address;
var bookDate;
var amount;

$("#pay").click(function(event) {
    event.preventDefault();

    email = $("#email").val();
    address = $("#address").val();
    bookDate = $("#bookdate").val();
    amount= $("#amount").val();
    
    $.ajax({
        url: "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/hosted/pay",
        type: "POST",
        header: {
            "Content-Type": "application/json"
        },
        data: {
            "txref": "MC-" + Date.now(),
            "PBFPubKey":"FLWPUBK-f54d8d24292e377a71620bd82a8bb17c-X",
            "customer_email": email,
            "amount": amount,
            "currency": "NGN",
            "redirect_url": "https://tranquil-taiga-31387.herokuapp.com/UI/dashboard.html"
        },
        success: function(response) {
            window.location.replace(response.data.link) ;        
        },
        error: function(error) {
            alert(error.message);
        }
    });
});
