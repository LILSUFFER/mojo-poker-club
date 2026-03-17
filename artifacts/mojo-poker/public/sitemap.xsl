<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sitemap xhtml">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Sitemap — MOJO Poker Club</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #0a0a0a;
          color: #e0e0e0;
          min-height: 100vh;
          padding: 40px 20px;
        }

        .wrapper {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .logo {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
        }
        .logo span { color: rgba(255,255,255,0.35); }
        .badge {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 20px;
        }

        /* Stats */
        .stats {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .stat {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 14px 20px;
          flex: 1;
          min-width: 140px;
        }
        .stat-value {
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Table */
        .table-wrap {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          overflow: hidden;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        thead tr {
          background: rgba(255,255,255,0.05);
        }
        thead th {
          padding: 12px 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.35);
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        tbody tr {
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.15s;
        }
        tbody tr:last-child { border-bottom: none; }
        tbody tr:hover { background: rgba(255,255,255,0.03); }
        tbody td {
          padding: 13px 20px;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          vertical-align: middle;
        }
        td.url a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          word-break: break-all;
        }
        td.url a:hover { color: #fff; text-decoration: underline; }
        td.center { text-align: center; }

        .pill {
          display: inline-block;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 500;
        }
        .pill-daily   { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6); }
        .pill-weekly  { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.5); }
        .pill-monthly { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.4); }

        .priority-bar {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
        }
        .bar {
          width: 48px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 2px;
          background: rgba(255,255,255,0.3);
        }

        .footer {
          margin-top: 28px;
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          text-align: center;
        }
        .footer a { color: rgba(255,255,255,0.35); text-decoration: none; }
        .footer a:hover { color: rgba(255,255,255,0.6); }
      </style>
    </head>
    <body>
      <div class="wrapper">

        <div class="header">
          <div class="logo">+MOJO+<span> Poker Club</span></div>
          <div class="badge">XML Sitemap</div>
        </div>

        <div class="stats">
          <div class="stat">
            <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
            <div class="stat-label">Total URLs</div>
          </div>
          <div class="stat">
            <div class="stat-value">9</div>
            <div class="stat-label">Pages</div>
          </div>
          <div class="stat">
            <div class="stat-value">14</div>
            <div class="stat-label">Languages</div>
          </div>
          <div class="stat">
            <div class="stat-value">
              <xsl:value-of select="substring(sitemap:urlset/sitemap:url[1]/sitemap:lastmod,1,10)"/>
            </div>
            <div class="stat-label">Last Updated</div>
          </div>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:variable name="pct" select="number(sitemap:priority) * 100"/>
                <tr>
                  <td class="center" style="color:rgba(255,255,255,0.2);font-size:12px;">
                    <xsl:value-of select="position()"/>
                  </td>
                  <td class="url">
                    <a href="{sitemap:loc}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="center" style="white-space:nowrap;font-size:12px;color:rgba(255,255,255,0.35);">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td class="center">
                    <span>
                      <xsl:attribute name="class">pill pill-<xsl:value-of select="sitemap:changefreq"/></xsl:attribute>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </span>
                  </td>
                  <td class="center">
                    <div class="priority-bar">
                      <div class="bar">
                        <div class="bar-fill">
                          <xsl:attribute name="style">width:<xsl:value-of select="$pct"/>%</xsl:attribute>
                        </div>
                      </div>
                      <xsl:value-of select="sitemap:priority"/>
                    </div>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>

        <div class="footer">
          <a href="https://mojopokerclub.com">mojopokerclub.com</a>
          &#160;·&#160; Generated with ♥
        </div>

      </div>
    </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
