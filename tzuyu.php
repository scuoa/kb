<!doctype html>

<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>Tzuyu</title>
		<meta name="language" content="en" />  
		<meta name="description" content="" />  
		<meta name="keywords" content="" />
		<link href="css/bootstrap.min.css" rel="stylesheet">
  		<link href="css/site.css" rel="stylesheet"> 
  		<script src="js/jquery.min.js" ></script>
  		<script src="js/site.js" ></script>

	</head>
	<body>

    
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">ㅤMenu</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="index.php">Home</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="nayeon.php">Nayeon</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="jeongyeon.php">Jeongyeon</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="momo.php">Momo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sana.php">Sana</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="jihyo.php">Jihyo</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="mina.php">Mina</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="dahyun.php">Dahyun</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="chaeyoung.php">Chaeyoung</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="tzuyu.php">Tzuyu</a>
        </li>
      </ul>
    </div>
  </nav>  

  <div class="container mt-3">
  <h3 class="text-center">Tzuyu</h3>


	<?php

	// open this directory 
	$myDirectory = opendir("images/tzuyu");

	// get each entry
	while($entryName = readdir($myDirectory)) {
		$dirArray[] = $entryName;
	}

	// close directory
	closedir($myDirectory);

	//	count elements in array
	$indexCount	= count($dirArray);

	?>




		<ul>

			<?php

			echo '<div class="row mt-3">';

			// loop through the array of files and print them all in a list
			for($index=2; $index < $indexCount; $index++) {
				// $extension = substr($dirArray[$index], -3);
				// if ($extension == 'jpg' or $extension == 'png'or $extension == 'jpeg'){ // list only jpgs
					echo '<div class="col-md-3 col-sm-6 col-6 col-xl-3 col-lg-3 mt-3">';
					echo '<img src="images/tzuyu/' . $dirArray[$index] . '" alt="Image" class="img-fluid rounded">';
					echo '</div>';
				// }	
			}

			echo '</div>';
			
			?>

		</ul>	



</div>



</body>
</html>