import StyleContainer from "@/components/atomic/StyleContainer";
import FlexContainer from "@/components/atomic/FlexContainer";

import Svg from "@/components/atomic/Svg";
import Text from "@/components/atomic/Text";
import contributors from "@/assets/contributors";
import Boundary from "@/components/atomic/Boundary";
import List from "@/components/atomic/List";
import ImageButton from "@/components/atomic/ImageButton";9

import COLORS from "@/utils/constants/COLORS";
import Diagram from "@/components/atomic/Diagram";
import DiagramInfo from "@/components/atomic/DiagramInfo";

function Aside() {
  return (
    <FlexContainer className="aside-flex" flexDirection="column">
      <StyleContainer className="aside_about-style" borderBottom={`solid 1px ${COLORS.GRAY_300}`} padding="16px 0px">
        <FlexContainer className="aside_about-flex" flexDirection="column" gap="16px">
          <Text
            fontSize="px16"
            color="black"
            isBold
            text="About"
          />
          <Text
            fontSize="px16"
            color="black"
            text="Bootstrap components built with React"
          />
          <FlexContainer className="aside_about_link-flex" justifyContent="flex-start" gap="8px"
          >
            <Svg
              icon='link'
              color='black'
            />
            <Text
              fontSize="px14"
              color="blue_300"
              isBold
              text="react-bootstrap.github.io/"
              link="react-bootstrap.github.io/"
            />
          </FlexContainer>
          <FlexContainer className="aside_about_stack-flex">
            <List>
              {[
                <Boundary
                  backgroundColor="blue_100"
                >
                  <Text
                    fontSize="px12"
                    color="blue_300"
                    text="react"
                  />
                </Boundary>,
                <Boundary
                  backgroundColor="blue_100"
                >
                  <Text
                    fontSize="px12"
                    color="blue_300"
                    text="javascript"
                  />
                </Boundary>,
                <Boundary
                  backgroundColor="blue_100"
                >
                  <Text
                    fontSize="px12"
                    color="blue_300"
                    text="bootstrap"
                  />
                </Boundary>,
                <Boundary
                  backgroundColor="blue_100"
                >
                  <Text
                    fontSize="px12"
                    color="blue_300"
                    text="typescript"
                  />
                </Boundary>,
                <Boundary
                  backgroundColor="blue_100"
                >
                  <Text
                    fontSize="px12"
                    color="blue_300"
                    text="react-components"
                  />
                </Boundary>,
                <Boundary
                  backgroundColor="blue_100"
                >
                  <Text
                    fontSize="px12"
                    color="blue_300"
                    text="hacktoberfest"
                  />
                </Boundary>,
              ]}
            </List>
          </FlexContainer>
          <FlexContainer className="aside_about_menu-flex" flexDirection="column" gap="12px">
            <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
              <Svg
                icon='book'
                color="gray_400"
              />
              <Text
                color="gray_400"
                text="Readme"
                link="https://github.com/react-bootstrap/react-bootstrap#readme-ov-file"
              />
            </FlexContainer>
            <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
              <Svg
                icon='license'
                color="gray_400"
              />
              <Text
                color="gray_400"
                text="MIT License"
                link="https://github.com/react-bootstrap/react-bootstrap#MIT-1-ov-file"
              />
            </FlexContainer>
            <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
              <Svg
                icon='activity'
                color="gray_400"
              />
              <Text
                color="gray_400"
                text="Activity"
                link="https://github.com/react-bootstrap/react-bootstrap/activity"
              />
            </FlexContainer>
            <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
              <Svg
                icon='dialogue'
                color="gray_400"
              />
              <Text
                color="gray_400"
                text="Custom Properties"
                link="https://github.com/react-bootstrap/react-bootstrap/custom-properties"
              />
            </FlexContainer>
            <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
              <Svg
                icon='star'
                color="gray_400"
              />
              <Text
                color="gray_400"
                isBold
                text="22.3k"
              />
              <Text
                color="gray_400"
                text="stars"
                link="https://github.com/react-bootstrap/react-bootstrap/stargazers"
              />
            </FlexContainer>
            <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
              <Svg
                icon='watch'
                color="gray_400"
              />
              <Text
                color="gray_400"
                isBold
                text="422"
              />
              <Text
                color="gray_400"
                text="watching"
                link="https://github.com/react-bootstrap/react-bootstrap/watchers"
              />
            </FlexContainer>
            <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
              <Svg
                icon='fork'
                color="gray_400"
              />
              <Text
                color="gray_400"
                isBold
                text="3.6k"
              />
              <Text
                color="gray_400"
                text="forks"
                link="https://github.com/react-bootstrap/react-bootstrap/forks"
              />
            </FlexContainer>
            <Text
              color="gray_400"
              text="Report Repository"
              link="https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Freact-bootstrap%2Freact-bootstrap&report=react-bootstrap+%28user%29"
            />
          </FlexContainer>
        </FlexContainer>
      </StyleContainer>
      <StyleContainer className="aside_releases-style" borderBottom={`solid 1px ${COLORS.GRAY_300}`} padding="16px 0px">
        <FlexContainer className="aside-releases-flex" flexDirection="column" gap="16px">
          <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
            <Text
              fontSize="px16"
              color="black"
              isBold
              text="Releases"
            />
            <Boundary>
              <Text
                fontSize="px12"
                text="63"
              />
            </Boundary>
          </FlexContainer>
          <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
            <Svg
              icon="tag"
              color="green_300"
            />
            <FlexContainer flexDirection="column">
              <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
                <Text
                  isBold
                  text="v2.10.4"
                />
                <Boundary
                  hasBorder
                  borderColor="green_300"
                  backgroundColor="white"
                >
                  <Text
                    fontSize="px12"
                    color="green_300"
                    text="Latest"
                  />
                </Boundary>
              </FlexContainer>
              <Text
                fontSize="px12"
                color="gray_400"
                text="on Jun 30"
              />
            </FlexContainer>
          </FlexContainer>
          <Text
            color="blue_300"
            text="+ 62 releases"
            link="https://github.com/react-bootstrap/react-bootstrap/releases"
          />
        </FlexContainer>
      </StyleContainer>
      <StyleContainer className="aside_packages-style" borderBottom={`solid 1px ${COLORS.GRAY_300}`} padding="16px 0px">
        <FlexContainer className="aside_packages-flex" flexDirection="column" gap="16px">
          <Text
            fontSize="px16"
            isBold
            text="Packages"
          />
          <Text
            fontSize="px12"
            color="gray_400"
            text="No packages published"
          />
        </FlexContainer>
      </StyleContainer>
      <StyleContainer className="aside_contributors-style" borderBottom={`solid 1px ${COLORS.GRAY_300}`} padding="16px 0px">
        <FlexContainer className="aside_contributors-flex" flexDirection="column" gap="16px">
          <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
            <Text
              fontSize="px16"
              color="black"
              isBold
              text="Contributors"
            />
            <Boundary>
              <Text
                fontSize="px12"
                text="475"
              />
            </Boundary>
          </FlexContainer>
          <List gap={3}>
            {[
              <ImageButton
                btnImg={contributors.ctrb_1}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_2}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_3}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_4}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_5}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_6}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_7}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_8}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_9}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_10}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_11}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_12}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_13}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
              <ImageButton
                btnImg={contributors.ctrb_14}
                btnHandleClick={() => console.log('contributors icon clicked')}
              />,
            ]}
          </List>
          <Text
            color="blue_300"
            text="+ 461 contributors"
            link="https://github.com/react-bootstrap/react-bootstrap/graphs/contributors"
          />
        </FlexContainer>
      </StyleContainer>
      <StyleContainer className="aside_deployments-style" borderBottom={`solid 1px ${COLORS.GRAY_300}`} padding="16px 0px">
        <FlexContainer className="aside_deployments-flex" flexDirection="column" gap="16px">
          <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
            <Text
              fontSize="px16"
              color="black"
              isBold
              text="Deployments"
            />
            <Boundary>
              <Text
                fontSize="px12"
                text="2"
              />
            </Boundary>
          </FlexContainer>
          <FlexContainer justifyContent="flex-start" alignItems="center" gap='8px'>
            <Svg
              icon='success_background'
              color="green_300"
            />
            <Text
              color="black"
              isBold
              text="github-pages"
            />
            <Text
              fontSize="px12"
              color="gray_400"
              text="last year"
            />
          </FlexContainer>
        </FlexContainer>
      </StyleContainer>
      <StyleContainer className="aside_languages-style" padding="16px 0px">
        <FlexContainer className="aside_languages" flexDirection="column" gap="16px">
          <Text
            fontSize="px16"
            color="black"
            isBold
            text="Languages"
          />
          <FlexContainer gap="2px">
            <Diagram isStart color={COLORS.LANGUAGES.TYPESCRIPT} percantage={65} />
            <Diagram color={COLORS.LANGUAGES.JAVASCRIPT} percantage={22} />
            <Diagram color={COLORS.LANGUAGES.MDX} percantage={12} />
            <Diagram isEnd color={COLORS.LANGUAGES.OTHER} percantage={1}/>
          </FlexContainer>
          <List>
            {[
              <FlexContainer gap='8px'>
                <FlexContainer gap='6px' alignItems="center">
                  <DiagramInfo color={COLORS.LANGUAGES.TYPESCRIPT} />
                  <Text
                    fontSize="px12"
                    isBold
                    text="TypeScript"
                  />
                  <Text
                    fontSize="px12"
                    text="65.3%"
                  />
                </FlexContainer>
              </FlexContainer>,
              <FlexContainer gap='16px'>
                <FlexContainer gap='8px' alignItems="center">
                  <DiagramInfo color={COLORS.LANGUAGES.JAVASCRIPT} />
                  <Text
                    fontSize="px12"
                    isBold
                    text="JavaScript"
                  />
                  <Text
                    fontSize="px12"
                    text="22.0%"
                  />
                </FlexContainer>
              </FlexContainer>,
              <FlexContainer gap='16px' alignItems="center">
                <DiagramInfo color={COLORS.LANGUAGES.MDX} />
                <FlexContainer gap='8px'>
                  <Text
                    fontSize="px12"
                    isBold
                    text="MDX"
                  />
                  <Text
                    fontSize="px12"
                    text="11.8%"
                  />
                </FlexContainer>
              </FlexContainer>,
              <FlexContainer gap='16px'>
                <FlexContainer gap='8px' alignItems="center">
                  <DiagramInfo color={COLORS.LANGUAGES.OTHER} />
                  <Text
                    fontSize="px12"
                    isBold
                    text="Other"
                  />
                  <Text
                    fontSize="px12"
                    text="0.9%"
                  />
                </FlexContainer>
              </FlexContainer>,
            ]}
          </List>
        </FlexContainer>
      </StyleContainer>
    </FlexContainer>
  );
};

export default Aside;