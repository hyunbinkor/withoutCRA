function getFileTree() {
  // 에러 핸들링을 한 번 넣어주면 좋을듯? -> 데이터 유효성 검사를

  return [
    {
      isFolder: true,
      fileName: '.github',
      commitMessage: 'chore(ci): update to node 20',
      mergeNumber: 6774,
      commitDate: new Date(2024, 3, 7, 11, 0, 0, 0),
    },
    {
      isFolder: true,
      fileName: '.husky',
      commitMessage: 'chore: update husky and lint-staged',
      mergeNumber: 6785,
      commitDate: new Date(2024, 3, 7, 11, 0, 0, 0),
    },
    {
      isFolder: true,
      fileName: 'src',
      commitMessage: 'fix(Fade): fix ref warning for react 18.3+',
      mergeNumber: 6820,
      commitDate: new Date(2024, 7, 0, 11, 0, 0, 0),
    },
    {
      isFolder: true,
      fileName: 'test',
      commitMessage: 'chore: fix ts issues',
      mergeNumber: 6791,
      commitDate: new Date(2024, 3, 7, 11, 0, 0, 0),
    },
    {
      isFolder: true,
      fileName: 'tests',
      commitMessage: 'chore: fix ts issues',
      mergeNumber: 6791,
      commitDate: new Date(2024, 3, 7, 11, 0, 0, 0),
    },
    {
      isFolder: true,
      fileName: 'tools',
      commitMessage: 'feat: Add proper Typescript support',
      mergeNumber: 5251,
      commitDate: new Date(2020, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: true,
      fileName: 'www',
      commitMessage: 'docs: fix mistake with grid example',
      mergeNumber: 6826,
      commitDate: new Date(2024, 7, 0, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: '.babelrc.js',
      commitMessage: 'feat: add initial RSC support',
      mergeNumber: 6646,
      commitDate: new Date(2023, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: '.editorconfig',
      commitMessage: 'Https link to EditorConfig.org',
      commitDate: new Date(2019, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: '.eslintignore',
      commitMessage:
        'fix(types): type clean up for eventKey and removal of some unneeded type helpers',
      commitDate: new Date(2019, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: '.eslintrc',
      commitMessage: 'chore: fix ts issues',
      mergeNumber: 6791,
      commitDate: new Date(2024, 3, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: '.gitattributes',
      commitMessage: 'ci: added GitHub Action workflow for CI',
      mergeNumber: 4324,
      commitDate: new Date(2019, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: '.gitignore',
      commitMessage: 'feat: Add proper Typescript support',
      mergeNumber: 5251,
      commitDate: new Date(2020, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: '.nvmrc',
      commitMessage: 'chore(ci): update to node 20',
      mergeNumber: 6774,
      commitDate: new Date(2024, 3, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: '.travis.yml',
      commitMessage: 'ci: added GitHub Action workflow for CI',
      mergeNumber: 4324,
      commitDate: new Date(2019, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'CHANGELOG-pre1.md',
      commitMessage: 'chore(build): add conventional changelog',
      commitDate: new Date(2018, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'CHANGELOG.md',
      commitMessage: 'Publish v2.10.4',
      commitDate: new Date(2024, 7, 7, 10, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'CONTRIBUTING.md',
      commitMessage: 'docs: fix typo in CONTRIBUTING.md',
      mergeNumber: 6438,
      commitDate: new Date(2022, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'LICENSE',
      commitMessage: 'Update LICENSE',
      commitDate: new Date(2016, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'MAINTAINING.md',
      commitMessage: 'Link directly to #react-bootstrap channel on Reactiflux',
      mergeNumber: 5581,
      commitDate: new Date(2020, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'README.md',
      commitMessage: 'docs: v1 no longer maintained',
      commitDate: new Date(2024, 0, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'codecov.yml',
      commitMessage: 'Switch to Codecov',
      commitDate: new Date(2016, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'karma.conf.js',
      commitMessage: 'chore: remove enzyme',
      mergeNumber: 6777,
      commitDate: new Date(2024, 3, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'manual_releases.md',
      commitMessage: 'fix: republish to fix build artifacts',
      commitDate: new Date(2024, 3, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'package.json',
      commitMessage: 'Publish v2.10.4',
      commitDate: new Date(2024, 7, 7, 10, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'renovate.json',
      commitMessage: 'chore: Use shared Renovate config',
      mergeNumber: 4854,
      commitDate: new Date(2019, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'tsconfig.json',
      commitMessage: 'feat: Add proper Typescript support',
      mergeNumber: 5251,
      commitDate: new Date(2020, 7, 7, 11, 0, 0, 0),
    },
    {
      isFolder: false,
      fileName: 'yarn.lock',
      commitMessage: 'chore: update dev deps',
      mergeNumber: 6811,
      commitDate: new Date(2024, 6, 25, 11, 0, 0, 0),
    },
  ];
}

export default getFileTree;
