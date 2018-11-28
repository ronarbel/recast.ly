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
      videoEmbeddable: true
    },
    success: data => {
      callback(data.items);
    },
    error: function(error) {
      console.error('searchYouTube: Failed to fetch messages', error);
    }
  });
};

export default searchYouTube;
