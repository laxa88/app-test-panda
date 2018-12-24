import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';

import { currentTheme } from '../../theme';

export const StyledBody = styled.div`
  padding: 20px;

  & svg {
    color: ${props => props.theme.secondaryColor2};
    font-size: 110px;
    float: left;
    padding: 0 20px 20px 0;
  }

  & p {
    font-size: 14px;
  }
`;

const Body = (
  <StyledBody theme={currentTheme}>
    <FontAwesomeIcon icon={['far', 'life-ring']} />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
      faucibus lacus, ut aliquet est. Sed et elit ex. Vestibulum nisl nisi,
      aliquam id justo sit amet, varius consequat diam. Vivamus at dui ornare
      enim ultricies sollicitudin ut non orci. Integer sagittis sapien et nisl
      maximus varius. In vitae maximus nulla, a tempus eros.
    </p>

    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Phasellus ac magna vehicula enim vestibulum finibus sed
      ut sem. In hac habitasse platea dictumst. Donec porttitor nisi vitae quam
      dapibus, vel posuere purus mollis. Integer ut rhoncus odio.
    </p>

    <p>
      Donec porttitor nisi vitae quam dapibus, vel posuere purus mollis. Integer
      ut rhoncus odio. Nulla sit amet facilisis dolor, sit amet sagittis ante.
      Nam non felis in ipsum lacinia blandit.
    </p>
  </StyledBody>
);

const ContentHelp = props => <Accordion header="Help" body={Body} {...props} />;

export default ContentHelp;
