function Title() {
  return (
    <div className="title">
        <div className="title-container">
          <div className="title-left">
            <div className="title-left-repository">
              <div className="title-left-repository-icon">
                <img className="title-left-repository-icon-img" src="./assets/title-left-repository-icon.png" alt="" />
              </div>
              <div className="title-left-repository-text">
                <a className="title-left-repository-text-link" href="">react-bootstrap</a>
              </div>
            </div>
            <div className="title-left-ispublic">
              <button className="title-left-ispublic-button disabled">
                Public
              </button>
            </div>
          </div>
          <div className="title-right">
            <button className="title-right-watch-button">
          <div className="title-right-watch-icon">
            <svg className="title-right-watch-icon-eye" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
            </svg>
            <svg className="title-right-watch-icon-ignore disabled" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"></path>
            </svg>
          </div>
          <div className="title-right-watch-text-watch">
            Watch
          </div>
          <div className="title-right-watch-text-unwatch disabled">
            Unwatch
          </div>
          <div className="title-right-watch-text-ignore disabled">
            Stop ignoring
          </div>
          <div className="title-right-watch-number">
            422
          </div>
          <div className="title-right-watch-toggle">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
              <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
            </svg>
          </div>
          <div className="title-right-watch-modal">
            <div className="title-right-watch-modal-participating">
              <div className="title-right-watch-modal-participating-check">
                <svg className="title-right-watch-modal-participating-check-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                </svg>
              </div>
              <div className="title-right-watch-modal-participating-text">
                <div className="title-right-watch-modal-title">
                  Participating and @mentions
                </div>
                <div className="title-right-watch-modal-subtext">
                  Only receive notifications from this repository when participating or @mentioned.
                </div>
              </div>
            </div>
            <div className="title-right-watch-modal-all">
              <div className="title-right-watch-modal-all-check">
                <svg className="title-right-watch-modal-all-check-icon disabled" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
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
                <svg className="title-right-watch-modal-ignore-check-icon disabled" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                </svg>
              </div>
              <div className="title-right-watch-modal-ignore-text">            
                <div className="title-right-watch-modal-title">
                  Ignore
                </div>
                <div className="title-right-watch-modal-subtext">
                  Never be notified.
                </div>
              </div>
            </div>
          </div>
        </button>
            <button className="title-right-fork-button">
              <div className="title-right-fork-icon">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked mr-2">
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                </svg>
              </div>
              <div className="title-right-fork-text">
                Fork
              </div>
              <div className="title-right-fork-number">
                3.6k
              </div>
            </button>
            <button className="title-right-fork-toggle-button">
              <div className="title-right-fork-toggle-button-icon">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
                  <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                </svg>
              </div>
            </button>
            <button className="title-right-star-button">
              <div className="title-right-star-icon">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star d-inline-block mr-2">
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                </svg>
              </div>
              <div className="title-right-star-text">
                Star
              </div>
              <div className="title-right-star-number">
                22.3k
              </div>
            </button>
            <button className="title-right-star-toggle-button">
              <div className="title-right-star-toggle-button-icon">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
                  <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Title