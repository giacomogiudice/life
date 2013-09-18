//life_def.js
//
//

function Matrix(size)
{
	this.matrix = new Array(size);
	for(var i = 0; i < size; i++)
	{
		this.matrix[i] = new Array(size);		
	}
}

function Life(size)
{
	this.b_size = size;
	this.board = new Matrix(size);
}

Life.prototype.next = function()
{
	var next_board = new Matrix(this.b_size);
	var i,j;
	
	for(i = 0; i < this.b_size; i++)
    {
        for(j = 0; j < this.b_size; j++)
        {
            next_board.matrix[i][j] = this.check(i,j);
        }
    }
	
	for(i = 0; i < this.b_size; i++)
    {
        for(j = 0; j < this.b_size; j++)
        {
            this.board.matrix[i][j] = next_board.matrix[i][j];
        }
    }
}

Life.prototype.check = function(x,y)
{
	var i,j;
    var x_p, y_p;
    var living_cells = 0;
    for(i = -1; i <= 1; i++)
    {
        for(j = -1; j <= 1; j++)
        {
            if(!(i == 0 && j == 0))
            {
                x_p = x + i;
                y_p = y + j;
                if(x_p >= 0 && x_p < this.b_size && y_p >= 0 && y_p < this.b_size)
                {
                    if(this.board.matrix[x_p][y_p]){living_cells++;}
                }
            }
        }
    }
    
    if(this.board.matrix[x][y] == 1 && (living_cells == 2 || living_cells == 3)){return 1;}
    else if(this.board.matrix[x][y] == 0 && living_cells == 3){return 1;}
    else {return 0;}
}

Life.prototype.print = function()
{
	var i,j;
    
    for(i = 0; i < this.b_size; i++)
    {
        for(j = 0; j < this.b_size; j++)
        {
            document.write(this.board.matrix[i][j] + ' ');
        }
        document.write('<br/>');
    }
	document.write('<br/>');
}

Life.prototype.initialise = function()
{
	var i,j;
    for(i = 0; i < this.b_size; i++)
    {
        for(j = 0; j < this.b_size; j++)
        {
			this.board.matrix[i][j] = 0;
		}
	}
	
	/*this.board.matrix[10][10] = 1;
    this.board.matrix[11][11] = 1;
    this.board.matrix[11][10] = 1;
    this.board.matrix[11][12] = 1;
	this.board.matrix[12][11] = 1;*/
}

Life.prototype.preset = function(p_num)
{
	var m=parseInt(this.b_size/2);
	if(p_num==1)
	{
		this.board.matrix[m-1][m-1] = 1;
	  	this.board.matrix[m][m] = 1;
	  	this.board.matrix[m][m-1] = 1;
	  	this.board.matrix[m][m+1] = 1;
	  	this.board.matrix[m+1][m] = 1;
	}
	else if(p_num==2)
	{
		this.board.matrix[m][m] = 1;
	  	this.board.matrix[m-1][m] = 1;
	  	this.board.matrix[m][m+1] = 1;
	  	this.board.matrix[m+1][m] = 1;
	}
	else if(p_num==3)
	{
		this.board.matrix[m-2][m] = 1;
		this.board.matrix[m-1][m-1] = 1;
	  	this.board.matrix[m][m-1] = 1;
	  	this.board.matrix[m][m+1] = 1;
	  	this.board.matrix[m][m] = 1;
	}
	else if(p_num==4)
	{
		alert('boo');
	}
	
		
}


	