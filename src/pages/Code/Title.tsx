import FlexContainer from '@/components/atomic/FlexContainer';
import ImageButton from '@/components/atomic/ImageButton';
import Text from '@/components/atomic/Text';

import RepoIcon from '@/assets/title-left-repository-icon.png'
import Button from '@/components/atomic/Button';
import Boundary from '@/components/atomic/Boundary';
import FlexRowContainer from '@/components/atomic/FlexRowContainer';

function Title() {
  return (
    <FlexRowContainer hasBottom columnPadding={8} maxWidth={1192}>
      <FlexContainer className="title">
        <FlexContainer
          className="title-left"
          justifyContents="flex_start"
          gap={5}>
          <ImageButton
            btnSize='mini'
            btnImg={RepoIcon}
            btnIsRec
            btnHandleClick={() => console.log('repo button clicked')}
          >
          </ImageButton>
          <Text
            fontSize='px18'
            color='black'
            isBold
            text='react-bootstrap'
            link='https://github.com/react-bootstrap/react-bootstrap'
          />
          <Boundary
            hasBorder
            backgroundColor='white'
            borderColor='gray_300'
          >
            <Text
              fontSize='px12'
              color='gray_400'
              isBold
              text='Public'
            />
          </Boundary>
        </FlexContainer>
        <FlexContainer
          className="title-right"
          justifyContents="flex_end"
          gap={4}
        >
          {/* <button className="title-right-watch-button">
            <div className="title-right-watch-icon">
              <svg
                className="title-right-watch-icon-eye"
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
              </svg>
              <svg
                className="title-right-watch-icon-ignore disabled"
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"></path>
              </svg>
            </div>
            <div className="title-right-watch-text-watch">Watch</div>
            <div className="title-right-watch-text-unwatch disabled">Unwatch</div>
            <div className="title-right-watch-text-ignore disabled">
              Stop ignoring
            </div>
            <div className="title-right-watch-number">422</div>
            <div className="title-right-watch-toggle">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-triangle-down"
              >
                <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
              </svg>
            </div>
            <div className="title-right-watch-modal">
              <div className="title-right-watch-modal-participating">
                <div className="title-right-watch-modal-participating-check">
                  <svg
                    className="title-right-watch-modal-participating-check-icon"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                  </svg>
                </div>
                <div className="title-right-watch-modal-participating-text">
                  <div className="title-right-watch-modal-title">
                    Participating and @mentions
                  </div>
                  <div className="title-right-watch-modal-subtext">
                    Only receive notifications from this repository when
                    participating or @mentioned.
                  </div>
                </div>
              </div>
              <div className="title-right-watch-modal-all">
                <div className="title-right-watch-modal-all-check">
                  <svg
                    className="title-right-watch-modal-all-check-icon disabled"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                  </svg>
                </div>
                <div className="title-right-watch-modal-all-text">
                  <div className="title-right-watch-modal-title">
                    All Activity
                  </div>
                  <div className="title-right-watch-modal-subtext">
                    Notified of all notifications on this repository.
                  </div>
                </div>
              </div>
              <div className="title-right-watch-modal-ignore">
                <div className="title-right-watch-modal-ignore-check">
                  <svg
                    className="title-right-watch-modal-ignore-check-icon disabled"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                  </svg>
                </div>
                <div className="title-right-watch-modal-ignore-text">
                  <div className="title-right-watch-modal-title">Ignore</div>
                  <div className="title-right-watch-modal-subtext">
                    Never be notified.
                  </div>
                </div>
              </div>
            </div>
          </button> */}
          <Button
            btnIcon='fork'
            btnSize='small'
            btnHasBorder
            btnHasToggle
            btnToggleSeperate
            btnHandleClick={() => console.log('fork button clicked')}
          >
            <Text
              fontSize='px12'
              color='black'
              text='Fork'
            />
            <Boundary
              backgroundColor='gray_200'
            >
              <Text
                fontSize='px12'
                color='black'
                text='3.6k'
              />
            </Boundary>
          </Button>
          <Button
            btnIcon='star'
            btnSize='small'
            btnHasBorder
            btnHasToggle
            btnToggleSeperate
            btnHandleClick={() => console.log('star button clicked')}
          >
            <Text
              fontSize='px12'
              color='black'
              text='Star'
            />
            <Boundary
              backgroundColor='gray_200'
            >
              <Text
                fontSize='px12'
                color='black'
                text='22.3k'
              />
            </Boundary>
          </Button>
        </FlexContainer>
      </FlexContainer>
    </FlexRowContainer>
  );
}

export default Title;
