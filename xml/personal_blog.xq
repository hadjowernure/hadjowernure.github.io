doc("personal_blog.xml")/body/note/date[year=2017]

doc("personal_blog.xml")/body/note/author

for $x in oc("personal_blog.xml")/body/note
where $x/year>2000
order by $x/title
return $x/author and $x/author