/*function Calculate(numCatagories)
{
    //totalPts, yourPts, Weight
}
    
function genFields(numCatagories)//Generate # of fields based on how many diferent grading sections they have
{

}*/


//Instead of having it on an Button, have it onBlur Event
$(document).ready(function (){
    
    $('#checkbox').click(function(){
        if (this.checked) {
            $('#tab1').animate({left: '-100%'}, 100);
            //$('#tab1').css('display','none')
        } else {
            $('#tab1').animate({left: '0%'}, -100);
        }
    });
    
    var numCata
    var yourPts = []
    var totalPts = [];
    var Weight = [];
    var Final = [];
    //Have the top be #, yourPts, totalPts, Weight
    $("#createForm").click(function(){
        numCata = $("#numCata").val();
        for(i=0;i<numCata;i++)
        {
           $("#formPlace").append("<input type='text' onclick='this.value=\"\"' value='Your Points' id='"+i+"a"+"'>"+"<input type='text' onclick='this.value=\"\"' value='Total Points' id='"+i+"b"+"'>"+"<input type='text' onclick='this.value=\"\"' value='Category Weight' id='"+i+"c"+"'>"+"<br>")
        }
        $("#formPlace").append("<input type='button' id='calcButton' value='Calculate'>");
        
        $("#calcButton").click(function() {
        for(i=0;i<numCata;i++)
        {
            yourPts.push($("#"+i+"a").val());
            totalPts.push($("#"+i+"b").val());
            Weight.push($("#"+i+"c").val());
            Final.push((yourPts[i]/totalPts[i])*Weight[i]);
        }
    });
    });
    
    
});
//# is id

