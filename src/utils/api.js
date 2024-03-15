import fetch from 'node-fetch';

const body = {
    search_terms: 'python programmer',
    location: 'Chicago, IL',
    page: '1'
};
const url = 'https://linkedin-jobs-search.p.rapidapi.com/';

const response = await fetch(url, {
	method: 'post',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json',
        'X-RapidAPI-Key': '2e0dc623e1msh7300201fe8619aep17c845jsn207bb8a16259',
		'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
        }
    
});

const data = await response.json();

console.log(data);