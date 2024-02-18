<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
<?php
    $dir = 'images';
    $files = scandir($dir);
    $ext = '.png';
    foreach ($files as $img) {
        if ( substr_compare($img, $ext, -strlen($ext), strlen($ext)) === 0 ) {
            ?>
                <h2 style="font-family: monospace;"><?=$img?></h2>
                <div style="text-align: center; margin-bottom: 100px;">
                    <img src="images/<?=$img?>">
                </div>
            <?
        }
    }
?>
</div>
</body>
</html>