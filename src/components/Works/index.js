import React from 'react';
import { WorksContainer, WorksH1, WorksWrapper, WorksCard, WorksIcon, WorksH2, WorksP, WorksA } from './WorksElements';
import Icon1 from '../../images/ProjectCyber.png';
import Icon2 from '../../images/Hirune.png';
import Icon3 from '../../images/Gameoverlay.png';

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
            </WorksWrapper>
        </WorksContainer>


    )
};

export default Works;
