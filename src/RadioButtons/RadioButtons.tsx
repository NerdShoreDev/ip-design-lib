import * as React from 'react';

import { RadioButton } from '../definitions';

import './RadioButtons.css';

export interface RadioButtonsProps {
  buttons: RadioButton[];
  onClick: (key: number, button: RadioButton) => void;
  selected: number;
  disabled?: boolean;
}

export interface RadioButtonsState {
  selectedButton: number;
}

export class RadioButtons extends React.Component<RadioButtonsProps, RadioButtonsState> {
  public constructor(props: RadioButtonsProps) {
    super(props);
    this.state = {
      selectedButton: props.selected,
    };
  }

  public componentDidUpdate(prevProps: RadioButtonsProps) {
    const { selected: prevSelected } = prevProps;
    const { selected } = this.props;

    if (selected !== prevSelected) {
      this.setState({ selectedButton: selected });
    }
  }

  public onClick = (key: number, button: RadioButton) => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState({
      selectedButton: key,
    });
    this.props.onClick(key, button);
  }

  public onChange = () => null;

  // @TODO add ripple to buttons
  public render() {
    const { buttons, disabled } = this.props;
    const { selectedButton } = this.state;
    return (
      <div className="radio-buttons">
        {
          buttons.map((button: RadioButton, key: number) => (
            <label
              key={key}
              onClick={() => this.onClick(key, button)}
              className={`${disabled ? 'radio-button-disabled' : ''}`}
            >
              <input
                tabIndex={key + 1}
                type="radio"
                checked={selectedButton === key}
                onChange={this.onChange}
                className={`${disabled ? 'radio-buttons_input--disabled' : ''}`}
              />
              <span className="radio-buttons_label">{button.label}</span>
            </label>
            )
          )
        }
      </div>
    );
  }
}
