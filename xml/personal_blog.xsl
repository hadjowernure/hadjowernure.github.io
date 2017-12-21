<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
<xsl:template name="page-m">
  <fo:simple-page-master master-name="cover"
	margin-top="1.5cm"
	margin-bottom="1.5cm"
	margin-left="2.5cm"
	margin-right="1.5cm">
  </fo:simple-page-master>
</xsl:template>
<xsl:template match="/">
  <html>
  <head>
    <title>Блог</title>
  </head>
  <body>
  <h2>Блог</h2>
  <xsl:for-each select="body/note">
  <section id="note">
  	<a href="personal-blog.html" class="simple-link"><xsl:value-of select="author"/></a><span> <xsl:value-of select="date"/></span>
	<h3><xsl:value-of select="title"/></h3>
	<p><xsl:value-of select="content/text"/></p>
	<p><strong>Tags:</strong><xsl:value-of select="tags"/></p>
  </section>
  </xsl:for-each>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>