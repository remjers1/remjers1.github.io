<!DOCTYPE html>
<html lang="ua">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/favicon.ico">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <title>Форма регистрации</title>
  </head>
  <body>

<section class="section">
	<div class="container">
         <?php
         if($_COOKIE['user'] == ''):
         ?>

		<div class="row">
			<div class="col-md-6">
				<h1>Форма регистрации</h1>
		<form action="php/check.php" method="post">
			<input class="form-control" type="text" name="login" id="login" placeholder="Введите длогин"> <br>
			<input class="form-control" type="text" name="name" id="name" placeholder="Введите имя"> <br>
			<input class="form-control" type="password" name="pass" id="pass" placeholder="Введите пароль"><br>
			<button class="btn btn-success" type="submit">Зарегистрировать</button>
		</form>
			</div>


			<div class="col-md-6">
				<h1>Форма Авторизации</h1>
		<form action="php/auth.php" method="post">
			<input class="form-control" type="text" name="login" id="login" placeholder="Введите длогин"> <br>
			<input class="form-control" type="password" name="pass" id="pass" placeholder="Введите пароль"><br>
			<button class="btn btn-success" type="submit">Авторизоваться</button>
		</form>
			</div>
		</div>
      <?php else: ?>
      	<p>Привет <?=$_COOKIE['user']?>. Чтобы выйти нажмите <a href="php/exit.php">здесь</a>.</p>
      <?php endif;?>

	</div>
</section>


    <script src="http://getbootstrap.com/assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
