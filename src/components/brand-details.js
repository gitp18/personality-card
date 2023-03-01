import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";



/**********************************************************************************************
 * @Purpose: To render the list of brands
 * @Input: N/A
 * @Output: N/A
 ***********************************************************************************************/
function BrandDetails() {
  const brandData = useSelector((state) => state.reducer.brandData);
  let loading = true;
  if (brandData && brandData.length) {
    loading = false;
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

export default BrandDetails;
