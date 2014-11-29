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


function searchLyrics (term) { 
    uri = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=' + encodeURIComponent(term) ; // + '&outputFormat=application/json';

    uri = 'server/proxy.php?url=' + uri;

    $.ajax({
      url: uri,
      type: "GET",
      //dataType: "jsonp",  //For external apis
      dataType: "xml",  //For external apis
      success: function(response) { 
          //var xml = $( $.parseXML(response) );
          console.log(response);
          parseLyricSearch(response, term);
          FOO = response;
          //BAR = xmlToJSON.parseString(FOO);
          //BAR = xmlToJSON.parseXML(FOO);
          //alert("success");
          //parseWebsterSyns( xmlToJSON.parseXML(response) );
      }
    });
}

function test(){
  $.ajax({
    url: 'http://api.chartlyrics.com/apiv1.asmx/GetLyric?lyricId=131299&lyricCheckSum=76a96b8a8622fa2ea168fa9e1890e296',
    success: function(response) {
      console.log(response);
    }
  })
}

function getLyrics (a,b, term) { 
    uri = 'http://api.chartlyrics.com/apiv1.asmx/GetLyric';
    uri = 'server/proxy_params.php?url=' + uri;

    $.ajax({
      // http://api.chartlyrics.com/apiv1.asmx/GetLyric?lyricId=131299&lyricCheckSum=76a96b8a8622fa2ea168fa9e1890e296
      url: uri,
      //type: "POST",
      type: "GET",
      data: { 'lyricId': a, 'lyricCheckSum': b},
      dataType: "xml",  //For external apis
      success: function(response) { 
          blurb = parseLyricGet(response, term);
      }
    });
    return blurb;
}

function parseLyricGet(xml, term) {
    blurb = '';
    //BAR = xml;
    console.log(xml);
    var items = xml.getElementsByTagName('GetLyricResult');
    // one is enough
    item = xml.getElementsByTagName('GetLyricResult')[0].getElementsByTagName("Lyric")[0].innerHTML;
    // only get the words near the term
    var burps = item.split(term);
    before = '...' + burps[0].slice(-9);
    after = burps[1].slice(0,9) + '...';
    blurb = before + term + after;

    console.log(blurb);
    return blurb;
}

var TEST;
function parseLyricSearch(xml, term) {
    var html_str = '';
    //foo
    var items = xml.getElementsByTagName('SearchLyricResult');
    BAR = items;
    //debugger;
    var items_len = items.length; 
    items_len = items_len < 6 ? items_len : 6;
    for (var i = 0; i < items_len; i++) {
      //try {
        LyricChecksum = items[i].getElementsByTagName('LyricChecksum')[0].innerHTML;
        LyricId = items[i].getElementsByTagName('LyricId')[0].innerHTML;
        SongUrl = items[i].getElementsByTagName('SongUrl')[0].innerHTML;
        Artist = items[i].getElementsByTagName('Artist')[0].innerHTML;
        Song = items[i].getElementsByTagName('Song')[0].innerHTML;
        html_str += '<a href="'+SongUrl+'">' + Song + '</a> by ' + Artist + ' <em><span class="lyric-blurb" data-id="'+LyricId+'" data-checksum="'+LyricChecksum+'"></span></em><br>';
      //} catch(e) {console.log(e, i)}
    };
    $('#songs').html(html_str);
        
    $('.lyric-blurb').each(function(){
        lyric = getLyrics( $(this).attr('data-id'), $(this).attr('data-checksum'), term );
        $(this).text(lyric);
    });

}

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