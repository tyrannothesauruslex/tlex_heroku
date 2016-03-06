<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8" />
    <title>TyrannoThesaurusLex</title>
    <meta name='viewport' content='initial-scale=1,user-scalable=yes' />

        <link rel="stylesheet" href="../assets/normalize.css">
        <link rel="stylesheet" href="../assets/style.css">
        <!-- <link href='assets/google_fonts.css' rel='stylesheet' type='text/css'> -->
        <!-- <link href='https://fonts.googleapis.com/css?family=Satisfy' rel='stylesheet' type='text/css'> -->
        <link href="../assets/font-awesome-4-2-0.min.css" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Satisfy' rel='stylesheet' type='text/css'>

        <script src="../assets/jquery-1.9.1.min.js"></script>
        <style>

        </style>
    </head>
<body>


<?php
/*
Maybe hearts on home.index don't have to href to php?
    Push defs/syns down,
    Add examples/comments inputs
    List examples/comments

This is the homage+comments page?
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
if(isset($_REQUEST['term']) && $_REQUEST['term']!="") {
    $word = $_REQUEST["term"];
}

?>


<script>

</script>

<?php
/*
echo "<h3>$word</h3>\n";
echo '<textarea id="new_ode_example" placeholder="word in the wild" style="width:100%; height:0.5in;"></textarea>';
echo '<textarea id="new_ode_comment" placeholder="comment" style="width:100%; height:0.5in;"></textarea>';
echo '<a href="javascript:void(0)" id="ode_save" class="button-b">Save</a>';
*/
//try {
    //$dbh = new PDO("pgsql:host='localhost';dbname=$DB_NAME", $USER, $PASSWORD);
    $dbh = new PDO("pgsql:host='$HOST';dbname=$DB_NAME", $USER, $PASSWORD);

    //if ($_POST) {
    if( isset($_REQUEST['the_word']) && isset($_REQUEST['new_ode_example']) && isset($_REQUEST['new_ode_comment'])  ) {

        $the_word=$_POST['the_word'];
        $new_ode_example=$_POST['new_ode_example'];
        $new_ode_comment=$_POST['new_ode_comment'];

        $sql = "INSERT INTO comments (word, example, comment) VALUES ('$the_word', '$new_ode_example, '$new_ode_comment)";
        $inserted = $dbh->exec( $sql );
    }



    $sql = "SELECT word, example, comment FROM comments WHERE word = '$word'";

    $result = $dbh->query($sql);
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr>";
        echo "<td>" . $row["word"] . "</td>";
        echo "<td>" . htmlspecialchars($row["example"]) . "</td>";
        echo "<td>" . htmlspecialchars($row["comment"]) . "</td>";
        echo "</tr>";
    }
//}
/*catch(PDOException $e) {
    echo $e->getMessage();
}
*/


?>


</body>
</html>


