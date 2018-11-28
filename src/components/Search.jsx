var Search = props => (
  <form onSubmit={props.handleSubmit}>
    <input type="text" className="form-control" onChange={props.onChange} />
    <input type="submit" value="Submit" />
  </form>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

{
  /* <div className="search-bar form-inline">
<input className="form-control" type="text" />
<button className="btn hidden-sm-down">
  <span className="glyphicon glyphicon-search"></span>
</button>
</div>  */
}
