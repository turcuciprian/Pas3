jQuery(document).ready(function() {
    var sendCode = $("#sendCode");
    var getCode = $("#getCode");
    var stringData = $("#stringData");
    var stringDataStr = '';
    if (sendCode[0]) {
        sendCode.click(function() {
            if (stringData[0]) {
                stringDataStr = stringData.val();
            }
            console.log('sending data: ' + stringDataStr);

            $.ajax({
                    method: "POST",
                    url: "http://localhost:8000/slr",
                    data: { sc: stringDataStr }
                })
                .done(function(msg) {

                    console.log("Data Saved: " + msg);
                });
        });
    }

});