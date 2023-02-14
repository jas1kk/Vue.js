<template>
	<main class="app">
		<h1>The Quiz</h1>
		<br>
		<h1 class="h1-1">Выберите тест, который вы хотите пройти:</h1>
	</main>
	<footer class="fot">
		<div class="container">
			<div class="block">
				<img src="./img/html5.png" alt="" class="img-1">
				<div class="text">
					<router-link to="/new-page" class="link">New Page</router-link>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="block">
				<img src="./img/css3.png" alt="" class="img-2">
				<div class="text">
					<a href="">CSS3</a>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="block">
				<img src="./img/js.png" alt="" class="img-1">
				<div class="text">
					<a href="">JavaScript</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;	
	font-family: 'Montserrat', sans-serif;
}

body {
	margin: 0 auto;
	background-color: #271c36;
	color: #FFF;
}

.app {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
}

.fot{
	display: flex;
	flex-direction: row;
	padding: 8rem;
}

h1 {
	font-size: 2rem;
	margin-bottom: 2rem;
}

.h1-1{
	font-size: 1.5rem;
}

.container{
	display: flex;
	flex-direction: column;
}

.block{
	width: 400px;
	height: 400px;
	border: 1px solid palevioletred;
	border-radius: 50px;
	background-color: #ffffff;
	position: relative;
	left: 50px;
}

.img-1{
	width: 200px;
	height: 200px;
	position: relative;
	left: 100px;
	top: 30px;
}

.img-2{
	width: 140px;
	height: 190px;
	position: relative;
	left: 130px;
	top: 30px;
}

link{
	font-size: 2rem;
	text-align: center;
	text-decoration: none;
	color: #000000;
	position: relative;
	top: 100px;
}

.text{
	text-align: center;
}
</style>
