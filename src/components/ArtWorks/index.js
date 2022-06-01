import React from 'react';
import { ArtWorksContainer, ArtWorksH1, ArtWorksWrapper, ArtWorksCard, ArtWorksIcon, ArtWorksH2, ArtWorksP, ArtWorksA } from './ArtWorksElements';
import Icon1 from '../../images/ProjectCyber.png';
import Icon2 from '../../images/Hirune.png';
import Icon3 from '../../images/Gameoverlay.png';
import Icon4 from '../../images/Glitch.png';
import Icon5 from '../../images/GuildWar.png';
import Icon6 from '../../images/IntoTheLight.png';

const ArtWorks = () => {
    return (

        <ArtWorksContainer id='artworks'>
            <ArtWorksH1>Art Works</ArtWorksH1>
            <ArtWorksWrapper>
                <ArtWorksCard>
                    <ArtWorksA as='a' href='https://i.imgur.com/orh96AW.png'>
                        <ArtWorksIcon src={Icon1}/>
                    </ArtWorksA>
                    <ArtWorksH2>Project Cyber</ArtWorksH2>
                    <ArtWorksP>Load-in screen for a script</ArtWorksP>
                </ArtWorksCard>
                <ArtWorksCard>
                    <ArtWorksA as='a' href='https://i.imgur.com/eZDKvUc.png'>
                        <ArtWorksIcon src={Icon2}/>
                    </ArtWorksA>
                    <ArtWorksH2>Hirune Icon</ArtWorksH2>
                    <ArtWorksP>Icon for Steam</ArtWorksP>
                </ArtWorksCard>
                <ArtWorksCard>
                    <ArtWorksA as='a' href='https://i.imgur.com/eS1oM8t.png'>
                        <ArtWorksIcon src={Icon3}/>
                    </ArtWorksA>
                    <ArtWorksH2>Overlay UI</ArtWorksH2>
                    <ArtWorksP>Game Start Overlay UI</ArtWorksP>
                </ArtWorksCard>
                <ArtWorksCard>
                    <ArtWorksA as='a' href='https://i.imgur.com/MYTNmpo.png'>
                        <ArtWorksIcon src={Icon4}/>
                    </ArtWorksA>
                    <ArtWorksH2>Glitched</ArtWorksH2>
                    <ArtWorksP>Tag for an online Forum</ArtWorksP>
                </ArtWorksCard>
                <ArtWorksCard>
                    <ArtWorksA as='a' href='https://i.imgur.com/9e8eZia.png'>
                        <ArtWorksIcon src={Icon5}/>
                    </ArtWorksA>
                    <ArtWorksH2>Guild Wars</ArtWorksH2>
                    <ArtWorksP>Guild Tag for N-A</ArtWorksP>
                </ArtWorksCard>
                <ArtWorksCard>
                    <ArtWorksA as='a' href='https://i.imgur.com/VTJxaFS.png'>
                        <ArtWorksIcon src={Icon6}/>
                    </ArtWorksA>
                    <ArtWorksH2>Pokemon into the light</ArtWorksH2>
                    <ArtWorksP>Tag for fun</ArtWorksP>
                </ArtWorksCard>
            </ArtWorksWrapper>
        </ArtWorksContainer>


    )
};

export default ArtWorks;
