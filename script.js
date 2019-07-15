const correctAnswers = ['B','B','A','B','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit',e=>{
	e.preventDefault();
	let score=0;
	const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
	userAnswer.forEach((answer, index)=>{
		if(answer === correctAnswers[index]){
			score += 20;
		}
	});
	scrollTo(0,0);
	result.classList.remove('d-none');
	let output = 0;
	const timer = setInterval(()=>{
		result.querySelector('span').textContent =`${output}%`;
		if(output>50){
			result.querySelector('span').setAttribute('style','color:green');
		} if(output>80){
			result.querySelector('span').setAttribute('style','color:blue');
		}
		if(output===score){
			clearInterval(timer);
		}else{
			output++;
		}
	},20);
	form.reset();
});