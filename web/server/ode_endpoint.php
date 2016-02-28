
<?php
/*
Hearts on home.index don't have to href to php?
    Push defs/syns down,
    Add examples/comments inputs
    List examples/comments

*/

/*
DB design:
    UID / primary key === term? (for now)
    A:
        term1, init_date
        term2, init_date
    B:
        term1, comment_a, comment_date
        term1, comment_b, comment_date
        term1, comment_c, comment_date
        term2, comment_a, comment_date
        term2, comment_b, comment_date
        term2, comment_c, comment_date

CREATE TABLE terms (word TEXT PRIMARY KEY NOT NULL, date_added DATE NOT NULL DEFAULT CURRENT_DATE);
CREATE TABLE comments (word TEXT, comment_date DATE NOT NULL DEFAULT CURRENT_DATE, comment TEXT);

CREATE TABLE comments (word TEXT, comment TEXT);
ALTER TABLE comments ADD COLUMN example TEXT;

IFF the word is not yet in the terms table, insert it.
Otherwise, don't insert it, but display existing example/comments and prompt user for a new ones.
*/

include("$_SERVER[DOCUMENT_ROOT]/server/config.php");

if ( isset($_REQUEST['term']) && $_REQUEST['term']!=="" ) {
    $word = $_REQUEST["term"];
}

if ( isset($_REQUEST['f']) ) {

    //$the_word = isset($_REQUEST['the_word']) ? $_REQUEST['the_word'] || null;

    switch($_REQUEST['f']) {
        case 'testWordExists':
            testInsert();
        case 'getComments':
            getComments();
        case 'insertComment':
            insertComment();
    }
}


function testInsert() {
include("$_SERVER[DOCUMENT_ROOT]/server/config.php");

    if( isset($_REQUEST['the_word']) ) {

            $the_word=$_REQUEST['the_word'];
            $dbh = new PDO("pgsql:host='$HOST';dbname=$DB_NAME", $USER, $PASSWORD);

        try {

            $sql = "SELECT COUNT(*) FROM terms WHERE word = '$the_word'";
            $result = $dbh->query($sql);
                var_dump($result);
            $rows = $result->fetch(PDO::FETCH_NUM);
            var_dump($rows);

            //$row = $result->fetch();
            if ($rows[0] < 1 ) {
                $sql = "INSERT INTO terms (word) VALUES ('$the_word')";
                $inserted = $dbh->exec( $sql );
            }

            getComments();

        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}

function insertComment() {
include("$_SERVER[DOCUMENT_ROOT]/server/config.php");

    if( isset($_REQUEST['the_word']) && isset($_REQUEST['new_ode_example']) && isset($_REQUEST['new_ode_comment'])  ) {

        $dbh = new PDO("pgsql:host='$HOST';dbname=$DB_NAME", $USER, $PASSWORD);

        $the_word=$_REQUEST['the_word'];
        $new_ode_example=$_REQUEST['new_ode_example'];
        $new_ode_comment=$_REQUEST['new_ode_comment'];

        $sql = "INSERT INTO comments (word, example, comment) VALUES ('$the_word', '$new_ode_example, '$new_ode_comment)";
        $inserted = $dbh->exec( $sql );
    }
}

function getComments() {
include("$_SERVER[DOCUMENT_ROOT]/server/config.php");

    if( isset($_REQUEST['the_word']) ) {

        $the_word=$_REQUEST['the_word'];
        $dbh = new PDO("pgsql:host='$HOST';dbname=$DB_NAME", $USER, $PASSWORD);


        $sql = "SELECT word, example, comment FROM comments WHERE word = '$the_word'";

        $result = $dbh->query($sql);
        /*while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "<tr>";
            echo "<td>" . $row["word"] . "</td>";
            echo "<td>" . htmlspecialchars($row["example"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["comment"]) . "</td>";
            echo "</tr>";
        }*/

        return json_encode( $result->fetch(PDO::FETCH_ASSOC) );
    }
}


?>

