import { Wrapper } from './style.js';
import { Dropdown } from 'antd';
import useDropDownApi from '../../Generic/DropDownAPI';
import UserModal from './UserModal';

const Navbar = () => {
  
  const { navbarDropDown } = useDropDownApi();
  const storedUserData = JSON.parse(localStorage.getItem("userData"));  
  
  return (
    <Wrapper>
      <UserModal />
      <Wrapper.Left>
        <Wrapper.Title>NIHOL</Wrapper.Title>
      </Wrapper.Left>
      <Wrapper.Right>
        <Dropdown
          trigger={['click']}
          menu={{items: navbarDropDown()}}
        >
          <Wrapper.Avatar>{storedUserData?.name[0].toUpperCase()}</Wrapper.Avatar>
        </Dropdown>
      </Wrapper.Right>
    </Wrapper>
  )
}

export default Navbar
