import { useState } from "react";

import FlexContainer from "../atomic/FlexContainer";
import ClickableFlexContainer from "../atomic/ClickableFlexContainer";

import Svg from "../atomic/Svg";
import Button from "../atomic/Button";
import Text from "../atomic/Text";
import Boundary from "../atomic/Boundary";

import '@/components/functional/WatchButton.css';

function WatchButton({ }) {
  const [watchState, setWatchState] = useState('watch');
  const [watchToggleState, setWatchToggleState] = useState(false);

  return (
    <Button
      className="watch-button"
      btnSize="small"
      btnHasBorder
      btnHasToggle
      btnIcon={watchState === 'stop' ? 'ignore' : 'watch'}    
      btnHandleClick={() => {setWatchToggleState(!watchToggleState)}}
    >
      <Text
        text={
          watchState === 'stop' ? 'Stop ignoring'
          :
          watchState === 'watch' ? 'Watch' : 'Unwatch'
        }
      />
      <Boundary>
        <Text text='422'/>
      </Boundary>
      {watchToggleState && <FlexContainer className="watch-toggle" flexDirection="column">
        <ClickableFlexContainer justifyContent="flex-start" alignItems="start" gap='8px' onClick={() => setWatchState('watch')}>
          <Svg icon="success" color={watchState ==='watch' ? "black" : "white"} />
          <FlexContainer flexDirection="column" alignItems="start" gap="8px">
            <Text
              isBold
              text="Participating and @mentions"
            />
            <FlexContainer flexDirection="column" alignItems="start">
              <Text
                fontSize="px12"
                color="gray_400"
                text="Only receive notifications from this repository"
              />
              <Text
                fontSize="px12"
                color="gray_400"
                text="when participating or @mentioned."
              />
            </FlexContainer>
          </FlexContainer>
        </ClickableFlexContainer>
        <ClickableFlexContainer justifyContent="flex-start" alignItems="start" gap="8px" onClick={() => setWatchState('unwatch')}>
          <Svg icon="success" color={watchState ==='unwatch' ? "black" : "white"} />
          <FlexContainer flexDirection="column" alignItems="start"  gap="8px">
            <Text
              isBold
              text="All activity"
            />
            <Text
              fontSize="px12"
              color="gray_400"
              text="Notified of all notifications on this repository."
            />
          </FlexContainer>
        </ClickableFlexContainer>
        <ClickableFlexContainer justifyContent="flex-start" alignItems="start" gap='8px' onClick={() => setWatchState('stop')}>
          <Svg icon="success" color={watchState ==='stop' ? "black" : "white"} />
          <FlexContainer flexDirection='column' alignItems="start" gap="8px">
            <Text
              isBold
              text="Ignore"
            />
            <Text
              fontSize="px12"
              color="gray_400"
              text="Never be notified."
            />
          </FlexContainer>
        </ClickableFlexContainer>
      </FlexContainer>}
    </Button>
  );
};

export default WatchButton;