<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap — MOJO Poker Club</title>
        <style>
          body { font-family: Arial, sans-serif; font-size: 14px; color: #333; margin: 0; padding: 24px; background: #f9f9f9; }
          h1 { font-size: 20px; margin-bottom: 4px; }
          p { color: #666; font-size: 13px; margin-bottom: 16px; }
          table { border-collapse: collapse; width: 100%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.1); }
          th { background: #1a1a2e; color: #fff; text-align: left; padding: 10px 14px; font-size: 13px; }
          td { padding: 8px 14px; border-bottom: 1px solid #eee; font-size: 13px; }
          tr:hover td { background: #f5f5f5; }
          a { color: #0066cc; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>MOJO Poker Club — Sitemap</h1>
        <p><xsl:value-of select="count(sm:urlset/sm:url)"/> URLs indexed</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Freq</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sm:urlset/sm:url">
            <tr>
              <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
              <td><xsl:value-of select="sm:lastmod"/></td>
              <td><xsl:value-of select="sm:changefreq"/></td>
              <td><xsl:value-of select="sm:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
