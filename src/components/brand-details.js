import React from "react";
import { connect } from "react-redux";



/**********************************************************************************************
 * @Purpose: To render the list of brands
 * @Input: The default props
 * @Output: N/A
***********************************************************************************************/
function BrandDetails(props) {  
  const { brandData } = props;
  
  if(brandData && brandData.length) {
    var itemList = brandData.map((i, j) => {
      return (
            <div key={j}>
              <p>{i.brand}</p>
            </div>
      );
    });
  }
  else var itemList = <>No brands</>

  return (<>
        <h3>Brands</h3>
        {itemList}
    </>
  );
}

/**********************************************************************************************
 * @Purpose: Converts the Redux state to React props, so that brand list can be fetched from it
 * @Input: The Redux state object
 * @Output: The React props object
***********************************************************************************************/
const mapStateToProps = state => ({
  brandData: state.reducer.brandData
});
export default connect(mapStateToProps)(BrandDetails);
