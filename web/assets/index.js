var mw_url = "http://www.dictionaryapi.com/api/v1/references/thesaurus/xml/test?key=ee5e16f0-13f9-4750-b9e8-b4fa8a4f860d";

var mw_apikey = 'ee5e16f0-13f9-4750-b9e8-b4fa8a4f860d';

var wordnik_url = "http://api.wordnik.com/v4/word.json/";
var wordnik_apiKey = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"; //demo key from developer.wordnik.com

var FOO, BAR;

function parseWebsterSyns (json_data) {
      var terms, html_str='';
      var num, def, syns_str, syns_arr;
      FOO = json_data;

      /*new_arr = [];
      console.log(response);
      FOO = response;
      xml = $.parseXML(response);
      BAR = $.parseXML(response);
*/
      /* entry
          term
              hw ("magic")
          fl (part of speech)
          sens
              sn (#1)
              mc (definition 1)
              vi (example sentence)
              syn!
              */
      //var entries = $(xml).find('entry');
      console.log('json_data',json_data);

      var entry_arr = json_data.entry_list[0].entry;

      for (var i = 0; i < entry_arr.length; i++) {
          word    = entry_arr[i].term[0].hw[0]['_text'];
          PoS     = entry_arr[i].fl[0]['_text'];
          
          //html_str += '<br><span class="opt-able" onclick="toggleOpts(\''+word+'\');"><strong>' + word + '</strong></span> (<em>'+ PoS +'</em>)  <br>';
          html_str += '<br><span class="opt-able"><strong>' + word + '</strong></span> (<em>'+ PoS +'</em>)  <br>';
          
          senses  = entry_arr[i].sens;
          for (var j = 0; j < senses.length; j++) {
              num = senses[j].sn ? senses[j].sn[0]['_text'] + '. ' : '';
              def = senses[j].mc ? senses[j].mc[0]['_text'] : '';
              
              if (senses[j].syn) {
                  syns_str = senses[j].syn[0]['_text'];
                  syns_arr = syns_str.split(', ');
                  for (var k = 0; k < syns_arr.length; k++) {
                      syns_arr[k] = '<span class="opt-able">' + syns_arr[k] + '</span>';
                  };
                  syns_str = syns_arr.join(', ');

                  html_str += num + def + '<br>'; 
                  html_str += '&nbsp;&nbsp;&nbsp;&nbsp;' + syns_str + '<br>'; 
              }
          };

      }

      console.log('html_str',html_str);

      $('#syns').html( html_str);

      $('.opt-able').click(function(){
          var temp = $(this).text();
          toggleOpts(temp);
      })

      /*var entries = $(json_data).find('entry');

      for (var i = 0; i < entries.length; i++) {
        
        terms = $(entries[i]).find('term');
        for (var j = 0; j < terms.length; j++) {
          word = $(terms[j]).find('hw'); 
          PoS = $(terms[j]).find('fl'); 
          
          html_str += '<br><span class="opt-able" onclick="toggleOpts();"><strong>' + word + '</strong></span> (<em>'+ PoS +'</em>)  ';
          

          senses = $(terms[j]).find('sens'); 
          for (var k = 0; k < senses.length; k++) {
            html_str += senses[k].find('sn') + '. ' + senses[k].find('mc') + '<br>'; 
            html_str += senses[k].find('syn') + '<br>'; 
          }
        }

      }*/
}


function getWebsterSyns (word, ref, key) { 
    uri = "http://www.dictionaryapi.com/api/v1/references/thesaurus/xml/" + 
          encodeURIComponent(word) + "?key=" + encodeURIComponent(mw_apikey) ; // + '&outputFormat=application/json';

    uri = 'server/proxy.php?url=' + uri;

    $.ajax({
      url: uri,
      type: "GET",
      //dataType: "jsonp",  //For external apis
      dataType: "xml",  //For external apis
      success: function(response) { 
          //var xml = $( $.parseXML(response) );
          console.log(response);
          //FOO = response;
          //BAR = xmlToJSON.parseString(FOO);
          //BAR = xmlToJSON.parseXML(FOO);
          //alert("success");
          parseWebsterSyns( xmlToJSON.parseXML(response) );
      }
    });
}

