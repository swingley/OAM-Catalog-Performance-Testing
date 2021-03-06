  var benchrest = require('bench-rest');
  var flow = {
    main: [
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=1" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=21.86279296875%2C59.603875011292835%2C28.4326171875%2C60.73768583450925" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=80.8428955078125%2C27.410785702577023%2C87.4127197265625%2C29.415675471217877" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=80.255126953125%2C26.868180902512403%2C86.824951171875%2C28.8831596093235" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=79.1949462890625%2C26.35742006833118%2C85.7647705078125%2C28.38173504322311" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=79.1949462890625%2C26.35742006833118%2C85.7647705078125%2C28.38173504322311" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=80.419921875%2C26.35742006833118%2C86.98974609375%2C28.38173504322311" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=81.8206787109375%2C27.269278554175017%2C88.39050292968749%2C29.27681632836857" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=83.57299804687499%2C27.491217638277707%2C86.85791015625%2C28.497660832963472" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=85.1279067993164%2C27.650992923984305%2C85.53852081298828%2C27.777126576321354" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=85.23897171020508%2C27.662396535690156%2C85.44427871704102%2C27.725475009233964" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=85.1663589477539%2C27.64278158715313%2C85.57697296142578%2C27.76892472891873" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=85.07503509521484%2C27.656770902565757%2C85.48564910888672%2C27.78289787603372" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=84.90646362304688%2C27.612972297774377%2C85.72769165039062%2C27.865181477805926" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=84.59335327148438%2C27.555764420824236%2C86.23580932617188%2C28.059862287671145" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=84.0179443359375%2C27.464413510962768%2C87.3028564453125%2C28.47110572883182" },
      { "get": "http://oam-catalog-test.herokuapp.com/meta?limit=4000&bbox=83.88885498046875%2C27.012643405861162%2C87.17376708984375%2C28.023500048883022" }
    ]
  };
 
  // if the above flow will be used with the command line runner or 
  // programmatically from a separate file then export it. 
  module.exports = flow;
 
  // There are even more flow options like setup and teardown, see detailed usage 
 
  var runOptions = {
    limit: 1,     // concurrent connections 
    iterations: 10  // number of iterations to perform 
  };
  benchrest(flow, runOptions)
    .on('error', function (err, ctxName) { console.error('Failed in %s with err: ', ctxName, err); })
    .on('end', function (stats, errorCount) {
      console.log('error count: ', errorCount);
      console.log('stats', stats);
    });