/*http://stats.nba.com/player/#!/201939/gamelogs/?Season=2016-17&SeasonType=Regular%20Season&PerMode=PerGame

var url = http://stats.nba.com/stats/playergamelog?LeagueID=00&PerMode=PerGame&PlayerID=201939&Season=2016-17&SeasonType=Regular+Season
For each stat:
    collect for each game
        accumulate for season
        compute average/snapshot
MIN
PTS
FGM
FGA
FG3M
FG3A
FTM
FTA

*/

var A = {};
A.stat_list = ['MIN', 'PTS', 'FGM', 'FGA', 'FG3M', 'FG3A', 'FTM', 'FTA'];
A.players = [
  {
    "color1": "#FDB927",
    "color2": "#006BB6",
    "firstName": "Stephen",
    "lastName": "Curry",
    "playerId": 201939
  },
  {
    "color1": "#860038",
    "color2": "#FDBB30",
    "firstName": "LeBron",
    "lastName": "James",
    "playerId": 2544
  },
  {
    "color1": "#007DC3",
    "color2": "#F05133",
    "firstName": "Russell",
    "lastName": "Westbrook",
    "playerId": 201566
  },
  {
    "color1": "#CE1141",
    "color2": "#FDB927",
    "firstName": "James",
    "lastName": "Harden",
    "playerId": 201935
  },
  {
    "color2": "#006BB6",
    "color1": "#ED174C",
    "firstName": "Blake",
    "lastName": "Griffin",
    "playerId": 201933
  },
  {
    "color1": "#FDB927",
    "color2": "#006BB6",
    "firstName": "Kevin",
    "lastName": "Durant",
    "playerId": 201142
  },
  /*{
    "color1": "#00275D",
    "color2": "#FFC633",
    "firstName": "Paul",
    "lastName": "George",
    "playerId": 202331
  },*/
  {
    "color1": "#724C9F",
    "color2": "#8E9090",
    "firstName": "DeMarcus",
    "lastName": "Cousins",
    "playerId": 202326
  },
  {
    "color1": "#BAC3C9",
    "color2": "#061922",
    "firstName": "Kawhi",
    "lastName": "Leonard",
    "playerId": 202695
  },
  {
    "color1": "#E03A3E",
    "color2": "#061922",
    "firstName": "Damian",
    "lastName": "Lillard",
    "playerId": 203081
  },
  {
    "color1": "#999999",
    "color2": "#333333",
    "firstName": "Anthony",
    "lastName": "Davis",
    "playerId": 203076
  },
  {
    "color1": "#999999",
    "color2": "#333333",
    "firstName": "DeMar",
    "lastName": "DeRozan",
    "playerId": 201942
  }
];
var stat;

// shot distance bins
var cornerThree = 22;
var topArc = 23.75;
var smallest = 25;
var largest = 45;
var bin_size = 1;
var number_of_bins = (largest-smallest)/bin_size;

A.shot_chart_dict = {};
A.offset1 = 60;

/*
    Corner 3: 22'
    Top of arc: 23.75'
    Area of interest: > 25' ?
    Half Court: 47 - 4 - 1.5/2 = 42.25
*/

//var proxy_url = 'http://localhost:1337/'; // npm install -g corsproxy
var proxy_url = '../../server/proxy.php?url='; // npm install -g corsproxy

var parseDate = d3.time.format("%b %d, %Y").parse; //"OCT 28, 2015"
/*
var margin = {top: 40, right: 40, bottom: 40, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
*/
//
// var w = 1800;
var w = 1000;
var h = 485;
var padding = 90;
var margin = {top: 30, left: 50, bottom: 50, right: 90}

// display date format
var  date_format = d3.time.format("%d %b");

var x_domain = [ parseDate('OCT 24, 2017'), new Date ];

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2017,09,24); // january = 0, dec = 11
var secondDate = new Date(2018,03,13);
var today = new Date();

var reg_season_length = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
var days_thr_season = Math.round(Math.abs((firstDate.getTime() - today.getTime())/(oneDay)));
var percent_thr_season = parseInt(100*days_thr_season / reg_season_length);
d3.select('#status').text('PPG through ' + percent_thr_season + '% of season');

var xScale = d3.time.scale()
.domain( x_domain )
//.range([padding, w - padding * 2]);
.range([margin.left, w - margin.left - margin.right]);

