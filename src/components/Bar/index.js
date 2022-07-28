import styled from 'styled-components';

const Bar = styled.div`
  height: 8px;
  width: 120px;
  border-radius: 16px;
  background: ${({ status }) => {
    if (status === 'pending') {
      return '#C8C8C8';
    } else if (status === 'in-progress') {
      return '#6542F1';
    } else if (status === 'done') {
      return '#BAA9FF';
    }
  }};
`;

export default Bar;
