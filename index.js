define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){

	var API = new APIConstructor();
		  return stiatExtension({
		  category : {
		    name : 'Jeremy', //Will appear in the data.
		    title : {
		      media : {word : 'Jeremy'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    },
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : 'Green Group Supervisor'}
		    ],
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },

  		attribute1 :
			{
			name : 'Guilty', //Attribute label
			title : {
				media : {word : 'Guilty'}, //Name of the category presented in the task.
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
		attribute2 :
			{
			name : 'Innocent', //Attribute label
			title : {
				media : {word : 'Innocent'}, //Name of the category presented in the task.
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

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
