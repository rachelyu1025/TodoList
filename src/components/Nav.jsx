import styled from 'styled-components'

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px;
  background-color: #fff;
  margin-bottom: 20px;

  .greeting{
    margin: 0;
    font-size: 35px;
    font-weight: 700;
  }

  .amount {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    font-size: 35px;
    font-weight: 600;
    border: 2px solid #909DD9;
    border-radius: 50%;
    color: #909DD9;
  }
`
export function Nav({amount}) {
  return (
    <>
      <NavBar>
        <span className='greeting'> Have a GOOD day! </span>
        <div className='amount'> {amount} </div>
      </NavBar>
    </>
  )
}