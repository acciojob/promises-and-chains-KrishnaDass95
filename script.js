const submitButtonElement = document.getElementById('btn');
submitButtonElement.addEventListener('click', (e)=>{
	e.preventDefault();
	const age = document.getElementById('age').value;
	const name = document.getElementById('name').value;
	let promise = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age > 18) {
				resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		}, 4000)
	})
	promise.then((res)=>{
	alert(res);
}).catch((e)=>{
	alert(e);
})
})
