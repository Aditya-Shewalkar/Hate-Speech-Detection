async function submitForm() {
    var data = document.getElementById("textInput").value;
    console.log(data);
    async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Hate-speech-CNERG/indic-abusive-allInOne-MuRIL",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": data}).then((response) => {
	console.log(JSON.stringify(response));
    responseContainer.innerHTML = "Toxicity percentage " + response[0][0].score.toFixed(2);
});
}