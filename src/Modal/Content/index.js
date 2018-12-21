import { h } from "preact";
import Videos from "./video";
import LoadMore from "./loadMore";
import FlipbaseLoader from "../../Components/flipbaseLoader";
import ShowFiltersToRemove from "./showFiltersToRemove";

const Content = (props, { getState }) => {
  const state = getState();
  const component = state.isLoading ? <FlipbaseLoader /> : <LoadMore />

  return (
    <div className="contentWrapper">
      <ShowFiltersToRemove />
      <Videos />
      { component }
    </div>
  );
}

export default Content;
