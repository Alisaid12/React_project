import React , {useState, useEffect} from 'react'; 
import {
    ProfileSkills, ProfileSection, ProfileList, ProfileItem,
    ItemSpan, WebSpan, Skills, SkillsDesc, Bar,
    Title, Perc, Parent, ParentSpan, ProfileTitle, SkillsTitle 
} from './style.js';
import axios from 'axios';
const Profile = () => {

    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        
        axios.get('js/data.json').then(res => { setSkills(res.data.profile) })
    }, []);

    const SkillsProfile = skills.map((skillsItem) => {
        return (
                <Bar key={skillsItem.id}>
                <Title>{ skillsItem.title}</Title>
                <Perc>{ skillsItem.perc}</Perc>
                    <Parent>
                        <ParentSpan spn={skillsItem.id}></ParentSpan>
                    </Parent>
                </Bar>
        )
    })

    
    return (
        <ProfileSkills>
            <div class="container">
            <ProfileSection>
                <ProfileTitle><skSpan>My </skSpan>Profile</ProfileTitle>
                <ProfileList>
                    <ProfileItem>
                        <ItemSpan>Name</ItemSpan>
                        Hamza Nabil
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Birthday</ItemSpan>
                        21/1/1996
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Address</ItemSpan>
                        Ain shams
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Phone</ItemSpan>
                        4444 5555 6666
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Email</ItemSpan>
                        hamza@hamza.com
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Website</ItemSpan>
                        <WebSpan>www.google.com</WebSpan>
                    </ProfileItem>
                </ProfileList>
            </ProfileSection>
            
            <Skills>
                <SkillsTitle>Some <skSpan>skills</skSpan></SkillsTitle>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
            
              {SkillsProfile}
            </Skills>
            
        </div>
    </ProfileSkills>
    
    )
}

export default Profile;