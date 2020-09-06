import React from 'react';
import Logo from '../../images/logo.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [pageMune,setPageMenu] = useState(null);
    const [secondPageMenu,setsecondPageMenu] = useState(null);
    const [postMenu,setPostMenu] = useState(null);


    useEffect(() => {
        fetch(`https://www.agora.ac/wp-json/wp-api-menus/v2/menus/3`)
        .then(res => res.json())
        .then(pageMenuData => setPageMenu(pageMenuData))
        .catch(err => console.log(err));

        fetch(`https://www.agora.ac/wp-json/wp-api-menus/v2/menus/4`)
        .then(res => res.json())
        .then(postMenuData => setsecondPageMenu(postMenuData))
        .catch(err => console.log(err));

        fetch(`https://www.agora.ac/wp-json/wp-api-menus/v2/menus/11`)
        .then(res => res.json())
        .then(postMenuData => setPostMenu(postMenuData))
        .catch(err => console.log(err));
    },[]);
    return (
       <nav id="navbar">
          
           <div className="container">
               <a href="#" className="navbar-brand">
                   <img src={Logo} alt=""/>
               </a>
               <div className="menu-container">
               <div className="page-menus">
                   <ul className="first-menu">
                       {pageMune && pageMune.items.length && pageMune.items.map(item =>
                        <li><a href={`${item.object_slug}`}>{item.title}</a></li>
                        )}
                   </ul>
                   <ul className="second-menu">
                   {secondPageMenu && secondPageMenu.items.length && secondPageMenu.items.map(item =>
                        <li><a href={`${item.object_slug}`}>{item.title}</a></li>
                        )}
                   </ul>
               </div>
               <div className="post-menu">
                   <ul className="post-category-menu">
                   {postMenu && postMenu.items.length && postMenu.items.map(item =>
                        <li ><a dangerouslySetInnerHTML={{__html:item.title}} href={`${item.object_slug}`} /></li>
                        )}
                   </ul>
               </div>
           </div>
           </div>
       </nav>
    )
}

export default Navbar
