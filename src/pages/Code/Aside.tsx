import FlexContainer from "@/components/atomic/FlexContainer";
import FlexRowContainer from "@/components/atomic/FlexRowContainer";
import Svg from "@/components/atomic/Svg";
import Text from "@/components/atomic/Text";
import contributors from "@/assets/contributors";
import Boundary from "@/components/atomic/Boundary";

function Aside() {
  return (
    <FlexRowContainer
      tag="aside"
      gap={0}
    >
      <FlexRowContainer
        className="aside-about"
        gap={10}
      >
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
        <FlexContainer
          justifyContents="flex_start"
          gap={4}
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
        <FlexContainer>
          <ul className="aside-about-tag-list">
            <li className="aside-about-tag-item">
              react
            </li>
            <li className="aside-about-tag-item">
              javascript
            </li>
            <li className="aside-about-tag-item">
              bootstrap
            </li>
            <li className="aside-about-tag-item">
              typescript
            </li>
            <li className="aside-about-tag-item">
              react-componenets
            </li>
            <li className="aside-about-tag-item">
              hacktoberfest
            </li>
          </ul>
        </FlexContainer>
        <FlexRowContainer>
          <FlexContainer
            justifyContents="flex_start"
            gap={4}
          >
            <Svg
              icon='book'
              color="gray_400"
            />
            <Text
              color="gray_400"
              text="Readme"
            />
          </FlexContainer>
          <FlexContainer
            justifyContents="flex_start"
            gap={4}
          >
            <Svg
              icon='license'
              color="gray_400"
            />
            <Text
              color="gray_400"
              text="MIT License"
            />
          </FlexContainer>
          <FlexContainer
            justifyContents="flex_start"
            gap={4}
          >
            <Svg
              icon='activity'
              color="gray_400"
            />
            <Text
              color="gray_400"
              text="Activity"
            />
          </FlexContainer>
          <FlexContainer
            justifyContents="flex_start"
            gap={4}
          >
            <Svg
              icon='dialogue'
              color="gray_400"
            />
            <Text
              color="gray_400"
              text="Custom Properties"
            />
          </FlexContainer>
          <FlexContainer
            justifyContents="flex_start"
            gap={4}
          >
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
            />
          </FlexContainer>
          <FlexContainer
            justifyContents="flex_start"
            gap={4}
          >
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
            />
          </FlexContainer>
          <FlexContainer
            justifyContents="flex_start"
            gap={4}
          >
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
            />
          </FlexContainer>
          <Text
            color="gray_400"
            text="Report Repository"
          />
        </FlexRowContainer>
      </FlexRowContainer>
      <FlexRowContainer className="aside-releases">
        <FlexContainer
          justifyContents="flex_start"
          gap={4}
        >
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
        <FlexContainer
          justifyContents="flex_start"
          gap={4}
        >
          <Svg
            icon="tag"
            color="green_300"
          />
          <FlexRowContainer>
            <FlexContainer>
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
          </FlexRowContainer>
        </FlexContainer>
        <Text
          color="blue_300"
          text="+ 62 releases"
          link="https://github.com/react-bootstrap/react-bootstrap/releases"
        />
      </FlexRowContainer>
      <FlexRowContainer className="aside-packages">
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
      </FlexRowContainer>
      <FlexRowContainer className="aside-contributors">
        <FlexContainer
          justifyContents="flex_start"
          gap={4}
        >
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
        <ul className="aside-contributors-list">
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_1} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_2} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_3} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_4} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_5} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_6} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_7} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_8} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_9} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_10} alt=""/>            
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_11} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_12} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_13} alt=""/>
          </li>
          <li className="aside-contributors-item">
            <img className="aside-contributors-item-img" src={contributors.ctrb_14} alt=""/>
          </li>
        </ul>
        <Text
          color="blue_300"
          text="+ 461 contributors"
          link="https://github.com/react-bootstrap/react-bootstrap/graphs/contributors"
        />
      </FlexRowContainer>
      <FlexRowContainer className="aside-deployments">
        <FlexContainer
          justifyContents="flex_start"
          gap={4}
        >
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
        <FlexContainer
          justifyContents="flex_start"
          gap={4}
        >
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
      </FlexRowContainer>
      <FlexRowContainer className="aside-languages">
        <Text
          fontSize="px16"
          color="black"
          isBold
          text="Languages"
        />
        <div className="aside-languages-ratio">
          <div className="aside-language-ratio-diagram">
            <div className="aside-language-ratio-diagram-ts blue">

            </div>
            <div className="aside-language-ratio-diagram-js yellow">

            </div>
            <div className="aside-language-ratio-diagram-mdx orange">

            </div>
            <div className="aside-language-ratio-diagram-other gray">

            </div>
          </div>
          <div className="aside-language-ratio-rate">
            <div className="aside-language-ratio-rate-ts">
              <div className="aside-language-ratio-rate-ts-color blue">

              </div>
              <div className="aside-language-ratio-rate-ts-text">
                TypeScript
              </div>
              <div className="aside-language-ratio-rate-ts-subtext">
                65.2%
              </div>
            </div>
            <div className="aside-language-ratio-rate-js">
              <div className="aside-language-ratio-rate-js-color yellow">

              </div>
              <div className="aside-language-ratio-rate-js-text">
                JavaScript
              </div>
              <div className="aside-language-ratio-rate-js-subtext">
                22.1%
              </div>
            </div>
            <div className="aside-language-ratio-rate-mdx">
              <div className="aside-language-ratio-rate-mdx-color orange">

              </div>
              <div className="aside-language-ratio-rate-mdx-text">
                MDX
              </div>
              <div className="aside-language-ratio-rate-mdx-subtext">
                11.8%
              </div>
            </div>
            <div className="aside-language-ratio-rate-other">
              <div className="aside-language-ratio-rate-other-color gray">

              </div>
              <div className="aside-language-ratio-rate-other-text">
                Other
              </div>
              <div className="aside-language-ratio-rate-other-subtext">
                0.9%
              </div>
            </div>
          </div>
        </div>
      </FlexRowContainer>
    </FlexRowContainer>
  );
};

export default Aside;