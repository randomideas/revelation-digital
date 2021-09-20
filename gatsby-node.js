const _ = require('lodash');
const path = require('path');
const slash = require('slash');
const axios = require('axios');

const getData = async () => {
  var a =  axios({
		url: 'https://development.revelation.digital/wp-json/newrd/v1/rd_pages',
		method: 'get',
	});
	console.log(a);
	return a;
};  

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions
	let Data = await getData();
	//console.log(Data);
	await Promise.all(Data.data.ResponseData.Pages.map(async (value) => {
    console.log(value.slug);
	var page = require.resolve(`./src/templates/page.js`);
		if(value.title == "Home"){
			var pathurl = '/';
		}
		else{
			var pathurl = `/${value.slug}`;
		}
		createPage({
			path: pathurl,
			component: page,
			context: {
				Data: value,
			}
		});
  }));
  await Promise.all(Data.data.ResponseData.CS.map(async (value) => {
    console.log(value.slug);
	const CsTemplate = require.resolve(`./src/templates/cs_details.js`);
		createPage({
			path: `/case-studies/${value.slug}`,
			component: slash(CsTemplate),
			context: {
				Data: value,
			}
		});
  }));
}	