var yScale = d3.scale.linear()
//.domain([15, 40])
.domain([20, 35])
//.range([h - padding, padding]);
.range([h - margin.bottom, margin.top]);


//Define X axis
var xAxis = d3.svg.axis()
.scale(xScale)
.orient("bottom")
//.ticks(5)
.ticks(d3.time.days(x_domain[0], x_domain[1]).length)
.tickFormat(date_format);

//Define Y axis
var yAxis = d3.svg.axis()
.scale(yScale)
.orient("left")
.ticks(5);

//


//var svg = d3.select(".inner").append("svg")
var svg = d3.select("#points").append("svg")
    .attr("id", "chart")
    .attr("width", w)
    .attr("height", h)
  .append("g")
  ;


function make_y_axis() {
    return d3.svg.axis()
        .scale(yScale)
         .orient("left")
         .ticks(5)
}

svg.append("g")
        .attr("class", "grid")
        .call(make_y_axis()
            .tickSize(-w + margin.left, 0, 0)
            .tickFormat("")
        )


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (h - margin.bottom) + ")")
      .call(xAxis)
      .selectAll("text")
         .style("text-anchor", "end")
         .attr("dx", "-.8em")
         .attr("dy", ".15em")
         .attr("transform", "rotate(-65)");

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(yAxis)
    .append("text")
      .style("text-anchor", "end")
      .text("PTS");


// Chart 2 (shot distances)


var chart = d3.select("#chart");
var hiddenClickTarget = chart
    .append('rect')
    .attr('class', 'hiddenClickTarget')
    .attr("fill", 'none')
    .attr("width", w)
    .attr("height", h)
    .attr("pointer-events", 'all')
    ;



for (var i = 0; i < A.players.length; i++) {
    chartPlayerStats(A.players[i].lastName, A.players[i].playerId, A.players[i].color1, A.players[i].color2);
}

A.shot_data = { 201939: [], 2544: [], 201142: [] };
A.chartShots = {};


function chartPlayerStats(name, pid, color1, color2) {
    A[pid] = {
        season_stat_obj: {}
    };

    for (var i = 0; i < A.stat_list.length; i++) {
        stat = A.stat_list[i];
        A[pid].season_stat_obj[stat+'_running'] = 0;
        A[pid].season_stat_obj[stat+'_ave'] = 0;
    }

    var url = 'http://stats.nba.com/stats/playergamelog?LeagueID=00&PerMode=PerGame&PlayerID='+ pid +'&Season=2017-18&SeasonType=Regular+Season';
    // url = encodeURIComponent(url);

    A.data = [];
    // d3.json(proxy_url+url, function (json) {
    d3.json(url, function (json) {
        var chartData = [];
        A.header = json.resultSets[0].headers;
        games_data = json.resultSets[0].rowSet.reverse();
        A.data.push(games_data);

        var pts_idx = A.header.indexOf('PTS');
        var match_idx = A.header.indexOf('MATCHUP');
        var date_idx = A.header.indexOf('GAME_DATE');
        var game_id_idx = A.header.indexOf('GAME_ID');

        //A.x_vals = [];
        //A.y_vals = [];
        //var temp_stat_obj = {};
        var temp;

        for (var i = 0; i < games_data.length; i++) {
            var temp_obj = {};

            temp = games_data[i][match_idx];
            temp = temp.substring(4);


            temp_stat_obj = {
                pid: pid,
                name: name,
                color1: color1,
                color2: color2,
                game: temp,
                GAME_DATE: games_data[i][date_idx]
            };
            for (var j = 0; j < A.stat_list.length; j++) {
                stat = A.stat_list[j];
                stat_idx = A.header.indexOf(stat);
                temp_stat_obj[stat] = games_data[i][stat_idx];

                A[pid].season_stat_obj[stat+'_running'] += games_data[i][stat_idx];
                A[pid].season_stat_obj[stat+'_ave'] = A[pid].season_stat_obj[stat+'_running'] / (i+1);
                A[pid].season_stat_obj[stat+'_ave'] = Math.round( A[pid].season_stat_obj[stat+'_ave'] * 10 ) / 10 ;

                temp_stat_obj[stat+'_running'] = A[pid].season_stat_obj[stat+'_running'];
                temp_stat_obj[stat+'_ave'] = A[pid].season_stat_obj[stat+'_ave'];
            }

            A[pid].season_stat_obj['pp48_ave'] = 48 * A[pid].season_stat_obj['PTS_running'] / A[pid].season_stat_obj['MIN_running'];
            A[pid].season_stat_obj['pp48_ave'] = Math.round( A[pid].season_stat_obj['pp48_ave'] * 10 ) / 10 ;
            temp_stat_obj['pp48_ave'] = A[pid].season_stat_obj['pp48_ave'];


            chartData.push(temp_stat_obj);

        }

    var data = chartData;


    var g = chart
        .append("g")
        .attr("id", pid + "_path")
        ;
/*
     var line_faded = d3.svg.line()
        .x(function(d, i) {
          return xScale( parseDate(d.GAME_DATE)); })
        .y(function(d, i) {
            return yScale(d.pp48_ave);
        });

*/
     var line = d3.svg.line()
        .x(function(d, i) {
          return xScale( parseDate(d.GAME_DATE)); })
        .y(function(d, i) {
            return yScale(d.PTS_ave);
        });



    g.append("path")
          .datum(data)
          .attr("class", "line2")
          .style("stroke", function(d) {
            return d[0].color2;
          })
          .attr("d", line);

    g.append("path")
          .datum(data)
          .attr("class", "line1")
          .style("stroke", function(d) {
            return d[0].color1;
          })
          .attr("d", line)
          ;


    g.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
        .attr("cx", function(d) {return xScale( parseDate(d.GAME_DATE)); })
        .attr("cy", function(d) {return yScale(d.PTS_ave); })
        .attr("r",7)
        .attr("class","data-dot");


    d3.selectAll(".hiddenClickTarget")
        .each(function(d) {
            addHammerCloser(this, d);
        });

    g.selectAll("circle")
        .each(function(d) {
            addHammerEventListener(this, d);
        });

    });

} // end function chartPlayerStats


