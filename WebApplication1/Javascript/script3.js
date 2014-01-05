function handleLoad(event) {

}







function init() {

  //  document.getElementById("PlayButton").disabled = false;
  //  document.getElementById("StopButton").disabled = true;
  //  document.getElementById("PauseButton").disabled = true;






    // if initializeDefaultPlugins returns false, we cannot play sound in this browser
    if (!createjs.Sound.initializeDefaultPlugins()) { alert("dupa z tego"); return; }
    var audioPath = "samples/";
    var manifest = [
    {
        id: "Music",
        src: audioPath + "loud.wav"
    }];

    createjs.Sound.addEventListener("loadComplete", handleLoad);
    createjs.Sound.registerManifest(manifest);


}

function init2() {

    //  document.getElementById("PlayButton").disabled = false;
    //  document.getElementById("StopButton").disabled = true;
    //  document.getElementById("PauseButton").disabled = true;






    // if initializeDefaultPlugins returns false, we cannot play sound in this browser
    if (!createjs.Sound.initializeDefaultPlugins()) { alert("dupa z tego"); return; }
    var audioPath = "samples/";
    var manifest = [
    {
        id: "muzyczka",
        src: audioPath + "loud.wav"
    }];

    createjs.Sound.addEventListener("loadComplete", handleLoad);
    createjs.Sound.registerManifest(manifest);


}