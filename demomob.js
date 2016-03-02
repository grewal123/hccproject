/*
	Before the page loads, we create a bsService object. Do not change the name - that will break stuff :(
		The arguments passed in are a list of strings. Each string is an extensionID. these particular ID's are
		for the released version of the IdeaMACHE plugin and for a secret, special version of the extension
		that I have
	bsService will see if any of the extenions are availabe. If so it will use them. Otherwise, it will rely on the
		web-hosted version of bigsemantics

	 */

var bsService = new BSAutoSwitch(['elkanacmmmdgbnhdjopfdeafchmhecbf', 'gdgmmfgjalcpnakohgcfflgccamjoipd ']);


/*
Called on the rendering demo page
*/
function onLoadRendering(){


	/*
	Let's break down the arguments.
		-container: whatever HTML node you want to dump the rendering into
		-url: the URL you want a metadataRendering of.
		-null: if you already have metadata, you can pass it in as a clipping here. You don't really need to worry about this
				unless you're doing something quite complicated.
		-MICE.render: the prefered rendering function. IE: it's what will be called after BigSemantics finishes extracting
					  metadata and mmd. You can supply your own for fun and profit!
		-options: you can set some additional parameters here. The big one is options.callback,
					which you can use if for some reason you need access to the metadata and meta-metadata

					If what you really want is access to that sweet MetadataViewModel, see the "Custom Rendering" demo
	*/
	var container1 = document.getElementById('containerPrime1');
	var container2 = document.getElementById('containerPrime2');
	var container3 = document.getElementById('containerPrime3');
	var container4 = document.getElementById('containerPrime4');
	var container5 = document.getElementById('containerPrime5');
	var container6 = document.getElementById('containerPrime6');

	var url1= $("#containerPrime1").attr('url');
	var url2 = $("#containerPrime2").attr('url');
	var url3 = $("#containerPrime3").attr('url');
	var url4 = $("#containerPrime4").attr('url');
	var url5 = $("#containerPrime5").attr('url');
	var url6 = $("#containerPrime6").attr('url');

	var options1 = {};
	options1.callback = swizzIt1;
	var options2 = {};
	options2.callback = swizzIt2;
	var options3 = {};
	options3.callback = swizzIt3;
	var options4 = {};
	options4.callback = swizzIt4;
	var options5 = {};
	options5.callback = swizzIt5;
	var options6 = {};
	options6.callback = swizzIt6;

	RendererBase.addMetadataDisplay(container1, url1, null, MICE.render, options1);
	RendererBase.addMetadataDisplay(container2, url2, null, MICE.render, options2);
	RendererBase.addMetadataDisplay(container3, url3, null, MICE.render, options3);
	RendererBase.addMetadataDisplay(container4, url4, null, MICE.render, options4);
	RendererBase.addMetadataDisplay(container5, url5, null, MICE.render, options5);
	RendererBase.addMetadataDisplay(container6, url6, null, MICE.render, options6);


}
/*
	In a callback passed through via options, you are given access to metadata and the meta-metadata.
	You can probably ignore the meta-metadata.
*/
function swizzIt1(metadataAndMetametaData){
	//To make metadata easier to use via js, first unwrap it (it's initially wrapped for cross-compatibility with C#)
	var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
	//using unwrapped metadata is super easy and all the cool kids do it
		//never trust metadata! Like file I/O you should wrap it try catch statements
	try{
		var img = document.createElement('img');
		img.src = unwrappedMetadata.main_images[0].location;
		img.width = 200;
		img.height = 150;
		var src = document.getElementById('image1');
		src.appendChild(img);
		var titleOutput = unwrappedMetadata.title ;
		var titleNode = document.createTextNode(titleOutput);
		var titleHold = document.getElementById('title1');
		titleHold.appendChild(titleNode)

	}catch(e){
		var textOutput = "no price found (ps - a callback made me)";
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('priceOutput');
		textHold.appendChild(textNode)

	}



}
//flipkart
function swizzIt2(metadataAndMetametaData){
	//To make metadata easier to use via js, first unwrap it (it's initially wrapped for cross-compatibility with C#)
	var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
	//using unwrapped metadata is super easy and all the cool kids do it
		//never trust metadata! Like file I/O you should wrap it try catch statements
	try{
		var img = document.createElement('img');
		img.src = unwrappedMetadata.main_images[0].location;
		img.width = 200;
		img.height = 150;
		var src = document.getElementById('image2');
		src.appendChild(img);
		var titleOutput = unwrappedMetadata.title ;
		var titleNode = document.createTextNode(titleOutput);
		var titleHold = document.getElementById('title2');
		titleHold.appendChild(titleNode)

	}catch(e){
		var textOutput = "no price found (ps - a callback made me)";
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('priceOutput');
		textHold.appendChild(textNode)

	}

}
function swizzIt3(metadataAndMetametaData){
	//To make metadata easier to use via js, first unwrap it (it's initially wrapped for cross-compatibility with C#)
	var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
	//using unwrapped metadata is super easy and all the cool kids do it
		//never trust metadata! Like file I/O you should wrap it try catch statements
	try{
		var textOutput =   unwrappedMetadata.price ;
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('price3');
		textHold.appendChild(textNode)
		var img = document.createElement('img');
		img.src = unwrappedMetadata.main_images[0].location;
		img.width = 200;
		img.height = 150;
		var src = document.getElementById('image3');
		src.appendChild(img);
		var titleOutput = unwrappedMetadata.title ;
		var titleNode = document.createTextNode(titleOutput);
		var titleHold = document.getElementById('title3');
		titleHold.appendChild(titleNode)

	}catch(e){
		var textOutput = "no price found (ps - a callback made me)";
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('priceOutput');
		textHold.appendChild(textNode)

	}

}

