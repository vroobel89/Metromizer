
function fun() {

    if (document.getElementById("Checkbox2").checked == true) {
        document.getElementById("MainContent_minutesfield").disabled = false;

    }
    else {
        document.getElementById("MainContent_minutesfield").disabled = true;
        document.getElementById("MainContent_minutesfield").value = "";
    }
}

function checkTempos() {

    alert('dupa');
    return false;
}

function check() {

    
    total_minutes = parseInt(document.getElementById("MainContent_minutesfield").value);
    var bpm = document.getElementById("MainContent_TextBox1").value;

    if (bpm != parseInt(bpm)) {
        alert("wrong input format in 'Beats Per Minutes' field ! ");
        return false;
    }

    if (bpm < 40 || bpm > 260) {
        alert("beats per minute sholud be between 40 and 260 !");
        return false;
    }

    if (document.getElementById("Checkbox2").checked == true) {  //no timer counting, just metronome ticks

        if (total_minutes > 100) {
            alert("too large value in 'minutes' field !");
            return false;
        }

        if (total_minutes != parseInt(total_minutes)) {
            alert("wrong input format in 'minutes' field !");
            return false;
        }
    }

    if (document.getElementById("Checkbox2").checked == false) {
        alert("you have to choose duration! ");
        return false;
    }

    return true;
}

var interval;
var ticker;
var counter;
var countdown2;
var continued = false;
var counting = false;
var start_breaking = false;
var paused = false;
var counting_enabled;
var total_minutes;
var total_seconds;





function handleLoad(event) {
    
}


function StartTicks() {


  /*  var bpm = document.getElementById("ContentPlaceHolder1_TextBox1").value;

    var interval = 60 / bpm;

    interval = interval.toFixed(3);

    interval = interval * 1000; */

    ticker = setInterval(function () {


        createjs.Sound.play("Music");

        

    }, 200); 


    alert(interval);

}  

function Start() {

    total_minutes = parseInt(document.getElementById("MainContent_minutesfield").value);
    var bpm = document.getElementById("MainContent_TextBox1").value;
   
    if ( bpm != parseInt(bpm)) {
        alert("wrong input format in 'Beats Per Minutes' field ! ");
        return;
    }

    if (bpm < 40 || bpm > 260) {
        alert("beats per minute sholud be between 40 and 260 !");
        return;
    }

    if (document.getElementById("Checkbox2").checked == true) {  //no timer counting, just metronome ticks
       
        if (total_minutes > 100) {
            alert("too large value in 'minutes' field !");
            return;
        }

        if (total_minutes != parseInt(total_minutes)) {
            alert("wrong input format in 'minutes' field !");
            return;
        }
    }
   
    document.getElementById("Checkbox2").disabled = true;
    document.getElementById("MainContent_TextBox1").disabled = true;
    document.getElementById("MainContent_minutesfield").disabled = true;

    document.getElementById("PlayButton").disabled = true;
    document.getElementById("PauseButton").disabled = false;
    document.getElementById("StopButton").disabled = false;


    if (continued == false) {

        countdown2 = document.getElementById("countdown");

             interval = 60 / bpm;

            interval = interval.toFixed(3);

            interval = parseInt(interval * 1000);

            createjs.Sound.play("Music");

            ticker = setInterval(function () {


                createjs.Sound.play("Music");

               // if (countdown.innerHTML == "00:00")
                    //  clearInterval(ticker);
                    
            }, interval);

            if (document.getElementById("Checkbox2").checked == false) {  //no timer counting, just metronome ticks
                    document.getElementById("PauseButton").disabled = true;
                    return;
            }

        
            
            
            


            
          total_seconds = parseInt(total_minutes * 60);
          // total_seconds = 10;

            if (total_minutes < 10)
                countdown2.innerHTML = "0" + total_minutes.toString() + ":" + "00";
            else
                countdown2.innerHTML = total_minutes.toString() + ":" + "00";
            
            counter = setInterval(function () {

                total_seconds = total_seconds - 1;

                if (total_seconds == 0) {
                    countdown2.innerHTML = "00:00";
                    Stop();
                    return;
                }

                var minutes = parseInt(total_seconds / 60);
                var seconds = parseInt(total_seconds % 60);


                if (minutes < 10)
                    var min = "0" + minutes.toString();
                else
                    var min = minutes.toString();

                if (seconds < 10)
                    var sec = "0" + seconds.toString();
                else
                    var sec = seconds.toString();


                // format countdown string + set tag value
                countdown2.innerHTML = min + ":" +
                  sec;

            }, 1000);

            continued = true;
            return;

    }

    document.getElementById("PlayButton").disabled = true;
    document.getElementById("PauseButton").disabled = false;
    document.getElementById("StopButton").disabled = false;

    createjs.Sound.play("Music");

    ticker = setInterval(function () {


        createjs.Sound.play("Music");

        // if (countdown.innerHTML == "00:00")
        //    clearInterval(ticker);

    }, interval);

    counter = setInterval(function () {

        total_seconds = total_seconds - 1;

        if (total_seconds == 0) {
            countdown2.innerHTML = "00:00";
            Stop();
            return;
        }

        var minutes = parseInt(total_seconds / 60);
        var seconds = parseInt(total_seconds % 60);


        if (minutes < 10)
            var min = "0" + minutes.toString();
        else
            var min = minutes.toString();

        if (seconds < 10)
            var sec = "0" + seconds.toString();
        else
            var sec = seconds.toString();


        // format countdown string + set tag value
        countdown2.innerHTML = min + ":" +
          sec;

    }, 1000);

}

