import React from 'react'; 
import {NavBarSection , Logo , LogoText , UlList,  ListItem , Anchor , StyledLink} from  './style.js'

const Navbar = () => {
    return (
           <NavBarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                

                 
                <UlList>
                    <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><StyledLink  to="/contact">Contact</StyledLink ></ListItem>
                </UlList>
                
            </div>
            
        </NavBarSection>
        
    )
}

export default Navbar;