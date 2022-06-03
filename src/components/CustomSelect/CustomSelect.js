import React, {Component} from 'react';
import { FixedSizeList as List } from "react-window";

class CustomSelect extends Component {
  render() {
    const { options, children, maxHeight, getValue } = this.props;
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * 45;

    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={45}
        initialScrollOffset={initialOffset}
      >
        11ы
        {({ index, style }) => (
          <div style={style} className="form-select">
            {children[index]}
          </div>
        )}
      </List>
    );
  }
}


export default CustomSelect;