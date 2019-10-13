$( document ).ready(function(){

    let Random=Math.floor(Math.random()*102+19)
    
    
    $("#randomnumber").text(Random);
    
    
    let  num1= Math.floor(Math.random()*12+1)
    let num2= Math.floor(Math.random()*12+1)
    let num3= Math.floor(Math.random()*12+1)
    let num4= Math.floor(Math.random()*12+1)
    
    
    let playerTotal= 0; 
    let wins= 0;
    let losses = 0;
    
  
  $("#wins").text(wins);
  $("#losses").text(losses);
  
  
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $("#randomnumber").text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $("#current").text(playerTotal);
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
  
    $(".purple").on ("click", function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $("#current").text(playerTotal); 
            
          if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $(".black").on ("click", function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $("#current").text(playerTotal); 
          if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $(".white").on ("click", function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $("#current").text(playerTotal);
  
            if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $(".blue").on ("click", function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $("#current").text(playerTotal); 
        
            if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 