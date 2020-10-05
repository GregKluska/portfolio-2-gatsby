import theme from './theme';

export const makeContainer = () => {
  return `
        width: 100%;

        margin-left: auto;
        margin-right: auto;

        padding-left: ${theme.gutterSize.xs / 2}px;
        padding-right: ${theme.gutterSize.xs / 2}px;

        @media (min-width: ${theme.breakpoints.md}) {
            padding-left: ${theme.gutterSize.md / 2}px;
            padding-right: ${theme.gutterSize.md / 2}px;
        }
    `;
};

export const makeContainerMaxWidths = () => {
  let result = '';

  Object.keys(theme.breakpoints).forEach((index) => {
    result += `
            @media (min-width: ${theme.breakpoints[index]}) {
                max-width: ${theme.containerSize[index]}
            }
        `;
  });

  return result;
};

export const makeRow = () => {
  return `
        display:flex;
        flex: 1 0 100%;
        flex-wrap: wrap;

        margin-left: -${theme.gutterSize.xs / 2}px;
        margin-right: -${theme.gutterSize.xs / 2}px;

        @media (min-width: ${theme.breakpoints.md}) {
            margin-left: -${theme.gutterSize.md / 2}px;
            margin-right: -${theme.gutterSize.md / 2}px;
        }
    `;
};

export const makeColReady = () => {
  return `
        position: relative;
        width: 100%;

        padding-left: ${theme.gutterSize.xs / 2}px;
        padding-right: ${theme.gutterSize.xs / 2}px;

        @media (min-width: ${theme.breakpoints.md}) {
            padding-left: ${theme.gutterSize.md / 2}px;
            padding-right: ${theme.gutterSize.md / 2}px;
        }
    `;
};

export const makeCol = (size = 12, columns = 12) => {
  let colsize = (size / columns) * 100;
  if (Number.isNaN(colsize)) {
    colsize = 100;
  }
  return `
        flex: 0 0 ${colsize}%;
        max-width: ${colsize}%;
    `;
};

export const makeColOffset = (size = 12, columns = 12) => {
  const num = size / columns;
  return `
        margin-left: ${num === 0 ? 0 : num * 100}%;
    `;
};
