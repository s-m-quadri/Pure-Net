<?php
include('./simple_html_dom.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $URL = $_POST['URL'];
    if (empty($URL)) {
        echo "URL is empty";
    } else {
        $html = file_get_html($URL);
        $html = preg_replace("/<div(.*)>(.+?)<\/div>/is", "<br/>$2<br/>", $html);
        echo ($html);
    }
}

else if ($_SERVER["REQUEST_METHOD"] == "GET"){
    str_replace('&amp;', '&', $URL);
    $URL = $_GET['URL'];
    if (empty($URL)) {
        echo "URL is empty";
    } else {
        $link_icon=
        '
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
        ';
        $html = file_get_html($URL);
        // foreach($html->find('body') as $e)
        //     $html = $e->innertext;
        
        foreach($html->find('style') as $e){
            $e->outertext = '';
        }

        foreach($html->find('meta') as $e){
            $e->outertext = '';
        }

        foreach($html->find('title') as $e){
            $e->outertext = '<br/><br/><br/><h1>' . $e->innertext . '</h1><br/><hr/><br/>';
        }

        foreach($html->find('div') as $e){
            $e->class = "pure-net-div";
            $e->style = "";
            $e->id = "";
        }

        foreach($html->find('span') as $e){
            $e->class = "pure-net-span";
        }

        foreach($html->find('a') as $e){
            $str = strval($e->href);
            if (strpos($e->href, "/") === 0) {
                $e->href = $_GET['URL_DOMAIN'] . $e->href;
            }

            $e->outertext = 
            '<br/>'
            .'<div class="pure-net-link">' 
                . $e->innertext
                .'<br/>'
                . '<p>'
                . '<a href=/scraper-server/scraper.php?URL=' . str_replace('&', '&amp;', $e->href) . '>'
                    . $link_icon . ' Link Here ' 
                . '</a>'
                .'<br/>'
                    . $e->href . ' (edit, as per need!).' 
                . '</p>'
            . '</div>';
            $e->href = '';
        }

        echo ($html);
    }
}
?>
