import React from 'react';

const Footer = (props) => {
  const { currentWallpaper } = props;
  return (
    <div className='footer'>
      <div className='copyright'>Eric Sohn &copy; 2019</div>
      <div className='credit'> Photos provided by <a id='website' href='https://www.pexels.com/'>Pexels</a></div>
      <div className='credit'> Wallpaper by {currentWallpaper.photographer}</div>
    </div>
  )
}
export default Footer;
