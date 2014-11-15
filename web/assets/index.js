var mwUrl = "http://www.dictionaryapi.com/api/v1/references/thesaurus/xml/test?key=ee5e16f0-13f9-4750-b9e8-b4fa8a4f860d";

//mwJSON('taste','thesaurus',mwUrl);

/*<?php

// This function grabs the definition of a word in XML format.
function grab_xml_definition ($word, $ref, $key)
  { $uri = "http://www.dictionaryapi.com/api/v1/references/" . urlencode($ref) . "/xml/" . 
          urlencode($word) . "?key=" . urlencode($key);
    return file_get_contents($uri);
  };

$xdef = grab_xml_definition("test", "thesaurus", "ee5e16f0-13f9-4750-b9e8-b4fa8a4f860d");

?>*/

function mwJSON (word, ref, key)
  { uri = "http://www.dictionaryapi.com/api/v1/references/" + encodeURIComponent(ref) + "/json/" + 
          encodeURIComponent(word) + "?key=" + encodeURIComponent(key);
    //return file_get_contents(uri);
    $.getJSON(uri,function(data) {
      console.log(data);
    });
  };


var baseUrl = "http://api.wordnik.com/v4/word.json/";
var apiKey = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"; //demo key from developer.wordnik.com
var path;

var bht_url = "https://words.bighugelabs.com/api/2/";
var bht_apikey = "eb4e57bb2c34032da68dfeb3a0578b68";
/*
BHT 
https://words.bighugelabs.com/api/2/eb4e57bb2c34032da68dfeb3a0578b68/eager/json
returns:
{"adjective":{"syn":["avid","great","zealous"],"ant":["uneager"],"sim":["anxious","dying","enthusiastic","hot","impatient","overeager","raring"]},"noun":{"syn":["tidal bore","bore","eagre","aegir","tidal current","tidal flow"]}}
*/


var SCHEMAS = {};
/*SCHEMAS.definitions = array of objects
definition would be for i++ result[i].text*/

window.onload = function() {
    document.getElementById("your_word").focus();
    initAutoThesaurus();
    $('#your_word').focus();
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

function getSynPath() {
    //console.log( $('#your_word').val() );
    var word = extractor( $('#your_word').val() );
    //if (word.length < 2) { return null; }
    //console.log( word );
    var res = $('.tt-dataset-foo').find('p')[0];
    //console.log( '.tt-dataset-foo', $(res).html() );
    path = baseUrl + word + "/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=100&api_key=" + apiKey;
    //path = baseUrl + word + "/definitions?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=100&api_key=" + apiKey;
    return path;
}

function getDefPath() {
    //console.log( $('#your_word').val() );
    var word = extractor( $('#your_word').val() );
    //if (word.length < 2) { return null; }
    console.log( 'getDefPath', word );
    var res = $('.tt-dataset-foo').find('p')[0];
    console.log( '.tt-dataset-foo', $(res).html() );
    path = baseUrl + word + "/definitions?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=100&api_key=" + apiKey;
    return path;
}

function extractor(query) {
    var result = /([^ ]+)$/.exec(query);
    if(result && result[1])
        return result[1].trim();
    return '';
}

function initAutoThesaurus() {
    /*http://stackoverflow.com/questions/21710289/how-to-use-typeahead-js-0-10-step-by-step-remote-prefetch-local*/
    var remoteSynHound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      /*prefetch: {
          url: getSynPath(),
      },      
      */remote: {
          url: getSynPath(),
          replace: function () {
              return getSynPath();
          },
          // the json file contains an array of strings, but the Bloodhound
          // suggestion engine expects JavaScript objects so this converts all of
          // those strings
          filter: function(list) {
              if ( typeof list[0] !== "undefined" && list[0].hasOwnProperty('words') ) {      
                arr = list[0].words;
                new_arr = ['{wordnik} '];
                for (var i = 0; i < arr.length; i++) {
                  new_arr.push(' <span class="syn">' + arr[i] + '</span>');
                }

                // put them back together
                new_list = [{"words": new_arr}];
                //console.log(new_list);
                return new_list;
              }
          }
      }
    });

  var remoteBHT_Hound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
/*      prefetch: {
          url: getBHTsynPath(),
          replace: function (response) {
            return getBHTsynPath();
          },
      },      
*/      remote: {
          //url: getDefPath(),
          url: getBHTsynPath()[1],
          replace: function () {
              //return getDefPath();
              return getBHTsynPath()[1];
          },
          filter: function(response) {
              //console.log(response[0]);
              // BHT returns obj with keys for each part of speech
              // each an object with keys ant, sim, syn 
              // each of which is an array
              // for now push all syns into one array?
              
              new_arr = [];
              for (var key in response) {
                  new_arr.push( '<em>' + key + '</em>' );
                  new_arr = new_arr.concat(response[key].syn);
                  new_arr.push( '<br>' );
              }

              var newer_arr = ['<b>{' + getBHTsynPath()[0] + '} </b>']; // [0] is the original word searched
              for (var i = 0; i < new_arr.length; i++) {
                newer_arr.push(' <span class="syn">' + new_arr[i] + ',</span> ');
              }

              new_list = [{"words": newer_arr}];
              //return response;
              return new_list;
          }
        }
    });
     
    remoteSynHound.initialize();
    remoteBHT_Hound.initialize();
     
    /*$('.typeahead').typeahead(null, {
      name: 'foo',
      displayKey: 'words',
      //displayKey: 'text',
      source: remoteSynHound.ttAdapter(),
    }); */ 

    //$('.typeahead').typeahead(null, 
    $('.typeahead').typeahead(
        {
          minLength: 3
        }/*, 
        {
          name: 'foo',
          displayKey: 'words',
          //displayKey: 'text',
          menu: '#idSynonymList',
          //minLength: 4,
          source: remoteSynHound.ttAdapter(),

        }*/,
        {
          name: 'foo2',
          displayKey: 'words',
          menu: '#idDefList',
          source: remoteBHT_Hound.ttAdapter(),
          delimiter: '!'
        }
    );
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