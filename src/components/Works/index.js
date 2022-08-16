import React from 'react';
import { WorksContainer, WorksH1, WorksWrapper, WorksCard, WorksIcon, WorksH2, WorksP, WorksA } from './WorksElements';
import Icon1 from '../../images/OldPortfolio.png';
import Icon2 from '../../images/Entertainment.png';
import Icon3 from '../../images/Pokemon.png';
import Icon4 from '../../images/Weather.png';
import Icon5 from '../../images/Budget.png';
import Icon6 from '../../images/WeirdNJobs.png';

const Works = () => {
    return (

        <WorksContainer id='works'>
            <WorksH1>My Works</WorksH1>
            <WorksWrapper>
                <WorksCard>
                    <WorksA as='a' href='https://nexfp.github.io/Professional-Portfolio/works.html'>
                        <WorksIcon src={Icon1}/>
                    </WorksA>
                    <WorksH2>Old Portfolio</WorksH2>
                    <WorksP as='a' href='https://github.com/NeXFP/Professional-Portfolio'>Repository</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://entertainmentreview.herokuapp.com/login'>
                        <WorksIcon src={Icon2}/>
                    </WorksA>
                    <WorksH2>Entertainment Review</WorksH2>
                    <WorksP as='a' href='https://github.com/NeXFP/EntertainmentReviewListProject '> Repository</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://nexfp.github.io/Pokemon-Battle-Simulator/'>
                        <WorksIcon src={Icon3}/>
                    </WorksA>
                    <WorksH2>Pokemon Battle Simulator</WorksH2>
                    <WorksP as='a' href='https://github.com/NeXFP/Pokemon-Battle-Simulator'>Repository</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://nexfp.github.io/Weather-Dashboard/'>
                        <WorksIcon src={Icon4}/>
                    </WorksA>
                    <WorksH2>Weather Dashboard</WorksH2>
                    <WorksP as='a' href='https://github.com/NeXFP/Weather-Dashboard'>Repository</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://pwa-budgets.herokuapp.com/'>
                        <WorksIcon src={Icon5}/>
                    </WorksA>
                    <WorksH2>Budget Tracker</WorksH2>
                    <WorksP as='a' href='https://github.com/NeXFP/PWA-Budget-Tracker'>Repository</WorksP>
                </WorksCard>
                <WorksCard>
                    <WorksA as='a' href='https://three-headed-goats-weirdnjobs.herokuapp.com/'>
                        <WorksIcon src={Icon6}/>
                    </WorksA>
                    <WorksH2>Weird NJobs</WorksH2>
                    <WorksP as='a' href='https://github.com/ManoLo2ManoLo/WeirdNJobs'>Repository</WorksP>
                </WorksCard>
            </WorksWrapper>
        </WorksContainer>


    )
};

export default Works;
