// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.on('playFirst', function(song){
    //   this.set('currentSong', song);
    // }, this);
    //playFirst()
    
    
    this.on('add', function(){
      if(this.length === 1){
      this.playFirst()
    }

    },this)
    //this.playFirst()
    // this.on('remove', function(){
      
    // })

  
    //this.on('enqueue', function(song){this.playFirst()}, this)
  },

  playFirst: function(){
    

    this.at(0).play()
  }, 



});