import VideoList from "./VideoList.js";
import VideoListEntry from "./VideoListEntry.js";
import exampleVideoData from "../data/exampleVideoData.js";
import VideoPlayer from "./VideoPlayer.js";
import searchYouTube from "../lib/searchYouTube.js";
import YOUTUBE_API_KEY from "../config/youtube.js";
import Search from "./Search.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inPlayer: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  onListTitleClick(newVid) {
    this.setState({
      inPlayer: newVid
    });
  }

  onSuccessfulDataRequest(newList) {
    this.setState({
      videoList: newList
    });
  }

  handleSubmit() {
    console.log("submit was clicked");
  }

  handleChange(event) {
    var options = {
      query: event.target.value,
      max: 5,
      key: YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, this.onSuccessfulDataRequest.bind(this));
  }

  componentDidMount() {
    var options = {
      query: "hello cats",
      max: 5,
      key: YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, this.onSuccessfulDataRequest.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                <em>SEARCH:</em>
                <Search
                  handleSubmit={this.handleSubmit.bind(this)}
                  onChange={this.handleChange.bind(this)}
                />
              </h5>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <h5>
                <em>videoPlayer</em>
                <VideoPlayer video={this.state.inPlayer} />
              </h5>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h5>
                <em>videoList</em>
                <VideoList
                  videos={this.state.videoList}
                  updateStateCB={this.onListTitleClick.bind(this)}
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// <input type="text" class="searchTerm" placeholder=" Search With Your Heart"/><button type="submit" class="searchButton">submit</button>
