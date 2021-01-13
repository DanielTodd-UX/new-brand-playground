import React from 'react'

import { PlusIcon } from "./PlusIcon";
import { MinusIcon } from "./MinusIcon";

const Icon = props => {
    switch (props.name.toLowerCase()) {
      case "plusicon":
        return <PlusIcon {...props} />;
      case "minusicon":
        return <MinusIcon {...props} />;
       default:
        return <div />;
    }
  };
  
  export { Icon };
  