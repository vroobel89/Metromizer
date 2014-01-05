
var tabela;
var current_tempo_index;
var bpm_display;
var name_display;

//----------------------------
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
//-----------------------------------------------------------------------------------

function test() {

    createjs.Sound.play("muzyczka");
}



function set() {

    tabela = new Array();
    var count = parseInt(document.getElementById("count").value);
    name_display = document.getElementById("MainContent_tempoName");
    
    

    for (x = 0; x < count; x++) {
        var y = x.toString();
        tabela[x] = new Array();

        tabela[x][0] = document.getElementById("N" + y).value;
        tabela[x][1] = document.getElementById("B" + y).value;
        tabela[x][2] = document.getElementById("M" + y).value;
        
    }

    current_tempo_index = 0;
    





    Start();

}

function Start() {

  
    
    
    

    document.getElementById("PlayButton").disabled = true;
    document.getElementById("PauseButton").disabled = false;
    document.getElementById("StopButton").disabled = false;


    if (continued == false) {


        var tempo_name = tabela[current_tempo_index][0];
        name_display.innerHTML = tempo_name;
       // document.getElementById("MainContent_tempoName").innerHTML = tempo_name;

        var bpm = parseInt(tabela[current_tempo_index][1]);
        document.getElementById("MainContent_Label1").innerHTML = bpm.toString();

        total_minutes = parseInt(tabela[current_tempo_index][2]);



        interval = 60 / bpm;

        interval = interval.toFixed(3);

        interval = parseInt(interval * 1000);

        createjs.Sound.play("Music");

        ticker = setInterval(function () {


            createjs.Sound.play("Music");

            // if (countdown.innerHTML == "00:00")
            //    clearInterval(ticker);

        }, interval);

       



        countdown2 = document.getElementById("countdown");




        total_seconds = parseInt(total_minutes * 60);

        if (total_minutes < 10)
            countdown2.innerHTML = "0" + total_minutes.toString() + ":" + "00";
        else
            countdown2.innerHTML = total_minutes.toString() + ":" + "00";

        counter = setInterval(function () {

            total_seconds = total_seconds - 1;

            if (total_seconds == 0) {
                current_tempo_index++;
                if (current_tempo_index == tabela.length) {
                    current_tempo_index = 0;
                    countdown2.innerHTML = "00:00";
                    Stop();
                    return;
                }
                else {

                    
                    Stop();
                    Start();
                }
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
            current_tempo_index++;
            if (current_tempo_index == tabela.lenght) {
                countdown2.innerHTML = "00:00";
                Stop();
                return;
            }
            else
            {
                
                Stop();
                Start();
            }
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

  //  document.getElementById("Checkbox2").disabled = false;
  //  document.getElementById("MainContent_TextBox1").disabled = false;
   // document.getElementById("MainContent_minutesfield").disabled = false;

   // fun();

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
