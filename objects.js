var playlist = { LedZepplin : "Kashmir"}
function updatePlaylist(playlist, band, song){
  playlist[band] = song
  return playlist
};

function removeFromPlaylist(playlist, artist){
  delete playlist[band]
  return playlist
};
