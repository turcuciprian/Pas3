jQuery(document).ready(function() {
    var sendCode = $("#sendCode");
    var getCode = $("#getCode");
    var codeCode = $('#codecode');
    var stringData = $("#stringData");
    var stringDataStr = '';
    var serverurl = "http://localhost:8000/slr";
    if (sendCode[0]) {
        sendCode.click(function() {
            if (stringData[0]) {
                stringDataStr = stringData.val();
            }
            console.log('sending data: ' + stringDataStr);

            $.ajax({
                    method: "POST",
                    url: serverurl,
                    crossDomain: true,
                    dataType: 'json',
                    data: JSON.stringify({ "sc": stringDataStr })
                })
                .done(function(msg) {

                    console.log("Data Saved: " + msg);
                });
        });
    }
    //get the text

    if (getCode[0]) {
        getCode.click(function() {
            $.ajax({
                    method: "GET",
                    crossDomain: true,
                    url: serverurl,
                })
                .done(function(msg) {
                    var jsonobj = $.parseJSON(msg);
                    if (codeCode[0]) {
                        codeCode.html(jsonobj[0].sc);
                    }

                    console.log("Data recieved: " + msg);
                });
        });

    }

});