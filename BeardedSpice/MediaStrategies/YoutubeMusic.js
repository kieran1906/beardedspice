//
//  YoutubeMusic.plist
//  BeardedSpice
//
//  Created by Kieran Wild on 20/06/18.
//  Copyright (c) 2013 Tyler Rhodes / Jose Falcon. All rights reserved.
//

BSStrategy = {
  version: 1,
  displayName: "YoutubeMusic",
  accepts: {
    method: "predicateOnTab",
    format: "%K LIKE[c] '*music.youtube*'",
    args: ["URL"]
  },
  isPlaying:function () {
    var e = document.getElementsByClassName('play-pause-button')[0].click();
    return e.title.contains('pause');
  },
  toggle: function () {document.getElementsByClassName('play-pause-button')[0].click()},
  next: function () {document.getElementsByClassName('next-button')[0].click()},
  previous: function () {document.getElementsByClassName('previous-button')[0].click()},
  pause: function () {
    var e = document.getElementsByClassName('play-pause-button')[0];
    if(e.title.contains('pause')){
        e.click()
    }
  }
}
