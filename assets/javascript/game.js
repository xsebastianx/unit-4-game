$(document).ready(function(){
    let random = Math.floor(Math.random()*102+19)

    $("#number").text(random);

    let numb1 = Math.floor(Math.random()*12+1);
    let numb2 = Math.floor(Math.random()*12+1);
    let numb3 = Math.floor(Math.random()*12+1);
    let numb4 = Math.floor(Math.random()*12+1);

    let wins=0;
    let losses=0;
    let total=0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#totalScore').text(playerTotal);
        } 

        function winner(){
            wins++; 
            $('#wins').text(wins);
            reset();
            }
        function loser(){
            losses++;
            $('#losses').text(losses);
            reset()
            }
})