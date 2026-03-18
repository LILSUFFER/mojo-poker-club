<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sm xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap — mojopokerclub.com</title>
        <style>
          body { font-family: -apple-system, sans-serif; padding: 2rem; color: #222; background: #fafafa; }
          h1 { font-size: 1.4rem; margin-bottom: 1rem; }
          table { border-collapse: collapse; width: 100%; font-size: 0.9rem; }
          th { background: #1a1a2e; color: #fff; padding: 0.6rem 1rem; text-align: left; }
          td { padding: 0.5rem 1rem; border-bottom: 1px solid #e0e0e0; }
          tr:hover td { background: #f0f4ff; }
          a { color: #2563eb; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .langs { font-size: 0.75rem; color: #666; }
        </style>
      </head>
      <body>
        <h1>Sitemap — mojopokerclub.com</h1>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Freq</th>
            <th>Priority</th>
            <th>Languages</th>
          </tr>
          <xsl:for-each select="sm:urlset/sm:url">
            <tr>
              <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
              <td><xsl:value-of select="sm:lastmod"/></td>
              <td><xsl:value-of select="sm:changefreq"/></td>
              <td><xsl:value-of select="sm:priority"/></td>
              <td class="langs">
                <xsl:for-each select="xhtml:link[@rel='alternate' and @hreflang != 'x-default']">
                  <xsl:value-of select="@hreflang"/>
                  <xsl:if test="position() != last()"><xsl:text> · </xsl:text></xsl:if>
                </xsl:for-each>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
