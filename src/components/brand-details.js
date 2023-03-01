import React from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";

/**********************************************************************************************
 * @Purpose: To render the list of brands
 * @Input: The default props
 * @Output: N/A
 ***********************************************************************************************/
function BrandDetails(props) {
  const { brandData, loading } = props;

  if (brandData && brandData.length) {
    var itemList = brandData.map((i, j) => {
      return (
        <li className="cc-brand__list__item" key={j}>
          {i.brand}
        </li>
      );
    });
  } else var itemList = <>No brands</>;
  if (loading) {
    return (
      <>
        <div className="cc-brand">
          <h3>
            <Skeleton width={200} />
          </h3>
          <Skeleton width={100} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="cc-brand">
          <h3>Brands</h3>
          {itemList ? <ul className="cc-brand__list">{itemList}</ul> : null}
        </div>
      </>
    );
  }
}

/**********************************************************************************************
 * @Purpose: Converts the Redux state to React props, so that brand list can be fetched from it
 * @Input: The Redux state object
 * @Output: The React props object
 ***********************************************************************************************/
const mapStateToProps = (state) => ({
  brandData: state.reducer.brandData,
});
export default connect(mapStateToProps)(BrandDetails);
