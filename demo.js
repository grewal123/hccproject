/*Varinder Singh
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
	var container = document.getElementById('containerPrime1');

	var url = $("#containerPrime1").attr('url');
	var options = {};
	options.callback = swizzIt;

	RendererBase.addMetadataDisplay(container, url, null, MICE.render, options);


}


/*
	In a callback passed through via options, you are given access to metadata and the meta-metadata.
	You can probably ignore the meta-metadata.
*/
function swizzIt(metadataAndMetametaData){
	//To make metadata easier to use via js, first unwrap it (it's initially wrapped for cross-compatibility with C#)
	var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
	//using unwrapped metadata is super easy and all the cool kids do it
		//never trust metadata! Like file I/O you should wrap it try catch statements
	try{
		//var textOutput = "And it's only " + unwrappedMetadata.main_images[0].location + "! (ps - a callback made me)";
		var img = document.createElement('img');
		img.src = unwrappedMetadata.main_images[0].location;
		img.width = 500;
		img.height = 500;
		var src = document.getElementById('image');
		src.appendChild(img);
		var ratingOutput = unwrappedMetadata.overall_rating ;
		var ratingNode = document.createTextNode(ratingOutput);
		var ratingHold = document.getElementById('ratings');
		ratingHold.appendChild(ratingNode)
		var priceOutput = unwrappedMetadata.price ;
		var priceNode = document.createTextNode(priceOutput);
		var priceHold = document.getElementById('price');
		priceHold.appendChild(priceNode)
		var descriptionOutput = unwrappedMetadata.description + "$";
		var descriptionNode = document.createTextNode(descriptionOutput);
		var descriptionHold = document.getElementById('description');
		descriptionHold.appendChild(descriptionNode)
		var titleOutput = unwrappedMetadata.title ;
		var titleNode = document.createTextNode(titleOutput);
		var titleHold = document.getElementById('title');
		titleHold.appendChild(titleNode)
		var specificationsOutput = unwrappedMetadata.text_keywords ;
		var specificationsNode = document.createTextNode(specificationsOutput);
		var specificationsHold = document.getElementById('specifications');
		specificationsHold.appendChild(specificationsNode)
		var reviewsOutput = "Click to read all the "+unwrappedMetadata.reviews.length+" reviews" ;
		var reviewsNode = document.createTextNode(reviewsOutput);
		var reviewsHold = document.getElementById('reviews');
		reviewsHold.appendChild(reviewsNode)
		var sug1 = unwrappedMetadata.companion_products[0].location;
		var sug2 = unwrappedMetadata.companion_products[1].location;
		//onLoadRenderingForSuggestions(sug1,sug2)

	}catch(e){
		var textOutput = "Data not available in json";
		var textNode = document.createTextNode(textOutput);
		var textHold = document.getElementById('ratings');
		textHold.appendChild(textNode)

	}



}
/*
function swizzItre(metadataAndMetametaData){
		var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
		try{
			var titleOutput = ""+unwrappedMetadata.price +"";
			var titleNode = document.createTextNode(titleOutput);
			var titleHold = document.getElementById('price');
			titleHold.appendChild(titleNode)

		}
		catch{
			var textOutput = "Data not available in json";
			var textNode = document.createTextNode(textOutput);
			var textHold = document.getElementById('ratings');
			textHold.appendChild(textNode)

		}
	}
	*/

/*
function onLoadRenderingForSuggestions(url1,url2){

	var container1 = document.getElementById('sug1');
	var options = {};
	options.callback = swizzItForSuggestions;

	RendererBase.addMetadataDisplay(container1, url1, null, MICE.render, options);

}
function swizzItForSuggestions{
		var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
		try{
			var titleOutput = unwrappedMetadata.title ;
			var titleNode = document.createTextNode(titleOutput);
			var titleHold = document.getElementById('sug1');
			titleHold.appendChild(titleNode)

		}
		catch{
			var textOutput = "Data not available in json";
			var textNode = document.createTextNode(textOutput);
			var textHold = document.getElementById('ratings');
			textHold.appendChild(textNode)

		}

}
*/
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
