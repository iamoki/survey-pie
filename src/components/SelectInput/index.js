import styled from 'styled-components';

function Item({ children, checked, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (isChecked, index) => {
    if (isChecked) {
      const max = options?.max ?? 1;
      console.log(max, answer.length);
      if (answer.length >= max) {
        return;
      }
      // setAnswer(index 추가)
      setAnswer([...answer, index]);
    } else {
      // setAnswer(index 삭제)
      setAnswer(answer.filter((item) => item !== index));
    }
  };
  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => (
        <Item
          key={index}
          checked={answer.includes(index)}
          onChange={(e) => {
            handleChange(e.target.checked, index);
          }}
        >
          {item}
        </Item>
      ))}
    </SelectInputWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] ~ span {
    display: inline-block;
    height: 24px;
    width: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type='checkbox'] ~ div {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    line-height: 18px;
  }

  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
