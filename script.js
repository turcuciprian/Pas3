

jQuery(document).ready(function() {
    function writeUserData(xVal) {
        database.ref('pas3/').set({
            SecretCode: xVal,
        });
    }
    function readUserData(){

    }





    var sendCode = $("#sendCode");
    var getCode = $("#getCode");
    var codeCode = $('#codecode');
    var stringData = $("#stringData");
    var stringDataStr = '';

    //send the text
    if (sendCode[0]) {
        sendCode.click(function() {
            if (stringData[0]) {
                stringDataStr = stringData.val();
            }
            console.log('sending data: ' + stringDataStr);
            writeUserData(stringDataStr);

        });
    }
    //get the text

    if (getCode[0]) {
        getCode.click(function() {
            writeUserData(stringDataStr);

        });

    }

});
