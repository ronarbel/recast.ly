// import VideoList from '../../src/components/VideoList.js';
// import VideoListEntry from '../../src/components/VideoListEntry.js';
// import exampleVideoData from '../../src/data/exampleVideoData.js';

import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inPlayer: exampleVideoData[0],
      videoList: exampleVideoData
    }
  }
  
  render() {
    {console.log(this.state)}
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em>Hello World view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.inPlayer}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.videoList}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em>Hello World view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em><VideoPlayer video={exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList HEIIII</em><VideoList videos={exampleVideoData}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