function Stop() {

    continued = false;
    countdown.innerHTML = "00:00";
    clearInterval(ticker);
    clearInterval(counter);

    document.getElementById("Checkbox2").disabled = false;
    document.getElementById("MainContent_TextBox1").disabled = false;
    document.getElementById("MainContent_minutesfield").disabled = false;

    fun();

    document.getElementById("PlayButton").disabled = false;
    document.getElementById("PauseButton").disabled = true;
    document.getElementById("StopButton").disabled = true;



}

function Pause() {



    document.getElementById("PlayButton").disabled = false;
    document.getElementById("PauseButton").disabled = true;
    document.getElementById("StopButton").disabled = false;
    clearInterval(ticker);
    clearInterval(counter);

}



























    /*   if (counting == true)
         return;
    
     if (continued == false) {
    
         if (isNaN(document.getElementById("ContentPlaceHolder1_minutesfield").value)) {
             alert("wrong input format!");
             return;
         }
    
         total_minutes = parseInt(document.getElementById("ContentPlaceHolder1_minutesfield").value);
        total_seconds = 60 * total_minutes;
    
        continued = true;
        counting = true;
    
     }
    
     
     var countdown = document.getElementById("countdown");
    
     
    counter =  setInterval(function () {
    
         total_seconds = total_seconds - 1;
    
         if (total_seconds == 0) {
             countdown.innerHTML = "00:00";
             clearInterval(counter);
             return;
         }
    
         var minutes = parseInt(total_seconds / 60);
         var seconds = parseInt(total_seconds % 60);
    
    
         if (minutes < 10)
             var min = "0" + minutes.toString();
         else
             var min = minutes.toString();
    
         if (seconds < 10)
             var sec = "0" + seconds.toString();
         else
             var sec = seconds.toString();
    
    
         // format countdown string + set tag value
         countdown.innerHTML = min + ":" +
           sec;
    
    }, 1000);
    
    
    var bpm = document.getElementById("ContentPlaceHolder1_TextBox1").value;
    
    var interval = 60 / bpm;
    
    interval = interval.toFixed(3);
    
    interval = parseInt(interval * 1000); */



    /*  ticker = setInterval(function () {
    
    
          createjs.Sound.play("Music");
    
          if (countdown.innerHTML == "00:00")
              clearInterval(ticker);
    
      }, 998); 


function Start() {

    document.getElementById("Checkbox2").disabled = true;
    

    if (document.getElementById("Checkbox2").checked == false)
        counting_enabled = false;
    else
        counting_enabled = true;

   if (start_breaking == true) {
       document.getElementById("Checkbox2").disabled = false;
       start_breaking = false;
        return;
    }
     
 /*  if (counting_enabled == false) {

       document.getElementById("PlayButton").disabled = true;
       document.getElementById("PauseButton").disabled = true;
       document.getElementById("StopButton").disabled = false;


       createjs.Sound.play("Music");
       setTimeout(Start, 300);
       return;
   } */

 /*  document.getElementById("PlayButton").disabled = true;
   document.getElementById("PauseButton").disabled = false;
   document.getElementById("StopButton").disabled = false;

    

    if (paused == true) {
        paused = false;
    }
    
if (continued == false) {

    var countdown2 = document.getElementById("countdown");
    if (isNaN(document.getElementById("ContentPlaceHolder1_minutesfield").value)) {
            alert("wrong input format!");
            return;
        }

        
         total_minutes = parseInt(document.getElementById("ContentPlaceHolder1_minutesfield").value);
         total_seconds = parseInt(total_minutes*60);

        if (total_minutes < 10)
            countdown2.innerHTML = "0" + total_minutes.toString() + ":" + "00";
        else
            countdown2.innerHTML =   total_minutes.toString() + ":" + "00";

        continued = true;
       // counting = true;
}

if (counting != true) {

        counting = true;
        var countdown = document.getElementById("countdown");


        counter = setInterval(function () {

            total_seconds = total_seconds - 1;

            if (total_seconds == 0) {
                countdown.innerHTML = "00:00";
                clearInterval(counter);
                return;
            }

            var minutes = parseInt(total_seconds / 60);
            var seconds = parseInt(total_seconds % 60);


            if (minutes < 10)
                var min = "0" + minutes.toString();
            else
                var min = minutes.toString();

            if (seconds < 10)
                var sec = "0" + seconds.toString();
            else
                var sec = seconds.toString();


            // format countdown string + set tag value
            countdown.innerHTML = min + ":" +
              sec;

        }, 1000);
    }

    var countdown = document.getElementById("countdown");
    if (countdown.innerHTML == "00:00") {

        continued = false;
        counting = false;
        start_breaking = false;
        document.getElementById("PlayButton").disabled = false;
        document.getElementById("PauseButton").disabled = true;
        document.getElementById("StopButton").disabled = true;
        return;
    }
    
        createjs.Sound.play("Music");

        var bpm = document.getElementById("ContentPlaceHolder1_TextBox1").value;

        var interval = 60 / bpm;

        interval = interval.toFixed(3);

        interval = parseInt(interval * 1000);
        setTimeout(Start, interval);
   
}

function Pause() {

    clearInterval(counter);
    counting = false;
    start_breaking = true;
    paused = true;
    document.getElementById("PlayButton").disabled = false;
    document.getElementById("PauseButton").disabled = true;
    document.getElementById("StopButton").disabled = false;
}

function Stop() {


    document.getElementById("Checkbox2").disabled = false;
    clearInterval(counter);
    continued = false;
    counting = false;
    start_breaking = true;

    if (paused == true) {

        Start();
        paused = false;
    }
    document.getElementById("PlayButton").disabled = false;
    document.getElementById("PauseButton").disabled = true;
    document.getElementById("StopButton").disabled = true;

    var countdown = document.getElementById("countdown");
    countdown.innerHTML = "00:00";
    
}

*/

