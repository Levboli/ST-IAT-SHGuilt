define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/stiat6.js], function(APIConstructor, stiatExtension){

    var API = new APIConstructor();
	var global = API.getGlobal();

	return stiatExtension(
		{
			/*remindErrorText : '<p align="center" style="font-size:"4em"; font-family:arial">' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Press the other key to continue.<p/>',**/

			//Define the category.
			category :
			{
				name : 'Jeremy', //Category label.
				title : {
					media : {word : 'Jeremy'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 7 //Used to position the "Or" in the combined block.
				},
				media : [ //Stimuli
    		    {word : 'Jeremy'},
    			{word : 'Green Group Supervisor'}
				],
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'3em'}
			},
			attribute1 :
			{
				name : 'Innocent', //Attribute label
				title : {
					media : {word : 'Negative'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 7 //Used to position the "Or" in the combined block.
				},
				media : [ //Stimuli
					{word: 'Wrongfully Accused'},
					{word: 'Blameless'},
					{word: 'False Allegation'},
					{word: 'Faultless'},
					{word: 'Exonerated'}
				],
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'3em'}
			},
			attribute2 :
			{
				name : 'Guilty', //Attribute label
				title : {
					media : {word : 'Positive'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 7 //Used to position the "Or" in the combined block.
				},
				media : [ //Stimuli
					{word: 'Harasser'},
					{word: 'Perpetrator'},
					{word: 'Committed Offense'},
					{word: 'Unethical'},
					{word: 'Did It'}
				],
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'3em'}
			},

			base_url : {
			    image : 
		    }

		}
	);
});
