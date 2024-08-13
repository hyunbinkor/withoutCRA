import FlexRowContainer from "@/components/atomic/FlexRowContainer";

function Aside() {
  return (
    <FlexRowContainer tag="aside">
      <FlexRowContainer className="aside-about">
        <div className="aside-about-title">
          <div className="aside-about-title-text">
            About
          </div>
        </div>
        <div className="aside-about-text">
          Bootstrap components built with React
        </div>
        <div className="aside-about-link">
          <div className="aside-about-link-icon">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-link flex-shrink-0 mr-2">
              <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
            </svg>
          </div>
          <div className="aside-about-link-text">
            <a className="aside-about-link-text-a" href="react-bootstrap.github.io/">react-bootstrap.github.io/</a>
          </div>
        </div>
        <div className="aside-about-tag">
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
        </div>
        <div className="aside-about-readme">
          <div className="aside-about-readme-icon">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-book mr-2">
              <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
            </svg>
          </div>
          <div className="aside-about-readme-number disabled">

          </div>
          <div className="aside-about-readme-text">
            Readme
          </div>
        </div>
        <div className="aside-about-license">
          <div className="aside-about-license-icon">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-law mr-2">
              <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
            </svg>
          </div>
          <div className="aside-about-license-number disabled">

          </div>
          <div className="aside-about-license-text">
            MIT License
          </div>
        </div>
        <div className="aside-about-activity">
          <div className="aside-about-activity-icon">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-pulse mr-2">
              <path d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z"></path>
            </svg>
          </div>
          <div className="aside-about-activity-number disabled">

          </div>
          <div className="aside-about-activity-text">
            Activity
          </div>
        </div>
        <div className="aside-about-customprops">
          <div className="aside-about-customprops-icon">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-note mr-2">
              <path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path>
            </svg>
          </div>
          <div className="aside-about-customprops-number disabled">

          </div>
          <div className="aside-about-customprops-text">
            Custom properties
          </div>
        </div>
        <div className="aside-about-stars">
          <div className="aside-about-stars-icon">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star mr-2">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
          </div>
          <div className="aside-about-stars-number">
            <strong>22.3k</strong>
          </div>
          <div className="aside-about-stars-text">
            stars
          </div>
        </div>
        <div className="aside-about-watching">
          <div className="aside-about-watching-icon">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-eye mr-2">
              <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
            </svg>
          </div>
          <div className="aside-about-watching-number">
            <strong>422</strong>
          </div>
          <div className="aside-about-watching-text">
            watching
          </div>
        </div>
        <div className="aside-about-forks">
          <div className="aside-about-forks-icon">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked mr-2">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
          </div>
          <div className="aside-about-forks-number">
            <strong>3.6k</strong>
          </div>
          <div className="aside-about-forks-text">
            forks
          </div>
        </div>
        <div className="aside-about-report">
          <div className="aside-about-report-text">
            Report repository
          </div>
        </div>
      </FlexRowContainer>
      <FlexRowContainer className="aside-releases">
        <div className="aside-releases-title">
          <div className="aside-releases-title-text">
            Releases
          </div>
          <div className="aside-releases-title-number">
          63
          </div>
        </div>
        <div className="aside-releases-latest">
          <div className="aside-releases-latest-icon">
            <svg className="aside-releases-latest-icon-tag" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
            </svg>
          </div>
          <div className="aside-releases-latest-info">
            <div className="aside-releases-latest-info-up">
              <div className="aside-releases-latest-info-version">
                v2.10.4
              </div>
              <div className="aside-releases-latest-info-tag">
                Latest
              </div>
            </div>
            <div className="aside-release-latest-info-down">
              <div className="aside-release-latest-info-down-date">
                on Jun 30
              </div>
            </div>
          </div>
        </div>
        <div className="aside-releases-text">
          <a className="aside-releases-text-a" href="">+ 62 releases</a>
        </div>
      </FlexRowContainer>
      <FlexRowContainer className="aside-packages">
        <div className="aside-packages-title">
          <div className="aside-packages-title-text">
            Packages
          </div>
        </div>
        <div className="aside-packages-text">
          No packages published
        </div>
      </FlexRowContainer>
      <FlexRowContainer className="aside-usedby">
        <div className="aside-usedby-title">
          <div className="aside-usedby-title-text">
            Used by
          </div>
          <div className="aside-usedby-title-number">
            1.7m
          </div>
        </div>
        <div className="aside-usedby-users">
          <a href="" className="aside-usedby-users-a">
            <img className="aside-usedby-users-a-icon" src="./assets/aside-usedby-users-icon.PNG" alt=""/>
            <p>+ 1,683,539</p>
          </a>
        </div>
      </FlexRowContainer>
      <FlexRowContainer className="aside-contributors">
        <div className="aside-contributors-title">
          <div className="aside-contributors-title-text">
            Contributors
          </div>
          <div className="aside-contributors-title-number">
            475
          </div>
        </div>
        <div className="aside-contributors-container">
          <ul className="aside-contributors-list">
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-1.jfif" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-2.png" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-3.png" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-4.jfif" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-5.jfif" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-6.jfif" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-7.png" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-8.png" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-9.jfif" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-10.png" alt=""/>            
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-11.png" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-12.jfif" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-13.jfif" alt=""/>
            </li>
            <li className="aside-contributors-item">
              <img className="aside-contributors-item-img" src="./assets/aside-contributors-item-14.jfif" alt=""/>
            </li>
          </ul>
          <div className="aside-contributors-number">
            <a href="" className="aside-contributors-number-a">
              + 461 contriutors
            </a>
          </div>
        </div>
      </FlexRowContainer>
      <FlexRowContainer className="aside-deployments">
        <div className="aside-deployments-title">
          <div className="aside-deployments-title-text">
            Deployments
          </div>
          <div className="aside-deployments-title-number">
            2
          </div>
        </div>
        <div className="aside-deployments-lastdeploy">
          <div className="aside-deployments-lastdeploy-icon">
            <svg id="github-pages-successful" aria-hidden="true" height="24" viewBox="0 -4 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check-circle-fill color-fg-success" aria-describedby="tooltip-5e3de6ff-b1e8-4588-aad0-3a54877d9b80">
              <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L6.75 9.19 5.28 7.72a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z"></path>
            </svg>
          </div>
          <div className="aside-deployments-lastdeploy-text">
            github-pages
          </div>
          <div className="aside-deployments-lastdeploy-subtext">
            last year
          </div>
        </div>
      </FlexRowContainer>
      <FlexRowContainer className="aside-languages">
        <div className="aside-languages-title">
          <div className="aside-languages-title-text">
            Languages
          </div>
        </div>
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