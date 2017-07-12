var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
"article-one":{
  title:'Avinash 1',
  heading:'Article One',
  date:'11 july 2017',
  content:` <p>
   Your Company achieved a turnover of Rs.43,337 crore during the
 Financial Year 2015-16, which is lower by 14% over previous year,
 mainly due to decrease in Net Sales Realisation of Saleable Steel of 5
 Integrated Steel Plants by about 20%. The prices of steel products kept
 falling throughout the year due to fall in Global Steel Prices leading
 to predatory imports from China, Japan, Korea, etc. However, there has
 been an increase in price realisation after imposition of Minimum
 Import Price(MIP) w.e.f. 5th February, 2016. The loss after tax of your
 Company for the Financial Year 2015-16 was Rs.4,137 crore compared to
 net profit after tax of Rs. 2,093 crore in the previous Financial Year.<br>
 <br>
oal, higher salaries
 & wages, higher repairs & maintenance expenditure, higher interest
 charges and reduction in interest earnings on term deposits, higher
 depreciation due to capitalisation of new facilities and
 non-availability of gain on sale of investment in Bokaro Jaypee Cement
 Limited considered in the previous financial year. However, the adverse
 factors have been partially offset by higher sales volume and lower
 imported & indigenous coal prices, reduction in coke rate, reduction in
 demurrage expenses, reduction in price of ferro alloys, etc.<br>
</p>
`
},
"article-two":{ 
 title:'Avinash 2',
 heading:'Article Two',
 date:'19 July 2017',
 content:` <p>
   Your Company achieved a turnover of Rs.43,337 crore during the
 Financial Year 2015-16, which is lower by 14% over previous year,
 mainly due to decrease in Net Sales Realisation of Saleable Steel of 5
 Integrated Steel Plants by about 20%. The prices of steel products kept
 falling throughout the year due to fall in Global Steel Prices leading
 to predatory imports from China, Japan, Korea, etc. However, there has
 been an increase in price realisation after imposition of Minimum
 Import Price(MIP) w.e.f. 5th February, 2016. The loss after tax of your
 Company for the Financial Year 2015-16 was Rs.4,137 crore compared to
 net profit after tax of Rs. 2,093 </p>
`,
},
"article-three":
{
   title:'Avinash 3',
   heading:'Article One',
   date:'17 July 2017',
   content:` <p>
   Your Company achieved a turnover of Rs.43,337 crore during the
 Financial Year 2015-16, which is lower by 14% over previous year,
 mainly due to decrease in Net Sales Realisation of Saleable Steel of 5
 Integrated Steel Plants by about 20%. The prices of steel products kept
 falling throughout the year due to fall in Global Steel Prices leading
 to predatory imports from China, Japan, Korea, etc. However, there has
 been an increase in price realisation after imposition of Minimum
 Import Price(MIP) w.e.f. 5th February, 2016. The loss after tax of your
 Company for the Financial Year 2015-16 was Rs.4,137 crore compared to
 net profit after tax of Rs. 2,093 crore in the previous Financial Year.<br>
 
</p>
`
}

};
function createTemplate(a)
{
  var title =a.title;
  var heading = a.heading;
  var date = a.date;
  var content=a.content;
  var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
  
    <body>
        <div class = "container">
        <div>
        <a href = "/">Home</a>
        </div>
        <hr>
        <h2>${heading}</h2>
        <div>
          ${date}  
        </div>
        <div class="imgrow">
 <img src="http://www.safalniveshak.com/wp-content/uploads/2013/03/SAIL.png" width="200" height="200"/>
      <img src="https://www.stableinvestor.com/wp-content/uploads/2016/07/94c4d-sailsalesprofitstrend.jpg" width="200"/>
  

</div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
  `;
  return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName
res.send(createTemplate(articles[articleName]))
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