function getWebsterDefinitionJSON (word, ref, key)
  { uri = "http://www.dictionaryapi.com/api/v1/references/" + encodeURIComponent(ref) + "/json/" +encodeURIComponent(word) + "?key=" + encodeURIComponent(key);
    //return file_get_contents(uri);
    $.getJSON(uri,function(data) {
      console.log(data);
    });
  }


var path;

var bht_url = "https://words.bighugelabs.com/api/2/";
var bht_apikey = "eb4e57bb2c34032da68dfeb3a0578b68";


var SCHEMAS = {};
/*SCHEMAS.definitions = array of objects
definition would be for i++ result[i].text*/

window.onload = function() {
    document.getElementById("your_word").focus();
    //initAutoThesaurus();
    $('#your_word').focus();

    $(window).keypress(function(e) {
      if (e.keyCode == 0 || e.keyCode == 32 || e.keyCode == 13) {
        //console.log('Space pressed, or Enter pressed');
        var word = extractor( $('#your_word').val() );
        //getAndParseBHT();
        getWebsterSyns(word, 'foo', mw_apikey);
      }
    });

};

//$(function() { $('#your_word').focus(); });

function getBHTsynPath() {
    //console.log( $('#your_word').val() );
    var word = extractor( $('#your_word').val() );
    //if (word.length < 2) { return null; }
    //console.log( word );
    var res = $('.tt-dataset-foo2').find('p')[0];
    //console.log( '.tt-dataset-foo', $(res).html() );
    //path = bht_url + bht_apikey + '/' + word + '/json?callback=?';
    path = bht_url + bht_apikey + '/' + word + '/json?callback=?';
    //path = baseUrl + word + "/definitions?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=100&api_key=" + apiKey;

    word_path_arr = [word, path];
    //return path;
    return word_path_arr;
}

function getAndParseBHT() {

  var word_path_arr = getBHTsynPath();

  $.getJSON(word_path_arr[1],word_path_arr[0],function(response) {
      console.log(response);
      console.log(word_path_arr[0]);
              //console.log(response[0]);
              // BHT returns obj with keys for each part of speech
              // each an object with keys ant, sim, syn 
              // each of which is an array
              // for now push all syns into one array?    
      new_arr = [];
      html_str = '<span class="opt-able" onclick="toggleOpts();"><b>' + word_path_arr[0] + '</b></span>';
      for (var PoS in response) {
          html_str += '<br><em>' + PoS + '</em>: ';
          for (var syn_word in response[PoS].syn) {
            new_arr.push('<span class="syn">' + response[PoS].syn[syn_word] + '</span>');
          }
          //html_str += new_arr.concat(', ');
          html_str += new_arr.join(', ');
      }

      $('#syns2').html( html_str);

/*
      var newer_arr = ['<b>' + word_path_arr[0] + ': </b>']; // [0] is the original word searched
      for (var i = 0; i < new_arr.length; i++) {
        newer_arr.push(' <span class="syn">' + new_arr[i] + ',</span> ');
      }

      new_list = [{"words": newer_arr}];
      //return response;
      console.log(new_list);
      
      $('#syns').html( new_list[0]['words'] );
      */

      //return new_list;
  
  });

}


function extractor(query) {
    var result = /([^ ]+)$/.exec(query);
    if(result && result[1])
        return result[1].trim();
    return '';
}

$(document).on("click.tt", ".tt-suggestion", function(e) {
    /*console.log('click.tt, .tt-suggestion', $(this).html() );
    console.log('click.tt, .tt-suggestion', $(this) );
    console.log('.paper html', $('.paper').html() );
    *///$(this).show();
    e.stopPropagation();
    e.preventDefault();
});

