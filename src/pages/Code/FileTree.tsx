function FileTree() {
  return (
    <main className="filetree">
          <table className="filetree-table">
            <tr className="filetree-table-header">
              <th className="filetree-table-header"></th>
              <th className="filetree-table-header"></th>
              <th className="filetree-table-header"></th>
              <th className="filetree-table-header"></th>
            </tr>
            <tr className="filetree-tab">
              <td className="filetree-tab-line">
                <div className="filetree-tab-line-left">
                  <img src="./assets/main-filetree-tab-line-left-usericon.png" alt="" className="filetree-tab-line-left-usericon"/>
                  <a className="h3 filetree-tab-line-left-userid bold">
                    BOXNYC
                  </a> 
                  <a className="h3 filetree-tab-line-left-commitmessage tarnished">
                    fix(Fade): fix ref warning for react 18.3+ (#6820)
                  </a> 
                  <svg className="filetree-tab-line-left-githubaction" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>
                </div>
                <div className="filetree-tab-line-right">
                  <a className="h2 filetree-tab-line-right-commitinfo tarnished">
                    9b8bcd7 · last week
                  </a> 
                  <button className="filetree-tab-line-right-pastcommit">
                    <svg className="filetree-tab-line-right-pastcommit-icon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg>
                    <a className="h2 filetree-tab-line-right-pastcommit-text bold">
                        4,536 Commits
                    </a> 
                  </button>
                </div>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-directoryicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text-text">.github</a> 
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore(ci): update to node 20 (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6774</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 month ago</a> 
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-directoryicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">.husky</a> 
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore: update husky and lint-staged (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6785</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 month ago</a> 
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-directoryicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">src</a> 
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">fix(Fade): fix ref warning for react 18.3+ (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6820</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">last week</a> 
              </td>      
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-directoryicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">test</a> 
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore: fix ts issues (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6791</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 months ago</a> 
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-directoryicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
                <a className="h3 filetree-document-line-modifieddate-text tarnished">tests</a> 
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore: fix ts issues (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6791</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>            
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 months ago</a>   
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-directoryicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
                <a className="h3 filetree-document-line-modifieddate-text tarnished">tools</a> 
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">feat: Add proper Typescript support (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#5251</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-directoryicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">www</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">docs: fix mistake with grid example (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6826</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">last week</a> 
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">.babelrc.js</a> 
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">feat: add initial RSC support (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6646</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">last year</a> 
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">.editorconfig</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">Https link to EditorConfig.org</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">5 years ago</a> 
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">.eslintignore</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">fix(types): type clean up for eventKey and removal of some unneeded type helpers</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">5 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">.eslintrc</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore: fix ts issues (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6791</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 months ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">.gitattributes</a> 
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">ci: added GitHub Action workflow for CI (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#4324</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">5 years ago</a> 
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">.gitignore</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">feat: Add proper Typescript support (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#5251</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">.nvmrc</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore(ci): update to node 20 (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6774</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 months ago</a> 
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">.travis.yml</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">ci: added GitHub Action workflow for CI (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#4324</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">5 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">CHANGELOG-pre1.md</a> 
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore(build): add conventional changelog</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">6 years ago</a> 
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">CHANGELOG.md</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">Publish v2.10.4</a>  
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">yesterday</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">CONTRIBUTING.md</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">docs: fix typo in CONTRIBUTING.md (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6438</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">2 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">LICENSE</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">Update LICENSE</a>  
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">8 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">MAINTAINING.md</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">Link directly to #react-bootstrap channel on Reactiflux (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#5581</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">README.md</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">docs: v1 no longer maintained</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">7 months ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">codecov.yml</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">Switch to Codecov</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">8 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">karma.conf.js</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore: remove enzyme (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6777</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 months ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">manual_releases.md</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">fix: republish to fix build artifacts</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">package.json</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">Publish v2.10.4</a>  
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">yesterday</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">renovate.json</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore: Use shared Renovate config (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#4854</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">5 years ago</a>   
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">tsconfig.json</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">feat: Add proper Typescript support (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#5251</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">4 years ago</a>
              </td>
            </tr>
            <tr className="filetree-document-line">
              <td className="filetree-document-line-filename">
                <svg className="filetree-document-line-filename-fileicon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
                <a className="h3 filetree-document-line-filename-text">yarn.lock</a>
              </td>
              <td className="filetree-document-line-commitmessage">
                <div className="filetree-document-line-commitmessage-container">
                  <a className="h3 filetree-document-line-commitmessage-text tarnished">chore: update dev deps (</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6811</a>{/*
                  */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
                </div>
              </td>
              <td className="filetree-document-line-modifieddate">
                <a className="h3 filetree-document-line-modifieddate-text tarnished">2 weeks ago</a> 
              </td>
            </tr>
          </table>
        </main>
  );
};

export default FileTree;