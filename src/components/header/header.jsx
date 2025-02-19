import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';



const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;





const Header = () => {
  return (
    <div>
      <header className='flex items-center gap-[20px] justify-around sm:flex-col'>
        <img src="../../../src/assets/logo.png" alt="" />
        <div className="flex gap-[40px] cursor-pointer">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="bg-gray-100 w-[fit-content] rounded-[10px]">
            <input type="text" placeholder="What are you looking for?" className="w-[200px] h-[40px] bg-gray-100 p-[5px]" />
            <SearchIcon />
          </div>
          <div className='flex gap-[10px]'>
            <FavoriteBorderIcon />
            <IconButton>
              <ShoppingCartIcon fontSize="small" />
              <CartBadge badgeContent={0} color="primary" overlap="circular" />
            </IconButton>
            <AccountCircleIcon />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
