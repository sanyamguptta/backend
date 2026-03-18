import '../nav.scss';
import { useNavigate } from 'react-router'; // for navigating to different pages

const Nav = () => {

    const navigate = useNavigate(); // using useNavigate() hook to get navigate function

  return (
    <nav className="nav-bar">
        <p>Insta</p>
        <button 
        onClick={ () => {
            navigate('create-post');
        }}
        className="button primary-button">new post</button>
    </nav>
  )
}

export default Nav