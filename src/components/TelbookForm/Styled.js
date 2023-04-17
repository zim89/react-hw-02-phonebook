import styled from 'styled-components';

const Form = styled.form`
  margin-top: 20px;
  border: 1px solid #455a64;
  border-radius: 8px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #616161;
`;

const Input = styled.input`
  padding: 8px 15px;
  border: 1px solid #263238;
  border-radius: 4px;
  display: block;
`;

const Button = styled.button`
  border: 1px solid #2979ff;
  background-color: #2979ff;
  color: white;
  border-radius: 4px;
  padding-top: 10px;
  margin-top: 20px;
  padding-bottom: 10px;
  transition: all 250ms linear;

  :hover {
    background-color: #388e3c;
  }
`;

export { Label, Form, Input, Button };
