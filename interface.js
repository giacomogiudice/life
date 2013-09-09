var timer;
var time_lapse = 1000;//in msecs

function draw(size)
{
	
	var canvas = document.getElementById('canvas');
	var table = document.createElement('table');
	table.setAttribute('id','boardtable');
	var i,j;
	var row, cell,img;
	for(i = 0; i < size; i++)
	{
		row = document.createElement('tr');
		for(j = 0; j < size; j++)
		{
			cell = document.createElement('td');
			img = document.createElement('img');
			img.setAttribute('class','off');
			img.setAttribute('id','cell'+i+','+j);
			img.onclick = function ()
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
				
					
			};
			
			cell.appendChild(img);
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	canvas.appendChild(table);
	next_step(game);
}



function next_step(life)
{
	var cell;
	for(i = 0; i < life.b_size; i++)
	{
		for(j = 0; j < life.b_size; j++)
		{
			cell = document.getElementById('cell'+i+','+j);
			if(life.board.matrix[i][j]){cell.setAttribute('class','on');}
			else{cell.setAttribute('class','off');}
		}
	}
	life.next();
}

function play(life)
{
	var button = document.getElementById('playButton');
	if(button.value == 'Play')
	{
		button.setAttribute('value','Pause');
		timer = setInterval(function(){next_step(life)},time_lapse);
	}
	else
	{
		button.setAttribute('value','Play');
		clearInterval(timer);
	}
}

function speed_change()
{
	var range = document.getElementById("range");
	time_lapse = 1000/range.value;
}



			

			