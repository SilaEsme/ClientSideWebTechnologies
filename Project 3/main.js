function validateQuestionNumber(){
    $(document).ready(function(){
        $("input[type='text'][name='true'],input[type='text'][name='false']").on("input", function () {
            
            // Validate if the input is number
            if($(this).val().match(/^\d+$/)) {  
                const arr = $($(this).parent().parent().children().children(':input[name = "true"], :input[name = "false"]'))
                $.each(arr, function (indexInArray, valueOfElement) { 
                    $(valueOfElement).removeClass("border-danger")
                });
                // Validate Sum of Numbers
                const innerQn = $(this).parent().parent().children().first().children().last().html();
                let qn = (innerQn[0]+innerQn[1]).split(" ")[0]

                
                let sum = 0;
                $.each(arr, function (indexInArray, valueOfElement) { 
                    sum = +sum + +$(valueOfElement).val();
                });
                if (sum > qn){
                    $(':focus').addClass("border-3 border-danger");
                
                }
                else {
                    $.each(arr, function (indexInArray, valueOfElement) { 
                        $(valueOfElement).removeClass("border-danger")
                    });
                }
            }
            else {
                $(':focus').addClass("border-3 border-danger");
            }

         });
    });
}
function validateDn(){
    $(document).ready(function(){
        var val;
        if(!$("input[name='dn']")){
            $("input[name='obp']").val("");
            $(this).removeClass("border-danger")
        }
        $("input[name='dn']").on("input", function(){
            $(this).removeClass("border-danger")
            // Validate if the input is number
            if($(this).val().match(/^\d+$/)) {
                // Validate Number > 100
                val = $(this).val();
                if(val > 100 || val < 0) {
                    $(this).addClass("border-3 border-danger");
                    $("input[name='obp']").val("");                
                }
                else{
                    $("input[name='obp']").val(val * 5);
                    $(this).removeClass("border-danger")
                }
            }
            else {
                $(this).addClass("border-3 border-danger");
            }
        });
    });
}
validateQuestionNumber();
validateDn();