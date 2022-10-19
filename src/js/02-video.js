 import throttle from "lodash.throttle";
 import Player from "@vimeo/player";

 const iframe = document.querySelector('iframe');
 const player = new Player(iframe);

 player.on('timeupdate', throttle(onPlay, 1000));

   function onPlay(data){
      console.log(data) 
      //{seconds:12}
      localStorage.setItem("videoplayer-current-time", data.seconds);
   };
      
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")|| 0);
   