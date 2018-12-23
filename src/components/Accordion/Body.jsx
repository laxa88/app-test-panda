import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledBody = styled.div`
  color: ${props => props.theme.textColor1};
  max-height: ${props => props.bodyHeight}px;
  overflow: hidden;
  transition: max-height 0.15s ease-out;
`;

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.body = React.createRef();
  }

  /* istanbul ignore next */
  componentWillMount() {
    window.addEventListener('resize', this.updateHeight);
  }

  /* istanbul ignore next */
  componentDidMount() {
    // This is for when "isOpen" is open by default.
    // React "ref" is only obtained AFTER the component is mounted,
    // so we need to re-render to get the correct bodyHeight.

    setTimeout(() => {
      this.forceUpdate();
    }, 100);
  }

  /* istanbul ignore next */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  updateHeight = () => {
    this.forceUpdate();
  };

  render() {
    const { theme } = this.context;
    const { isOpen, ...others } = this.props;

    // "scrollHeight" is used to get the content height even if container height is zero.
    const bodyHeight = (this.body.current && isOpen) ? this.body.current.scrollHeight : 0;

    return (
      <StyledBody ref={this.body} theme={theme} bodyHeight={bodyHeight} {...others} />
    );
  }
}

Accordion.contextType = ThemeContext;

Accordion.defaultProps = {
  isOpen: false,
};

Accordion.propTypes = {
  isOpen: PropType.bool,
};

export default Accordion;
