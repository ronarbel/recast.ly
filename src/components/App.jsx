import VideoList from '../../src/components/VideoList.js';
import VideoListEntry from '../../src/components/VideoListEntry.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em>Hello World view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> 123 view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em><VideoList videos={['video1','video2','video3']}/></h5></div>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

