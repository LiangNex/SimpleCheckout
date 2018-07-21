/**
 *
 * @author suliang
 * @date 2018/7/20
 */
const Html = ({body, styles, title}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Html;