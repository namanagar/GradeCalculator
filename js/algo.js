/*function Calculate(numCatagories)
{
    //totalPts, yourPts, Weight
}
    
function genFields(numCatagories)//Generate # of fields based on how many diferent grading sections they have
{

}*/


//Instead of having it on an Button, have it onBlur Event
$(document).ready(function (){
    var numCata = 0;
    var yourPts = []
    var totalPts = [];
    var Weight = [];
    var Final = [];
    
    $('#checkbox').click(function(){
        if (this.checked) {
            $('#tab1').animate({left: '-100%'}, 400);
            //$('#tab1').css('display','none')
        } else {
            $('#tab1').animate({left: '0%'}, -100);
        }
    });
    //Have the top be #, yourPts, totalPts, Weight
    $("#calcButton").click(function() {
        for(i=0;i<numCata;i++)
        {
            yourPts.push($("#"+i+"a").val());
            totalPts.push($("#"+i+"b").val());
            Weight.push($("#"+i+"c").val());
            Final.push((yourPts[i]/totalPts[i])*Weight[i]);
        }
    });
    
    $("#addButton").click(function() {
        numCata = numCata + 1
       $("#formPlace").append("<input class='rounded' type='text' placeholder='Your Points' id='"+numCata+"a"+"'>"+" <input class='rounded' type='text' placeholder='Total Points' id='"+numCata+"b"+"'>"+" <input class='rounded' type='text' placeholder='Category Weight' id='"+numCata+"c"+"'>"+"<br id='"+numCata+"d'>")  
    })
    
    $("#subtractButton").click(function() {
        if(numCata != 0)
        {
             $("#"+numCata+"a").remove();
             $("#"+numCata+"b").remove();
             $("#"+numCata+"c").remove();
             $("#"+numCata+"d").remove();
            numCata = numCata - 1;
        }
    });
    
});
//# is id