// jQuery19109778877520002425_1414967930149({"noun":{"syn":["accident","chance event","fortuity"]},"verb":{"syn":["happen","go on","pass off","occur","pass","fall out","come about","take place"]}});



// Changes XML to JSON
function xmlToJson(xml) {
  
  // Create the return object
  var obj = {};

  if (xml.nodeType == 1) { // element
    // do attributes
    if (xml.attributes.length > 0) {
    obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) { // text
    obj = xml.nodeValue;
  }

  // do children
  if (xml.hasChildNodes()) {
    for(var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof(obj[nodeName]) == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof(obj[nodeName].push) == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
};


var OPT_SHOWN = false;


function initWordOpts() {
    // might want to click multiple (heart, upvote, use, ode)
    /*function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }   */ 
    $(".opt-able").click(function(){
        var clicked_word = $(this).text();
        console.log(clicked_word);


        $(this).parent().css( {position:"absolute", top:event.pageY, left: event.pageX});

        if (OPT_SHOWN == false){
            //$("#popUp").fadeIn();
            $("#word-opts").fadeIn(function(){OPT_SHOWN = true;});
            $('#opt-word').html( clicked_word );
        }
        if (OPT_SHOWN == true){
            //$("#popUp").fadeOut();
            $("#word-opts").fadeOut(function(){OPT_SHOWN=false});
        }
    });    

    $('#opt-close').click(function(){
        $("#word-opts").fadeOut(function(){OPT_SHOWN=false});
    });
}


function toggleOpts(clicked_word) {
    var top_y = event.pageY - 33;
    var left_x = event.pageX + 5;
    $("#word-opts").parent().css( {position:"absolute", top: top_y, left: left_x});

    $('#opt-word').html( clicked_word );

    $("#word-opts").fadeIn(function(){
        OPT_SHOWN=true;
        console.log('fadeIn');
    });

    $('#opt-close').click(function(){
        console.log('opt-close');
        $("#word-opts").fadeOut(function(){OPT_SHOWN=false});
    });
}
/*
1. search for songs which have lyrics which have the word/term in them
2. 
3. get the actual lyrics and write a snip of them to the span
*/
function searchLyrics(term) { 
    uri = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=' + encodeURIComponent(term) ; // + '&outputFormat=application/json';

    uri = 'server/proxy.php?url=' + uri;

    $.ajax({
      url: uri,
      type: "GET",
      //dataType: "jsonp",  //For external apis
      dataType: "xml",  //For external apis
      success: function(response) { 
          console.log(response);
          parseLyricSearch(response, term);
      },
      complete: function() {
          /*$('.lyric-blurb').hover(function(){
              // console.log('blurb',term);
              var el = $(this);
              writeLyrics( el, term );
          });*/
      }
    });
}

function parseLyricSearch(xml, term) {
    var html_str = '';
    console.log(xml);
    //foo
    var items = xml.getElementsByTagName('SearchLyricResult');
    BAR = items;
    //debugger;
    var items_len = items.length; 
    items_len = items_len < 20 ? items_len : 20;
    for (var i = 0; i < items_len; i++) {
      //try {
        LyricChecksum = items[i].getElementsByTagName('LyricChecksum')[0].innerHTML;
        LyricId = items[i].getElementsByTagName('LyricId')[0].innerHTML;
        SongUrl = items[i].getElementsByTagName('SongUrl')[0].innerHTML;
        Artist = items[i].getElementsByTagName('Artist')[0].innerHTML;
        Song = items[i].getElementsByTagName('Song')[0].innerHTML;

        html_str += '<a target="_blank" href="'+SongUrl+'">' + Song + '</a> by ' + Artist + ' <em><span class="lyric-blurb" data-artist="'+Artist+'" data-song="'+Song+'" data-id="'+LyricId+'" data-checksum="'+LyricChecksum+'"> </span></em><br>';
      //} catch(e) {console.log(e, i)}
    };
    $('#songs').html(html_str);
    /*    
    $('.lyric-blurb').each(function(){
        writeLyrics( $(this), term );
    });
    */

}


//function getLyrics (a,b, term) { 
function writeLyrics (el, term) { 
    var uri = 'http://api.chartlyrics.com/apiv1.asmx/GetLyric';

    //uri = 'http://developer.echonest.com/api/v4/song/search?api_key=FILDTEOIK2HBORODV&format=json&artist=radiohead&title=creep&bucket=id:lyricfind-US&limit=true&bucket=tracks';

    var a = encodeURIComponent($(el).attr('data-id'));
    var b = encodeURIComponent($(el).attr('data-checksum'));
    //var a = encodeURIComponent($(el).attr('data-artist'));
    //var b = encodeURIComponent($(el).attr('data-song'));
    //jhnklly@gmail.com apikey
    //http://developer.echonest.com/api/v4/song/search?api_key=SQMIYFB8AOENSOG4T&format=json&artist=radiohead&title=creep&bucket=id:lyricfind-US&limit=true&bucket=tracks&results=10
    
    //uri = 'http://developer.echonest.com/api/v4/song/search?api_key=SQMIYFB8AOENSOG4T&format=json&artist='+a+'&title='+b+'&bucket=id:lyricfind-US&limit=true&bucket=tracks';

    uri = 'server/proxy_params.php?url=' + uri;
    var blurb = '';

    console.log('el',el);

    //var a = $(el).attr('data-id');
    //var b = $(el).attr('data-checksum');

    


    //console.log('el',el);
    console.log('a',a);
    console.log('b',b);

    $.ajax({
      // http://api.chartlyrics.com/apiv1.asmx/GetLyric?lyricId=131299&lyricCheckSum=76a96b8a8622fa2ea168fa9e1890e296
      url: uri,
      type: "POST",
      //type: "GET",
      data: { 'lyricId': a, 'lyricCheckSum': b},
      //data: { 'artist': a, 'title': b, 'bucket': 'id:lyricfind-US', 'limit': 'true', 'bucket': 'tracks'},
      dataType: "xml",  //For external apis
      success: function(response) { 
/*          var xml = response;
          console.log('xml', xml);
          var items = xml.getElementsByTagName('GetLyricResult');
          // one is enough
          item = xml.getElementsByTagName('GetLyricResult')[0].getElementsByTagName("Lyric")[0].innerHTML;*/

          console.log(response);

          // only get the words near the term
          var burps = item.split(term);
          //before = '...' + burps[0].slice(-29);
          // arr of the words before term
          before = burps[0].split(' ');
          // if len < 5 use the all of them: otherwise just 5 of them
          if (before.length < 5) {
              before = before.join(' ');
          } else {
              //z = Math.max(before.length - 5, 1);
              before = before.slice(5);
              before = before.join(' ');
          }
          before = '...' + before;

          after = burps[1].split(' ');
          // if len < 5 use the all of them: otherwise just 5 of them
          if (after.length < 5) {
              after = after.join(' ');
          } else {
              //z = Math.max(before.length - 5, 1);
              after = after.shift(5);
              after = after.join(' ');
          }
          after = '...' + after;

          blurb = before + term + after;

          console.log('b418', blurb);

          $(el).html(lyric);
      },
      error: function(err) {
          console.log('err',err.responseText);
      }
    });
}

/*function parseLyricGet(xml, term) {
    return blurb;
}*/


// arbitrage ("free money")

/*
<SearchLyricResult>
<TrackId>0</TrackId>
<LyricChecksum>76a96b8a8622fa2ea168fa9e1890e296</LyricChecksum>
<LyricId>131299</LyricId>
<SongUrl>
http://www.chartlyrics.com/SROGu_IlkE6rOL3iDvmEng/Our+Love.aspx
</SongUrl>
<ArtistUrl>
http://www.chartlyrics.com/SROGu_IlkE6rOL3iDvmEng.aspx
</ArtistUrl>
<Artist>Rhett Miller</Artist>
<Song>Our Love</Song>
<SongRank>3</SongRank>
</SearchLyricResult>

*/