var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      maxResults: options.max,
      part: 'snippet',
      q: options.query,
      type: 'video',
      key: options.key,
      videoEmbeddable: true,
    },
    success: (data) => {
      callback(data.items);
    },
    error: function(error) {
      console.error('searchYouTube: Failed to fetch messages', error);
    }
  });
}

export default searchYouTube;

  // console.log(options, 'searchYouTube options')

  // var readAll = function(successCB, errorCB = null) {
  //   $.ajax({
  //     url: Parse.server,
  //     type: 'GET',
  //     data: { order: '-createdAt' },
  //     contentType: 'application/json',
  //     success: successCB,
  //     error: errorCB || function(error) {
  //       console.error('chatterbox: Failed to fetch messages', error);
  //     }
  //   });
  // }
  // var create = function(options, successCB, errorCB = null) {
  //   // todo: save a message to the server
  //   $.ajax({
  //     url: Parse.server,
  //     type: 'POST',
  //     data: JSON.stringify(options),
  //     contentType: 'application/json',
  //     success: successCB,
  //     error: errorCB || function(error) {
  //       console.error('chatterbox: Failed to fetch messages', error);
  //     }
  //   })
  // }