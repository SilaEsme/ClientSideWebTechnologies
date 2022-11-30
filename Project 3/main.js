// boxların toplamı soru sayısına denk gelecek validate func
// boxlar sayı olacak validate func
function validateQuestionNumber(){
    $(document).ready(function(){
        $("input[type='text'][name='true'],input[type='text'][name='false']").on("input", function () {
            const innerQn = $(this).parent().parent().children().first().children().last().html();
            let qn = (innerQn[0]+innerQn[1]).split(" ")[0]

            const arr = $($(this).parent().parent().children().children(':input[name = "true"], :input[name = "false"]'))
            
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
         });
    });
}
validateQuestionNumber();