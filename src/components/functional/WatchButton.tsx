import { useState } from "react";
import Svg from "../atomic/Svg";
import Button from "../atomic/Button";
import Text from "../atomic/Text";
import Boundary from "../atomic/Boundary";
import FlexRowContainer from "../atomic/FlexRowContainer";
import FlexContainer from "../atomic/FlexContainer";
import '@/components/functional/WatchButton.css'

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
      {watchToggleState && <FlexRowContainer className="watch-toggle" gap={0}>
        <FlexContainer justifyContents="flex_start" alignItems="start" gap={4} onClick={() => setWatchState('watch')}>
          <Svg icon="success" color={watchState ==='watch' ? "black" : "white"} />
          <FlexRowContainer alignItems="start">
            <Text
              isBold
              text="Participating and @mentions"
            />
            <Text
              fontSize="px12"
              color="gray_400"
              text="Only receive notifications from this repository when
              participating or @mentioned."
            />
          </FlexRowContainer>
        </FlexContainer>
        <FlexContainer justifyContents="flex_start" alignItems="start" gap={4} onClick={() => setWatchState('unwatch')}>
          <Svg icon="success" color={watchState ==='unwatch' ? "black" : "white"} />
          <FlexRowContainer justifyContents="center" alignItems="start">
            <Text
              isBold
              text="All activity"
            />
            <Text
              fontSize="px12"
              color="gray_400"
              text="Notified of all notifications on this repository."
            />
          </FlexRowContainer>
        </FlexContainer>
        <FlexContainer justifyContents="flex_start" alignItems="start" gap={4} onClick={() => setWatchState('stop')}>
          <Svg icon="success" color={watchState ==='stop' ? "black" : "white"} />
          <FlexRowContainer justifyContents="center" alignItems="start">
            <Text
              isBold
              text="Ignore"
            />
            <Text
              fontSize="px12"
              color="gray_400"
              text="Never be notified."
            />
          </FlexRowContainer>
        </FlexContainer>
      </FlexRowContainer>}
    </Button>
  );
};

export default WatchButton;