import React from 'react';
import { WorksContainer, WorksH1, WorksWrapper, WorksCard, WorksIcon, WorksH2, WorksP, WorksA } from './WorksElements';
import Icon1 from '../../images/ProjectCyber.png';
import Icon2 from '../../images/Hirune.png';
import Icon3 from '../../images/Gameoverlay.png';
import Icon4 from '../../images/Glitch.png';
import Icon5 from '../../images/GuildWar.png';
import Icon6 from '../../images/IntoTheLight.png';

const Works = () => {
    return (

        <WorksContainer id='works'>
            <WorksH1>My Works</WorksH1>
            <WorksWrapper>
                <WorksCard>
                    <WorksA as='a' href='https://i.imgur.com/orh96AW.png'>
                        <WorksIcon src={Icon1}/>
                    </WorksA>
                    <WorksH2>Project Cyber</WorksH2>
                    <WorksP>Load-in screen for a script</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://i.imgur.com/eZDKvUc.png'>
                        <WorksIcon src={Icon2}/>
                    </WorksA>
                    <WorksH2>Hirune Icon</WorksH2>
                    <WorksP>Icon for Steam</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://i.imgur.com/eS1oM8t.png'>
                        <WorksIcon src={Icon3}/>
                    </WorksA>
                    <WorksH2>Overlay UI</WorksH2>
                    <WorksP>Game Start Overlay UI</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://i.imgur.com/MYTNmpo.png'>
                        <WorksIcon src={Icon4}/>
                    </WorksA>
                    <WorksH2>Glitched</WorksH2>
                    <WorksP>Tag for an online Forum</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://i.imgur.com/9e8eZia.png'>
                        <WorksIcon src={Icon5}/>
                    </WorksA>
                    <WorksH2>Guild Wars</WorksH2>
                    <WorksP>Guild Tag for N-A</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://i.imgur.com/VTJxaFS.png'>
                        <WorksIcon src={Icon6}/>
                    </WorksA>
                    <WorksH2>Pokemon into the light</WorksH2>
                    <WorksP>Tag for fun</WorksP>
                </WorksCard>
            </WorksWrapper>
        </WorksContainer>


    )
};

export default Works;
