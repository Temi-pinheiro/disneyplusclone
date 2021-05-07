import styled from 'styled-components';
import { useEffect } from 'react';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../features/user/userSlice';

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push('/home');
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push('/');
        })
        .catch((e) => {
          alert(e.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='logo' />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href='/home'>
              <img src='/images/home-icon.svg' alt='Home' />
              <span>HOME</span>
            </a>
            <a href='/search'>
              <img src='/images/search-icon.svg' alt='Search' />
              <span>search</span>
            </a>
            <a href='/watchlist'>
              <img src='/images/watchlist-icon.svg' alt='Watchlist' />
              <span>watchlist</span>
            </a>
            <a href='/originals'>
              <img src='/images/original-icon.svg' alt='Originals' />
              <span>originals</span>
            </a>
            <a href='/movies'>
              <img src='/images/movie-icon.svg' alt='Movies' />
              <span>movies</span>
            </a>
            <a href='/series'>
              <img src='/images/series-icon.svg' alt='Series' />
              <span>series</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <Dropdown>
              <span onClick={handleAuth}>Sign Out</span>
            </Dropdown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-width: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  padding: 0px;
  margin: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  letter-spacing: 5px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 16px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;
      padding: 0 2px;
      text-transform: uppercase;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: '';
        opacity: 0;
        height: 2px;
        position: absolute;
        left: 0px;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: transparent;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 18px;
  border: 1px solid rgb(249, 249, 249);
  padding: 8px 16px;
  max-height: 80px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: rgb(249, 249, 249);
    color: #090b13;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  height: 100%;
  max-height: 40px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.36);
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 3px;
  /* width: 100px; */
  opacity: 0;
  visibility: 0;
`;

const SignOut = styled.div`
  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 0.2s;
      cursor: pointer;
      visibility: 1;

      &:hover {
        background-color: rgb(249, 249, 249);
        color: #090b13;
        border-color: transparent;
      }
    }
  }
`;

export default Header;