function addHammerCloser(that, d){
    Hammer(that).on("tap", function(event){
        d3.selectAll("div#tip").remove();
    });
}

function addHammerEventListener(that, d){
    Hammer(that).on("tap", function(event){
        event.srcEvent.stopPropagation();
        d3.selectAll("div#tip").remove();
    /*
        A.evnt = event;
        console.log(event);
        alert(JSON.stringify(event));
    */
        console.log(d3.select(that).attr('cx') );
        var tap_x = d3.select(that).attr('cx') || event.srcEvent.clientX || event.originalEvent.gesture.center.x || event.center.x || 0;
        var tap_y = d3.select(that).attr('cy') || event.srcEvent.clientY || event.originalEvent.gesture.center.y || event.center.y || 20;
        //var text_grp = d3.select("#chart")
        var div_text = d3.select('#points')
            .append('div')
            .attr("id", "tip")
            //.append("text")
            .text(d.PTS_ave + " " + d.name + " (" + d.MIN_ave + "mpg) " +" | " + d.PTS + "pts " + d.game  )
            //.attr("x", xScale( parseDate(d.GAME_DATE)) - 10)
            //.attr("y", yScale(d.PTS_ave) - 1)
            .style("top", (tap_y - 16) + "px")
            .style("left", (tap_x - 30) + "px")
            //.attr("paint-order", "stroke")
            //.attr("id", d.line_id)
            ;
    });
}

function addHammerEventListener2(that, d){
    Hammer(that).on("tap", function(event){
      console.log('HAMMER 2', tap_x, tap_y);
        event.srcEvent.stopPropagation();
        d3.selectAll("div#tip").remove();
    /*
        A.evnt = event;
        console.log(event);
        alert(JSON.stringify(event));
    */
        console.log(d3.select(that).attr('cx') );
        var tap_x = d3.select(that).attr('cx') || event.srcEvent.clientX || event.originalEvent.gesture.center.x || event.center.x || 0;
        var tap_y = d3.select(that).attr('cy') || event.srcEvent.clientY || event.originalEvent.gesture.center.y || event.center.y || 20;
        //var text_grp = d3.select("#chart")
        var div_text = d3.select('body')
            .append('div')
            .attr("id", "tip")
            //.append("text")
            .text(d.distance + ": " + d.made + "/" + d.attempted)
            //.attr("x", xScale( parseDate(d.GAME_DATE)) - 10)
            //.attr("y", yScale(d.PTS_ave) - 1)
            .style("top", (tap_y - 16) + "px")
            .style("left", (tap_x - 30) + "px")
            //.attr("paint-order", "stroke")
            //.attr("id", d.line_id)
            ;
    });
}

function type(d) {
  d.frequency = +d.frequency;
  return d;
}