function swizzIt4(metadataAndMetametaData){
	//To make metadata easier to use via js, first unwrap it (it's initially wrapped for cross-compatibility with C#)
	var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
	//using unwrapped metadata is super easy and all the cool kids do it
		//never trust metadata! Like file I/O you should wrap it try catch statements
	try{
		var textOutput =   unwrappedMetadata.price ;
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('price4');
		textHold.appendChild(textNode)
		var img = document.createElement('img');
		img.src = unwrappedMetadata.main_images[0].location;
		img.width = 200;
		img.height = 150;
		var src = document.getElementById('image4');
		src.appendChild(img);
		var titleOutput = unwrappedMetadata.title ;
		var titleNode = document.createTextNode(titleOutput);
		var titleHold = document.getElementById('title4');
		titleHold.appendChild(titleNode)

	}catch(e){
		var textOutput = "no price found (ps - a callback made me)";
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('priceOutput');
		textHold.appendChild(textNode)

	}

}
function swizzIt5(metadataAndMetametaData){
	//To make metadata easier to use via js, first unwrap it (it's initially wrapped for cross-compatibility with C#)
	var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
	//using unwrapped metadata is super easy and all the cool kids do it
		//never trust metadata! Like file I/O you should wrap it try catch statements
	try{
		var img = document.createElement('img');
		img.src = unwrappedMetadata.main_images[0].location;
		img.width = 100;
		img.height = 75;
		var src = document.getElementById('image5');
		src.appendChild(img);
		var titleOutput = unwrappedMetadata.title ;
		var titleNode = document.createTextNode(titleOutput);
		var titleHold = document.getElementById('title5');
		titleHold.appendChild(titleNode)

	}catch(e){
		var textOutput = "no price found (ps - a callback made me)";
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('priceOutput');
		textHold.appendChild(textNode)

	}

}
function swizzIt6(metadataAndMetametaData){
	//To make metadata easier to use via js, first unwrap it (it's initially wrapped for cross-compatibility with C#)
	var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
	//using unwrapped metadata is super easy and all the cool kids do it
		//never trust metadata! Like file I/O you should wrap it try catch statements
	try{
		var img = document.createElement('img');
		img.src = unwrappedMetadata.main_images[0].location;
		img.width = 100;
		img.height = 75;
		var src = document.getElementById('image6');
		src.appendChild(img);
		var titleOutput = unwrappedMetadata.title ;
		var titleNode = document.createTextNode(titleOutput);
		var titleHold = document.getElementById('title6');
		titleHold.appendChild(titleNode)

	}catch(e){
		var textOutput = "no price found (ps - a callback made me)";
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('priceOutput');
		textHold.appendChild(textNode)

	}

}

/*
Called on the data-only page
*/
function onLoadSemantics(){
	/*
	Let's break down the arguments.
		-url: the URL you want metadata for
		-options: If you already have meta-metadata, you can pass it in here so prevent double extraction.
		-callback: your function that will asynchronously recieve metadata
	*/

	var options = {};
	var url = $("#youtubeOutput").attr('url');
	var callback = gagaOohLala;
	bsService.loadMetadata(url, options, callback);
}

// Ignore this. I just use it to make numbers slightly prettier -- visciously copy-pasted from stack overflow:
// http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript

function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//The first argument passed to callback is an error message. in this case its null <3

function gagaOohLala(err, metadataAndMetametaData){



	//To make metadata easier to use via js, first unwrap it (it's initially wrapped for cross-compatibility with C#)
	var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
	//Before using the data, i kill off my loading indicator
	$('.loadingGifOfDoom').remove();

	//we create a node to hold the linked image
	//never trust metadata! Like file I/O you should wrap it try catch statements
	try{
		var youtubeThumbnail = document.createElement('img');
		youtubeThumbnail.className = "youtubeThumbnail"
		youtubeThumbnail.src = unwrappedMetadata.pic;
		//This lovely BSUtils function takes a machete to special characters.
		var neatlyFormattedViewCount = BSUtils.removeLineBreaksAndCrazies(unwrappedMetadata.number_of_views);
		numberWithCommas(neatlyFormattedViewCount);
		var textOutput = "Viewed over " + neatlyFormattedViewCount + " times!";
		var textNode = document.createTextNode(textOutput);

		var imageCont = document.getElementById('imageCont');
		imageCont.appendChild(youtubeThumbnail);
		imageCont.addEventListener('click',function(){
			var locationWithTime = unwrappedMetadata.location + "&t=7m2s";
			window.open(locationWithTime,'_blank');

		})
		var viewCont = document.getElementById('viewCont');
		viewCont.appendChild(textNode);




	}catch(e){
		var textOutput = "the youtube wrapper is experiencing problems, sorry :(";
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('priceOutput');
		textHold.appendChild(textNode)

	}
}
