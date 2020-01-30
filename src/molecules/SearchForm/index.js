import React from "react";

import Button from "../../atoms/Button";
import TxtInput from "../../atoms/TxtInput";

function SearchForm(props) {
  return (
    <div>
      <TxtInput
        value={props.inputValue}
        changeValueHandler={props.changeValueHandler}
      />
      <Button
        clickHandler={props.clickHandler}
      >
        {props.buttonText}
      </Button>
    </div>
  );
}

export default SearchForm;