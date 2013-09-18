var timer;
var time_lapse;

function draw(size)
{
	var canvas = $('#canvas');
	var table = $('<table>').attr('id','boardtable');
	var i,j;
	var row, cell,img;
	for(i = 0; i < size; i++)
	{
		row = $('<tr>');
		for(j = 0; j < size; j++)
		{
			cell = $('<td>').addClass('off').attr('id','cell'+i+','+j);	
			cell.click(function()
			{
				//toggle function for each cell
				var state = this.className;
				var coord;
				var x,y;
				coord = this.id.substr(4).split(',');
					x = parseInt(coord[0]);
					y = parseInt(coord[1]);
				if (state == "off")
				{
					this.setAttribute('class','on');
					game.board.matrix[x][y] = 1;
				}
				else
				{
					this.setAttribute('class','off');
					game.board.matrix[x][y] = 0;
				}
				
					
			});
			cell.appendTo(row);
		}
		row.appendTo(table);
	}
	table.appendTo(canvas);
	
	speed_change(); //initialise time_lapse;
	update_html();
	
}

function update_html() //makes sure visual board corresponds to life matrix
{
	var cell;
	for(i = 0; i < game.b_size; i++)
	{
		for(j = 0; j < game.b_size; j++)
		{
			cell = document.getElementById('cell'+i+','+j);
			if(game.board.matrix[i][j]){cell.setAttribute('class','on');}
			else{cell.setAttribute('class','off');}
		}
	}
}
	


function next_step()
{
	game.next();
	update_html();
}

function play()
{
	var button = $('#playButton');
	if(button.val() == 'Play')
	{
		button.attr('value','Pause')
				.bind('mousedown',function(e){this.src='img/ctrl-pause-down.png'})
				.bind('mouseup',function(e){this.src = 'img/ctrl-play.png'});
		timer = setInterval(function(){next_step(game)},time_lapse);
	}
	else
	{
		button.attr('value','Play')
				.bind('mousedown',function(e){this.src='img/ctrl-play-down.png'})
				.bind('mouseup',function(e){this.src = 'img/ctrl-pause.png'});
		clearInterval(timer);
	}
}

function speed_change()
{
	time_lapse = 1500/$('#range').val();
	clearInterval(timer);
	$('#playButton').attr('value','Play');
	
}

//can be removed if no set button
function reset()
{
	game.initialise();
	game.preset(document.getElementById("presets").selectedIndex);
	update_html();
	
}

function change_preset(obj)
{
	game.initialise();
	game.preset(obj.selectedIndex);
	update_html();
}




			

			